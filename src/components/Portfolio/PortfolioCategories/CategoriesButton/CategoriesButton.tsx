import React from "react";
import s from "./CategoriesButton.module.css"

type PropsType = {
    category: string
    buttonText: string
    changeSelectedCategoryHandler: Function
    currentSelectedCategory: string
}

export const CategoriesButton: React.FC<PropsType> = ({category, buttonText, changeSelectedCategoryHandler, currentSelectedCategory}) => {
    return (
        <button onClick={() => changeSelectedCategoryHandler(category)}
                className=
                    {(currentSelectedCategory === category) ? `${s.categories__button} ${s.active__button}` : s.categories__button}
            >
            {buttonText}
        </button>
    )
}