import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactComponent as UkFlag } from "../assets/svgs/ukFlag.svg"
import { ReactComponent as FrFlag } from "../assets/svgs/frFlag.svg"

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem('language', event.target.value);
  }

  const getLanguage = () => {
    var lng = localStorage.getItem("language");
    lng === "en_US" ? lng = "en_US" : lng = "fr_FR";
    return lng;
  }

  const setLanguage = (lng) => {
    localStorage.setItem("language", lng);
  }

  const toggleLanguage = () => {
    let lng = getLanguage() === "fr_FR" ? "en_US" : "fr_FR";
    setLanguage(lng);

    i18n.changeLanguage(lng);
  }

  console.log(getLanguage());

  return (
    <div onChange={changeLanguage}>
      {getLanguage() === "en_US" && <button value="fr" alt="frFlag" onClick={toggleLanguage} className="flag anim"> <FrFlag /></button>}
      {getLanguage() === "fr_FR" && <button value="en" alt="ukFlag" onClick={toggleLanguage} className="flag anim"> <UkFlag /> </button>}
    </div>
  )
}

export default LanguageSelector