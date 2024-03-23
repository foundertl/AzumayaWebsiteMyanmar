import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
export default function ThankYou() {
    const { selectedCity } = useParams()
    const {t} = useTranslation()
    useEffect(() => {
        document.title = "Thank you - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル";
      }, []);
    
    if (selectedCity === 'hotel-hn'){
        return(
            <div>
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t('header.hn')}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="re__breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="/">
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title">{t('thank_you.name')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>{t("thank_you.title")}</h1>
                <br />
                <h4>{t("thank_you.content")}</h4>
                </div>
            </div>
        </div>
      </div>
        )
    }else if(selectedCity === "hotel-hcm")
    return(
        <div>
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t('header.hcm')}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="re__breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="/">
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title">{t('reservation.title')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>{t("thank_you.title")}</h1>
                <br />
                <h4>{t("thank_you.content")}</h4>
                </div>
            </div>
        </div>
      </div>
    )
    else if(selectedCity === "hotel-hp")
    return(
        <div>
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t('header.hp')}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="re__breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="/">
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title">{t('reservation.title')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>{t("thank_you.title")}</h1>
                <br />
                <h4>{t("thank_you.content")}</h4>
                </div>
            </div>
        </div>
      </div>
    )
    else if(selectedCity === "hotel-dn")
    return(
        <div>
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t('header.dn')}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="re__breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="/">
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title">{t('reservation.title')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>{t("thank_you.title")}</h1>
                <br />
                <h4>{t("thank_you.content")}</h4>
                </div>
            </div>
        </div>
      </div>
    )
    return(
        <div>
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t('reservation.title')}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="re__breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="/">
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title">{t('reservation.title')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>{t("thank_you.title")}</h1>
                <br />
                <h4>{t("thank_you.content")}</h4>
                </div>
            </div>
        </div>
      </div>
    )
}