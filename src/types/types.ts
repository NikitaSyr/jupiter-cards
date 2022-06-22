import {ADD_PORTFOLIO_DATA, SET_PORTFOLIO_DATA} from "../redux/portfolioReducer";

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

export type AuthActions =
    | SetPortfolioData
    | AddPortfolioData

export enum CardCategory {
    Branding, Motion, Design, Sport
}