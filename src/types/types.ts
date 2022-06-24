import {
    ADD_PORTFOLIO_DATA,
    CHANGE_SELECTED_CATEGORY, DELETE_SELECTED_CARDS,
    SET_PORTFOLIO_DATA,
    TOGGLE_IS_CARD_SELECTED
} from "../redux/portfolioReducer";

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

export interface ToggleIsCardSelected {
    type: typeof TOGGLE_IS_CARD_SELECTED;
    payload: string
}

export interface DeleteSelectedCards {
    type: typeof DELETE_SELECTED_CARDS
}

export type AuthActions =
    | SetPortfolioData
    | AddPortfolioData
    | ChangeSelectedCategory
    | ToggleIsCardSelected
    | DeleteSelectedCards

// export type CardCategoryFilter = CardCategory | "Show all"
//
// export interface CardCategory {
//     category: "branding" | "motion" | "design" | "sport"
// }