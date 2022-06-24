import {useDispatch, useSelector} from "react-redux";
import {actions, getPortfolioData, getSelectedCategory} from "../../redux/portfolioReducer";
import {PortfolioCard} from "./PortfolioCard/PortfolioCard";
import React, {useEffect} from "react";
import {cardsLocalDB} from "../../localDB";
import {LOAD_DATA_PORTION_AMOUNT} from "../../constants/constants";
import {PortfolioHeader} from "./PortfolioHeader/PortfolioHeader";
import s from "./Portfolio.module.css"
import {PortfolioCategories} from "./PortfolioCategories/PortfolioCategories";
import {PortfolioButton} from "./PortfolioButton/PortfolioButton";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const portfolioCardsList = useSelector(getPortfolioData);
    const currentSelectedCategory = useSelector(getSelectedCategory)
    useEffect(() => {
        dispatch(actions.setCardsListAC(cardsLocalDB));
    }, [dispatch])

    const loadMoreData = () => {
        for (let i = 1; i <= LOAD_DATA_PORTION_AMOUNT; i++) {
            dispatch(actions.addNewCardsToListAC())
        }
    }

    const changeSelectedCategoryHandler = (category: string) => {
        dispatch(actions.changeSelectedCategoryAC(category));
    }


    const toggleIsSelectedHandler = (cardId: string) => {
        dispatch(actions.toggleIsSelectedCardByIdAC(cardId))
    }

    const getFilteredList = () => {
        if (!currentSelectedCategory) {
            return portfolioCardsList;
        }
        return portfolioCardsList.filter((item) => item.category === currentSelectedCategory);
    }

    const portfolioItemsList = getFilteredList().map(item => (
        <PortfolioCard {...item} key={item.cardId} changeSelectedCategoryHandler={changeSelectedCategoryHandler}
                       toggleIsSelectedHandler={toggleIsSelectedHandler}/>
    ))


    const onKeyPressed = (e: React.KeyboardEvent) => {
        if (e.code === "Delete") {
            dispatch(actions.deleteSelectedCardsAC())
        }
    }

    return (
        <div className={s.portfolio}>
            <PortfolioHeader/>
            <div onKeyDown={onKeyPressed} tabIndex={0} className={s.portfolio__content}>
                <PortfolioCategories changeSelectedCategoryHandler={changeSelectedCategoryHandler}
                                     currentSelectedCategory={currentSelectedCategory}/>
                <div className={s.content__row}>
                    {portfolioItemsList}
                </div>
                <PortfolioButton loadMoreData={loadMoreData}/>
            </div>
        </div>
    )
}