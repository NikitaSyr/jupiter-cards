import React from "react";

type PropsType = {
    category: string,
    buttonText: string
    onClickHandle: Function
}

export const CategoriesButton: React.FC<PropsType> = ({category, buttonText,onClickHandle}) => {
    return (
        <button onClick={() => onClickHandle(category)}>
            {buttonText}
        </button>
    )
}