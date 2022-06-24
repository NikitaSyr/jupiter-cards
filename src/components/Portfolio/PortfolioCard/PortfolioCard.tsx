import React from "react";
import s from "./PortfolioCard.module.css"

type PropsType = {
    cardId: string
    name: string
    category: string
    image: string
    isSelected: boolean
    changeSelectedCategoryHandler: Function
    toggleIsSelectedHandler: Function
}

export const PortfolioCard: React.FC<PropsType> = ({
                                                       cardId,
                                                       image,
                                                       name,
                                                       category,
                                                       isSelected,
                                                       changeSelectedCategoryHandler,
                                                       toggleIsSelectedHandler
                                                   }) => {
    return (
        <div onClick={() => toggleIsSelectedHandler(cardId)} className=
            {(isSelected) ? `${s.portfolio__card} ${s.selected__card}` : s.portfolio__card}>
            <img src={image} alt="Portfolio card "/>
            <div className={s.card__name}>{name}</div>
            <button onClick={() => changeSelectedCategoryHandler(category)} className={s.card__button}>{category}</button>
        </div>
    )
}