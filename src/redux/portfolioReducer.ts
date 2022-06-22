import {AddPortfolioData, AuthActions, CardCategory, ICardType, SetPortfolioData} from "../types/types";
import {AppState} from "./reduxStore";
import {capitalizeFirstLetter, randomEnum, randomItemFromArray} from "../utils/helpers";
import {imagesDB, wordsDB} from "../localDB";

export const SET_PORTFOLIO_DATA = "jupiter-cards/portfolio/SET_PORTFOLIO_DATA"
export const ADD_PORTFOLIO_DATA = "jupiter-cards/portfolio/ADD_PORTFOLIO_DATA"


interface IState {
    portfolioData: ICardType[]
}

const initialState: IState = {
    portfolioData: []
}

const portfolioReducer = (state = initialState, action: AuthActions): IState => {
    switch (action.type) {
        case SET_PORTFOLIO_DATA: {
            return {
                ...state,
                portfolioData: action.payload
            }
        }
        case ADD_PORTFOLIO_DATA: {
            const randomId = Date.now().toString()
            const randomCategory = randomEnum(CardCategory).toString();
            const randomImage = randomItemFromArray(imagesDB);
            const randomName = capitalizeFirstLetter(randomItemFromArray(wordsDB))
            const newPortfolioCard: ICardType  = {
                cardId: randomId,
                name: randomName,
                category: randomCategory,
                image: randomImage,
                isSelected: false
            }
            return {
                ...state,
                portfolioData: [...state.portfolioData, newPortfolioCard]
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
    }),
    addNewCardsToListAC: (): AddPortfolioData => ({
        type: ADD_PORTFOLIO_DATA,
    })
}

export const getPortfolioData = (state: AppState): ICardType[] => {
    return state.portfolioPage.portfolioData
}

export default portfolioReducer;