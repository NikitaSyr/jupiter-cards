import {useDispatch, useSelector} from "react-redux";
import {actions, getPortfolioData, getSelectedCategory} from "../../redux/portfolioReducer";
import {PortfolioCard} from "./PortfolioCard/PortfolioCard";
import {useEffect} from "react";
import {cardsLocalDB, categoriesDB} from "../../localDB";
import {LOAD_DATA_PORTION_AMOUNT} from "../../constants/constants";
import {CategoriesButton} from "./CategoriesButton";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const portfolioCardsList = useSelector(getPortfolioData);
    const currentSelectedCategory = useSelector(getSelectedCategory)
    useEffect(() => {
        dispatch(actions.setCardsListAC(cardsLocalDB));
    }, [dispatch])

    const loadMoreData = () => {
        for (let i = 1; i <= LOAD_DATA_PORTION_AMOUNT; i++) {
            //TODO
            // Check multiple dispatch optimization
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
        <PortfolioCard {...item} key={item.cardId} changeSelectedCategoryHandler={changeSelectedCategoryHandler} toggleIsSelectedHandler={toggleIsSelectedHandler}/>
    ))

    const portfolioCategoriesButtonsList = categoriesDB.map(item => (
        <CategoriesButton category={item} key={item} buttonText={item} onClickHandle={changeSelectedCategoryHandler}/>
    ))


    return (
        <div>
            <div>
                <CategoriesButton category={""} key={"Show all"} buttonText={"Show all"}
                                  onClickHandle={changeSelectedCategoryHandler}/>
                {portfolioCategoriesButtonsList}
            </div>
            <div>{currentSelectedCategory}</div>
            <button onClick={loadMoreData}>Load more</button>
            <div>
                {portfolioItemsList}
            </div>
        </div>
    )
}