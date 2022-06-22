import React from "react";

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
    console.log(isSelected)
    return (
        <div onClick={() => toggleIsSelectedHandler(cardId)}>
            {/*<img src={image} alt="Portfolio card "/>*/}
            {category}
            <button onClick={() => changeSelectedCategoryHandler(category)}>Change category</button>
        </div>
    )
}