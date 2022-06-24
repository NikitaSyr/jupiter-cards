import s from "./PortfolioHeader.module.css"

export const PortfolioHeader = () => {
    return (
        <div className={s.portfolio__header}>
            <div className={s.header__name}>
                Portfolio
            </div>
            <div className={s.header__text}>
                Agency provides a full service range including technical skills, design, business understanding.
            </div>
        </div>
    )
}