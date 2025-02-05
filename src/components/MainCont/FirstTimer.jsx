//Mounted in MainCont.jsx
//Contains translation keys to fetch translated content from the translation files.

import "./firsttimer.css"

import { useTranslation } from "react-i18next"

export const FirstTimer = () => {
    const { t } = useTranslation()

    return <div className="firsttimer">
        <h2>{t("FirstTimer.h2")}</h2>
        <div className="firsttimer-image">
            <img src="./firsttimer.png" alt="firsttimer" /></div>
        <p>{t("FirstTimer.p")}</p>
    </div>
}