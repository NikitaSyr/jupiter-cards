import React, {useState} from "react";
import {categoriesDB} from "../../../../localDB";
import s from "./CategoriesForm.module.css"

type PropsType = {
    changeSelectedCategoryHandler: (category: string) => void
}

export const CategoriesForm: React.FC<PropsType> = ({changeSelectedCategoryHandler}) => {
    const [currentOption, setCurrentOption] = useState("");

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        setCurrentOption(e.currentTarget.value);
        changeSelectedCategoryHandler(e.currentTarget.value);
    }

    const optionList = categoriesDB.map(item => (
        <option value={item} key={item}>{item}</option>
    ))

    return (
        <form className={s.categories__form}>
            <select value={currentOption} onChange={handleChange}>
                <option value="">Show All</option>
                {optionList}
            </select>
        </form>
    )
}
