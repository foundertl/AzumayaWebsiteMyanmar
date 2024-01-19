import Booking from "../Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../JSON/data.json";
import classNames from "classnames";


export default function TVL2RoomDetail() {
  const { t } = useTranslation();
  const roomFeature = t("room_tvl2.features", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const cityName = t("header", { returnObjects: true });
  const room = t("room_tvl2", { returnObjects: true });
  const tvl2 = t("tvl2", { returnObjects: true });
  const room0 = t("tvl2.0", { returnObjects: true });
  const room1 = t("tvl2.1", { returnObjects: true });
  const room2 = t("tvl2.2", { returnObjects: true });
  const room3 = t("tvl2.3", { returnObjects: true });
  const room4 = t("tvl2.4", { returnObjects: true });
  const room5 = t("tvl2.5", { returnObjects: true });
  const room6 = t("tvl2.6", { returnObjects: true });
  const room7 = t("tvl2.7", { returnObjects: true });
  const room8 = t("tvl2.8", { returnObjects: true });
  return (
    <>
    <Header />
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("branch.tvl2")}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="is-sticky">
        <Booking />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className="re__breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="/Home">
                  <i className="fa-solid fa-house" />
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" to="/HCMBranch">
                  {t("header.hcm")}
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" href="">
                  {t("branch.tvl2")}
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="row"
          style={{ justifyContent: "space-around", padding: "10px", textAlign:"justify" }}
        >
          <div className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <a href="/HCM/TVL2" className="location_link">
              {t(branchName.tvl1)}
            </a>
          </div>
          <div className="service__location service__active col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <a href="/HCM/TVL2" className="location_link">
              {t(branchName.tvl2)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <a href="/HCM/LTT" className="location_link">
              {t(branchName.ltt)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <a href="/HCM/Annex" className="location_link">
              {t(branchName.annex)}
            </a>
          </div>
        </div>
        </div>
        <Tabs className="container-fluid">
        <TabPanel>
          <Tabs
            selectedTabClassName="service__active"
            className="col-md-10 offset-md-1"
          >
            <TabList className="service__list">
              {roomFeature.map((item) => (
                <Tab className="service">{item.name}</Tab>
              ))}
            </TabList>
            <TabPanel>
              <div className="service__content">
                <div className="room__content">
                  <div className="room__title">
                    {t("room_tvl2.room")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                      {t("room_tvl2.roomContent")}
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="room-item">
                        <Carousel
                          showArrows
                          showThumbs={false}
                          showStatus={false}
                          emulateTouch
                          stopOnHover
                          autoPlay
                          infiniteLoop
                        >
                          {data.dnw_tvl2.map((item) => (
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room0.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room0.sizeTitle}</th>
                                    <td className="installation">
                                      {room0.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room0.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in4}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room0.priceTitle}</th>
                                    <td className="installation bold">
                                      {room0.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_tvl2.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="room-item">
                        <Carousel
                          showArrows
                          showThumbs={false}
                          showStatus={false}
                          emulateTouch
                          stopOnHover
                          autoPlay
                          infiniteLoop
                        >
                          {data.dlnw_tvl2.map((item) => (
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room1.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room1.sizeTitle}</th>
                                    <td className="installation">
                                      {room1.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room1.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in4}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room1.priceTitle}</th>
                                    <td className="installation bold">
                                      {room1.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_tvl2.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="room-item">
                        <Carousel
                          showArrows
                          showThumbs={false}
                          showStatus={false}
                          emulateTouch
                          stopOnHover
                          autoPlay
                          infiniteLoop
                        >
                          {data.ef_tvl2.map((item) => (
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room2.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room2.sizeTitle}</th>
                                    <td className="installation">
                                      {room2.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room2.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in4}
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room2.priceTitle}</th>
                                    <td className="installation bold">
                                      {room2.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_tvl2.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="room-item">
                        <Carousel
                          showArrows
                          showThumbs={false}
                          showStatus={false}
                          emulateTouch
                          stopOnHover
                          autoPlay
                          infiniteLoop
                        >
                          {data.eb_tvl2.map((item) => (
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room3.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room3.sizeTitle}</th>
                                    <td className="installation">
                                      {room3.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room3.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in4}
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room3.priceTitle}</th>
                                    <td className="installation bold">
                                      {room3.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_tvl2.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="room-item">
                        <Carousel
                          showArrows
                          showThumbs={false}
                          showStatus={false}
                          emulateTouch
                          stopOnHover
                          autoPlay
                          infiniteLoop
                        >
                          {data.etnw_tvl2.map((item) => (
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room4.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room4.sizeTitle}</th>
                                    <td className="installation">
                                      {room4.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room4.install}</th>
                                    <td className="installation">
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in4}
                                      <br />
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room4.priceTitle}</th>
                                    <td className="installation bold fix_bed">
                                      {room4.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_tvl2.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="room-item">
                        <Carousel
                          showArrows
                          showThumbs={false}
                          showStatus={false}
                          emulateTouch
                          stopOnHover
                          autoPlay
                          infiniteLoop
                        >
                          {data.ss_tvl2.map((item) => (
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room5.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room5.sizeTitle}</th>
                                    <td className="installation">
                                      {room5.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room5.bedTitle}</th>
                                    <td className="installation">
                                      {room5.bed}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room5.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room5.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room5.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room5.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room5.in4}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room5.priceTitle}</th>
                                    <td className="installation bold">
                                      {room5.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_tvl2.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="room-item">
                        <Carousel
                          showArrows
                          showThumbs={false}
                          showStatus={false}
                          emulateTouch
                          stopOnHover
                          autoPlay
                          infiniteLoop
                        >
                          {data.s_tvl2.map((item) => (
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room6.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room6.sizeTitle}</th>
                                    <td className="installation">
                                      {room6.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room6.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room6.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room6.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room6.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room6.in4}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room5.in5}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room6.priceTitle}</th>
                                    <td className="installation bold">
                                      {room6.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_tvl2.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="room-item">
                        <Carousel
                          showArrows
                          showThumbs={false}
                          showStatus={false}
                          emulateTouch
                          stopOnHover
                          autoPlay
                          infiniteLoop
                        >
                          {data.dm_tvl2.map((item) => (
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room7.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room7.sizeTitle}</th>
                                    <td className="installation">
                                      {room7.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room7.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room7.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room7.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room7.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room7.in4}
                                      <br />
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room7.priceTitle}</th>
                                    <td className="installation bold">
                                      {room7.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_tvl2.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="room-item">
                        <Carousel
                          showArrows
                          showThumbs={false}
                          showStatus={false}
                          emulateTouch
                          stopOnHover
                          autoPlay
                          infiniteLoop
                        >
                          {data.dl_tvl2.map((item) => (
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room8.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room8.sizeTitle}</th>
                                    <td className="installation">
                                      {room8.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room8.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room8.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room8.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room8.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room8.in4}
                                      <br />   
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room8.priceTitle}</th>
                                    <td className="installation bold">
                                      {room8.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_tvl2.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="room__content">
                  <div className="room__title">
                    {t("room_tvl2.tariff")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                  </div>
                  <div className="room__container">
                    <div className="table_container">
                      <table className="room__tariff">
                        <tbody>
                          <tr>
                            <th
                              style={{ width: "20%" }}
                              colSpan={2}
                              rowSpan={2}
                            >
                              {t("room_tvl2.type")}
                            </th>
                            <th style={{ width: "20%" }} rowSpan={2}>
                              {t("room_tvl2.rate")}
                            </th>
                            <th style={{ width: "20%" }} colSpan={4}>
                              {t("room_tvl2.desc")}
                            </th>
                          </tr>
                          <tr>
                            <th style={{ width: "10%" }}>
                              {t("room_tvl2.size")} m&#178;
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_tvl2.window")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_tvl2.bath")} m&#178;
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_tvl2.tv")}
                            </th>
                            
                          </tr>
                          {tvl2.map((item) => {
                            return(
                                <tr>
                                  <td style={{ width: "5%" }}>{item.id}</td>
                                  <td className="room__tariff-name">{item.name}</td>
                                  <td>{item.price}</td>
                                  <td>{item.size}</td>
                                  <td>
                                    <i
                                      className={classNames({
                                        "fa fa-times red": item.tick_w == false,
                                        "fa fa-check green": item.tick_w == true,
                                      })}
                                    />
                                  </td>
                                  <td>
                                     <i className="fa fa-check green" />
                                  </td>
                                  <td>
                                    <i className="fa fa-check green" />
                                  </td>
                                </tr>
                            )
                        
                        })}
                        </tbody>
                      </table>
                    </div>
                    <div className="required__note mt-4">
                      {t("room_tvl2.vat")}
                    </div>
                    <div className="room__service">
                      <div className="container p-0">
                        <div className="row">
                          <div className="col-md-4">
                            <h2>{t("room_tvl2.service")}</h2>
                            <p className="pre-line">
                              {t("room_tvl2.serviceContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_tvl2.facility")}</h2>
                            <p className="pre-line">
                              {t("room_tvl2.facilityContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_tvl2.rental")}</h2>
                            <p className="pre-line">
                              {t("room_tvl2.rentalContent")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="room__content">
                  <div className="room__title">
                    {t("room_tvl2.business")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                      {t("room_tvl2.businessContent")}
                    </p>
                  </div>
                  <div className="room__container">
                    <table className="room__table room__table-service">
                      <tbody>
                        <tr>
                          <th rowSpan={2}>{t("room_tvl2.pickup")}</th>
                          <td>{t("room_tvl2.pickup_fee1")}</td>
                          <td rowSpan={2}>{t("room_tvl2.pickup_car")}</td>
                        </tr>
                        <tr>
                          <td>{t("room_tvl2.pickup_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_tvl2.minibar")}</th>
                          <td>{t("room_tvl2.minibar_fee")}</td>
                          <td>{t("room_tvl2.minibar_type")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_tvl2.laundry")}</th>
                          <td>{t("room_tvl2.laundry_fee1")}</td>
                          <td>{t("room_tvl2.laundry_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_tvl2.print")}</th>
                          <td colSpan={2}>{t("room_tvl2.print_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_tvl2.print_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_tvl2.tel")}</th>
                          <td colSpan={2}>{t("room_tvl2.tel_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_tvl2.tel_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_tvl2.rental_car")}</th>
                          <td colSpan={2}>{t("room_tvl2.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_tvl2.tour")}</th>
                          <td colSpan={2}>{t("room_tvl2.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_tvl2.visa")}</th>
                          <td colSpan={2}>{t("room_tvl2.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_tvl2.food")}</th>
                          <td colSpan={2}>{t("room_tvl2.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_tvl2.roten")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_tvl2.rotenContent")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room_tvl2.breakfast")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_tvl2.breakfastContent")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="col-md-12">
                      <div className="table-footer">
                        <h1>{t("room_tvl2.board")}</h1>
                        <p className="mt-5">
                          {t("room_tvl2.contact1")}
                          <a className="ml-1" href={`tel:${t("room_tvl2.phone")}`}>
                          {t("room_tvl2.phone")}
                          </a>
                          <br />
                          {t("room_tvl2.contact2")}
                          <a className="ml-1" href={`mailto:${t("room_tvl2.email")}`}>
                            {t("room_tvl2.email")}
                          </a>
                          <br />
                          {t("room_tvl2.contact3")}
                          <a className="ml-1" href={`https://${t("room_tvl2.website")}`}>
                            {t("room_tvl2.website")}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="room__content">
                  <div className="room__title">
                    {t("room_tvl2.location")}
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                      className="style-line"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                            {t("room_tvl2.locationContent")}
                          </p>
                          <div className="hotel__info">
                            <h1>{t("branch.tvl2")}</h1>
                            <p>
                              <i className="purple fa-solid fa-location-dot" />
                              {t("room_tvl2.address")}
                            </p>
                            <p>
                              <i className="purple fa fa-phone" />
                              {t("room_tvl2.tel")} : <a className="ml-1 purple" href={`tel:${t("room_tvl2.phone")}`}>
                              {t("room_tvl2.phone")}
                              </a>
                            </p>
                            <p>
                              <i className="purple fa fa-envelope" />
                              {t("room_tvl2.emailTitle")} :{" "}
                              <a className="ml-1 purple" href={`mailto:${t("room_tvl2.email")}`}>
                            {t("room_tvl2.email")}
                             </a>
                            </p>
                          </div>
                        </div>
                        <div className="room__container">
                          <div className="gg-map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.415985090304!2d106.70190912593253!3d10.779417439369523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f48c0091673%3A0xee667a931162b3a!2z5p2x5bGL44Ob44OG44OrIOOCv-OCpOODkOODs-ODq-ODszLlj7flupc!5e0!3m2!1svi!2s!4v1702276831713!5m2!1svi!2s"
                              style={{ border: 0 }}
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </>
  );
}
