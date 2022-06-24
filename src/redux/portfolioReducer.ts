import {
    AddPortfolioData,
    AuthActions,
    ChangeSelectedCategory, DeleteSelectedCards,
    ICardType,
    SetPortfolioData,
    ToggleIsCardSelected
} from "../types/types";
import {AppState} from "./reduxStore";
import {capitalizeFirstLetter, randomItemFromArray} from "../utils/utils";
import {categoriesDB, imagesDB, wordsDB} from "../localDB";
import {v4 as uuidv4} from "uuid";

export const SET_PORTFOLIO_DATA = "jupiter-cards/portfolio/SET_PORTFOLIO_DATA"
export const ADD_PORTFOLIO_DATA = "jupiter-cards/portfolio/ADD_PORTFOLIO_DATA"
export const CHANGE_SELECTED_CATEGORY = "jupiter-cards/portfolio/CHANGE_SELECTED_CATEGORY"
export const TOGGLE_IS_CARD_SELECTED = "jupiter-cards/portfolio/TOGGLE_IS_CARD_SELECTED"
export const DELETE_SELECTED_CARDS = "jupiter-cards/portfolio/DELETE_SELECTED_CARDS"


interface IState {
    portfolioData: ICardType[],
    selectedCategory: string
}

const initialState: IState = {
    portfolioData: [],
    selectedCategory: ""
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
            const randomId = uuidv4();
            const randomCategory = randomItemFromArray(categoriesDB);
            const randomImage = randomItemFromArray(imagesDB);
            const randomName = capitalizeFirstLetter(randomItemFromArray(wordsDB))
            const newPortfolioCard: ICardType = {
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
        case CHANGE_SELECTED_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.payload
            }
        }
        case TOGGLE_IS_CARD_SELECTED: {
            const modifiedList = state.portfolioData.map(item => item.cardId === action.payload
                ? {...item, isSelected: !item.isSelected}
                : item)
            return {
                ...state,
                portfolioData: modifiedList
            }
        }
        case DELETE_SELECTED_CARDS: {
            const modifiedList = state.portfolioData.filter(item => !item.isSelected)
            return {
                ...state,
                portfolioData: modifiedList
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
    }),
    changeSelectedCategoryAC: (payload: string): ChangeSelectedCategory => ({
        type: CHANGE_SELECTED_CATEGORY,
        payload
    }),
    toggleIsSelectedCardByIdAC: (payload: string): ToggleIsCardSelected => ({
        type: TOGGLE_IS_CARD_SELECTED,
        payload
    }),
    deleteSelectedCardsAC: (): DeleteSelectedCards => ({
        type: DELETE_SELECTED_CARDS
    })
}

export const getPortfolioData = (state: AppState): ICardType[] => {
    return state.portfolioPage.portfolioData
}

export const getSelectedCategory = (state: AppState): string => {
    return state.portfolioPage.selectedCategory
}

export default portfolioReducer;