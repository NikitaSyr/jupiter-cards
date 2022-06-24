import React from "react";
import s from "./PortfolioButton.module.css"

type PropsType = {
    loadMoreData: () => void
}

export const PortfolioButton: React.FC<PropsType> = ({loadMoreData}) => {
    return (
        <button onClick={loadMoreData} className={s.portfolio__button}>LOAD MORE</button>
    )
}