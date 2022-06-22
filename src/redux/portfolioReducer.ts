import {AuthActions, ICardType, SetPortfolioData} from "../types/types";
import {AppState} from "./reduxStore";

export const SET_PORTFOLIO_DATA = "jupiter-cards/portfolio/SET_PORTFOLIO_DATA"


interface IState {
    portfolioData: ICardType[]
}

const initialState: IState = {
    portfolioData: []
}

const portfolioReducer = (state = initialState, action: AuthActions): IState => {
    switch (action.type) {
        case SET_PORTFOLIO_DATA: {
            console.log("В сеттере")
            console.log(action.payload)
            return {
                ...state,
                portfolioData: action.payload
            }
        }
        default:
            return state;
    }
}

export const actions = {
    setCardsListAC: (payload: ICardType[]): SetPortfolioData => ({
        type: SET_PORTFOLIO_DATA,
        payload
    })
}

export const getPortfolioData = (state: AppState): ICardType[] => {
    return state.portfolioPage.portfolioData
}

export default portfolioReducer;