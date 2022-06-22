import {SET_PORTFOLIO_DATA} from "../redux/portfolioReducer";

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

export type AuthActions =
    | SetPortfolioData