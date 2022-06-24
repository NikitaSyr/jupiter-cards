import {CategoriesButton} from "./CategoriesButton/CategoriesButton";
import React from "react";
import {categoriesDB} from "../../../localDB";
import s from "./PortfolioCategories.module.css"
import useWindowDimensions from "../../../utils/utils";
import {MOBILE_LAYOUT_WIDTH} from "../../../constants/constants";
import {CategoriesForm} from "./CategoriesForm/CategoriesForm";

type PropsType = {
    changeSelectedCategoryHandler: (category: string) => void
    currentSelectedCategory: string
}

export const PortfolioCategories: React.FC<PropsType> = ({changeSelectedCategoryHandler, currentSelectedCategory}) => {
    const {width} = useWindowDimensions()

    const portfolioCategoriesButtonsList = categoriesDB.map(item => (
        <CategoriesButton category={item} key={item} buttonText={item} changeSelectedCategoryHandler={changeSelectedCategoryHandler}
                          currentSelectedCategory={currentSelectedCategory}/>
    ))

    return (
        <div className={s.portfolio__categories}>
            {width >= MOBILE_LAYOUT_WIDTH ? (
                <>
                    <CategoriesButton category={""} key={"Show All"} buttonText={"Show all"}
                                      changeSelectedCategoryHandler={changeSelectedCategoryHandler}
                                      currentSelectedCategory={currentSelectedCategory}/>
                    {portfolioCategoriesButtonsList}
                </>)
            : (
                    <CategoriesForm changeSelectedCategoryHandler={changeSelectedCategoryHandler}/>
                )}
        </div>
    )
}