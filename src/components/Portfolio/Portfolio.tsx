import {useDispatch, useSelector} from "react-redux";
import {actions, getPortfolioData} from "../../redux/portfolioReducer";
import {PortfolioCard} from "./PortfolioCard/PortfolioCard";
import {useEffect} from "react";
import {cardsLocalDB} from "../../db";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const portfolioCardsList = useSelector(getPortfolioData);

    const portfolioItemsList = portfolioCardsList.map(item => (
        <PortfolioCard {...item} key={item.cardId}/>
    ))

    useEffect(() => {
        dispatch(actions.setCardsListAC(cardsLocalDB))
    }, [dispatch])

    return (
        <div>
            <div>Кнопки</div>
            <div>
                {portfolioItemsList}
            </div>
        </div>
    )
}