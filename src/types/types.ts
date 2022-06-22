import {ADD_PORTFOLIO_DATA, CHANGE_SELECTED_CATEGORY, SET_PORTFOLIO_DATA} from "../redux/portfolioReducer";

export interface ICardType {
    cardId: string
    name: string
    category: string
    image: string
    isSelected: boolean
}

export interface SetPortfolioData {
    type: typeof SET_PORTFOLIO_DATA;
    payload: ICardType[]
}

export interface AddPortfolioData {
    type: typeof ADD_PORTFOLIO_DATA;
}

export interface ChangeSelectedCategory {
    type: typeof CHANGE_SELECTED_CATEGORY;
    payload: string
}

export type AuthActions =
    | SetPortfolioData
    | AddPortfolioData
    | ChangeSelectedCategory

// export type CardCategoryFilter = CardCategory | "Show all"
//
// export interface CardCategory {
//     category: "branding" | "motion" | "design" | "sport"
// }