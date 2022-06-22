import React from "react";

type PropsType = {
    cardId: string
    name: string
    category: string
    image: string
    isSelected: boolean
}

export const PortfolioCard: React.FC<PropsType> = ({image}) => {
    return (
        <div>
            <img src={image} alt="Portfolio card "/>
        </div>
    )
}