import React from "react";
import s from "./Header.module.css"
import useWindowDimensions from "../../utils/utils";
import {MOBILE_LAYOUT_WIDTH} from "../../constants/constants";

export const Header = () => {
    const {width} = useWindowDimensions();
    return (
        <header className={s.header}>
            <div className={s.header__row}>
                <button className={`${s.header__button} ${s.button__logo}`}>
                    <img src="https://i.imgur.com/jpir6wV.png" alt="header logo"/>
                </button>
                {width >= MOBILE_LAYOUT_WIDTH && (
                    <>
                        <div className={s.header__navigation}>
                            <button className={`${s.header__button} ${s.button__navigation}`}>About</button>
                            <button className={`${s.header__button} ${s.button__navigation}`}>Services</button>
                            <button className={`${s.header__button} ${s.button__navigation}`}>Pricing</button>
                            <button className={`${s.header__button} ${s.button__navigation}`}>Blog</button>
                        </div>
                        <button className={`${s.header__button} ${s.button__contact}`}>CONTACT</button>
                    </>
                    )}
            </div>
        </header>
    )
}