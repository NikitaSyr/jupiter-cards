import {useDispatch, useSelector} from "react-redux";
import {actions, getPortfolioData} from "../../redux/portfolioReducer";
import {PortfolioCard} from "./PortfolioCard/PortfolioCard";
import {useEffect} from "react";
import {cardsLocalDB} from "../../localDB";
import {LOAD_DATA_PORTION_AMOUNT} from "../../constants/constants";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const portfolioCardsList = useSelector(getPortfolioData);

    const portfolioItemsList = portfolioCardsList.map(item => (
        <PortfolioCard {...item} key={item.cardId}/>
    ))

    useEffect(() => {
        dispatch(actions.setCardsListAC(cardsLocalDB))
    }, [dispatch])

    const loadMoreData = () => {
        for (let i = 1; i <= LOAD_DATA_PORTION_AMOUNT; i++ ) {
            //TODO
            // Check multiple dispatch optimization
            dispatch(actions.addNewCardsToListAC())
        }
    }
    
    return (
        <div>
            <div>Кнопки</div>
            <button onClick={loadMoreData}>Load more</button>
            <div>
                {portfolioItemsList}
            </div>
        </div>
    )
}