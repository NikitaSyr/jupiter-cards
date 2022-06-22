import React from "react";

type PropsType = {
    cardId: string
    name: string
    category: string
    image: string
    isSelected: boolean
    changeSelectedCategoryHandler: Function
}

export const PortfolioCard: React.FC<PropsType> = ({image, name, category, changeSelectedCategoryHandler}) => {
    return (
        <div>
            {/*<img src={image} alt="Portfolio card "/>*/}
            {category}
            <button onClick={() => changeSelectedCategoryHandler(category)}>Change category</button>
        </div>
    )
}