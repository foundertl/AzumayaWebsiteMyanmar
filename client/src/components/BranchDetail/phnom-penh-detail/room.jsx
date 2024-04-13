import React from "react";
import {useState, useEffect } from "react";
import BookingRoom from "../../../container/BookingRoom/BookingRoom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from "classnames";
import HelmetLayout from "../../HelmetLayout/HelmetLayout";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Gallery_PP from "../../../container/Gallery/Gallery";

export default function PhnomPenhRoomDetail() {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const receivedData = location.state;
    const roomFeature = t("room_pp.features", { returnObjects: true });
    const pp = t("pp", { returnObjects: true });
    const ppSlider = t("room_pp.slider", {returnObjects: true})
    const a = t("branch.pp")
    const b = t("header.title")
    const c = a + " | "+ b
    const AutoPlaySlider =  withAutoplay(AwesomeSlider)
    const [startDate, setStartDate] = useState(receivedData ? receivedData.startDate : '');
    const [endDate, setEndDate] = useState(receivedData ? receivedData.endDate : '');
  
  const handleContinue = (selectedRoom) => {
    // Prepare data to pass to Receiver2Page
    const data = {
      ...receivedData,
      startDate,
      endDate,
      selectedRoom
    };
  
    // Navigate to Receiver2Page and pass data
    navigate('/reservation', { state: data });
  };
    const RoomCard = ({room_id, name, size, sizeTitle, bedTitle, install, in1, in2, in3, in4, in5, priceTitle, bed, price, images}) => {
      const { t } = useTranslation();
        return(
          <div key={room_id} className="room-item">
                            <Carousel 
           showArrows
           showThumbs={false}
           showStatus={false}
           emulateTouch
           stopOnHover
           autoPlay
           infiniteLoop>
            {images.map((image, index) => (
                <img
                  src={image}
                  alt={`${name} ${index} azumaya kim ma 2 azumaya hotel ha noi `}
                />
             
            ))}
          </Carousel>
                            <div className="card" style={{ border: "none" }}>
                              <div className="row p-0">
                                <div className="col-md-12"></div>
                                <div className="col-md-12">
                                  <div className="card-body">
                                    <div className="card-title room-name">
                                      {name}
                                    </div>
                                    <table className="room__des-table">
                                      <tr>
                                        <th>{sizeTitle}</th>
                                        <td className="installation">
                                          {size}m&#178;
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>{bedTitle}</th>
                                        <td className="installation">
                                          {bed}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>{install}</th>
                                        <td className="installation">
                                          <i class="fa-solid fa-check purple mr-2"></i>
                                          {in1}
                                          <br />
                                          <i class="fa-solid fa-check purple mr-2"></i>
                                          {in2}
                                          <br />
                                          <i class="fa-solid fa-check purple mr-2"></i>
                                          {in3}
                                          <br />
                                          <i class="fa-solid fa-check purple mr-2"></i>
                                          {in4}
                                          <br />
                                          {in5 !== "" ? (
                                            <React.Fragment>
                                            <i class="fa-solid fa-check purple mr-2"></i>
                                            {in5}
                                            </React.Fragment>
                                          ): null}
                                          <br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>{priceTitle}</th>
                                        <td className="installation bold">
                                          {price}
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button 
                            onClick={() => handleContinue(`${name}`)}
                            className="btn__reserve p-0 m-0">
                                {t("room_pp.reservation")}
                            </button>
                          </div>
        
    )
    }
    return (
      <>
      <HelmetLayout 
          title= {c}/>
        <div className="area_header" >
                <div className="overlay"></div>
                <AutoPlaySlider
                animation = "scaleOutAnimation"
                mobileTouch
                infinite
                play
                interval = {5000}>
            {ppSlider.map((item)=>(
                <div data-src={item.image} style={{height:'100%'}}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                    <h1>{item.desc}</h1>
                    </div>
                    </div>
                    </div>
                    </div>
            ))}
        </AutoPlaySlider>
        </div>  
        <div className="is-sticky">
        <BookingRoom 
        startDate={startDate} 
        endDate={endDate} 
        setStartDate={setStartDate}
        setEndDate={setEndDate} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="re__breadcrumb">
              <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <Link to="/">
                    <i className="fa-solid fa-house" />
                  </Link>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <Link className="breadcrumb__title" href="">
                    {t("branch.pp")}
                  </Link>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
          <Tabs className="container p-0">
          <TabPanel>
            <Tabs
              selectedTabClassName="service__active"
              className="col-md-12 p-0"
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
                      {t("room_pp.room")}
                      <img
                        className="style-line"
                        src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                        alt=""
                      />
                      <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                        {t("room_pp.roomContent")}
                      </p>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                    {pp.map((item)=>(
                      <div className="col-md-12 col-lg-6">
                        <RoomCard {...item}/>
                         </div>       
              ))}
  
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="service__content">
                  <div className="room__content">
                    <div className="room__title">
                      {t("room_pp.tariff")}
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
                                {t("room_pp.type")}
                              </th>
                              <th style={{ width: "20%" }} rowSpan={2}>
                                {t("room_pp.rate")}
                              </th>
                              <th style={{ width: "20%" }} colSpan={5}>
                                {t("room_pp.desc")}
                              </th>
                            </tr>
                            <tr>
                              <th style={{ width: "10%" }}>
                                {t("room_pp.size")} m&#178;
                              </th>
                              <th style={{ width: "10%" }}>
                                {t("room_pp.bath")}
                              </th>
                              <th style={{ width: "10%" }}>
                                {t("room_pp.window")}
                              </th>
                              <th style={{ width: "10%" }}>
                                {t("room_pp.bed")}
                              </th>
                            </tr>
                            {pp.map((item) => (
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
                                   {item.bed}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="required__note mt-4">
                        {t("room_pp.vat")}
                      </div>
                      <div className="room__service">
                        <div className="container p-0">
                          <div className="row">
                            <div className="col-md-4">
                              <h2>{t("room_pp.service")}</h2>
                              <p className="pre-line">
                                {t("room_pp.serviceContent")}
                              </p>
                            </div>
                            <div className="col-md-4">
                              <h2>{t("room_pp.facility")}</h2>
                              <p className="pre-line">
                                {t("room_pp.facilityContent")}
                              </p>
                            </div>
                            <div className="col-md-4">
                              <h2>{t("room_pp.rental")}</h2>
                              <p className="pre-line">
                                {t("room_pp.rentalContent")}
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
                      {t("room_pp.business")}
                      <img
                        className="style-line"
                        src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                        alt=""
                      />
                      <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                        {t("room_pp.businessContent")}
                      </p>
                    </div>
                    <div className="room__container">
                      <table className="room__table room__table-service">
                        <tbody>
                          <tr>
                            <th rowSpan={2}>{t("room_pp.pickup")}</th>
                            <td>{t("room_pp.pickup_fee1")}</td>
                            <td>{t("room_pp.pickup_car")}</td>
                          </tr>
                            <td>{t("room_pp.pickup_fee2")}</td>
                            <td>{t("room_pp.pickup_car2")}</td>

                          <tr>
                          </tr>
                          <tr>
                            <th>{t("room_pp.minibar")}</th>
                            <td>{t("room_pp.minibar_fee")}</td>
                            <td>{t("room_pp.minibar_type")}</td>
                          </tr>
                          <tr>
                            <th>{t("room_pp.laundry")}</th>
                            <td>{t("room_pp.laundry_fee1")}</td>
                            <td>{t("room_pp.laundry_fee2")}</td>
                          </tr>
                          <tr>
                            <th rowSpan={2}>{t("room_pp.print")}</th>
                            <td colSpan={2}>{t("room_pp.print_fee1")}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="col-md-12">
                        <div className="table-footer">
                          <h1>{t("room_pp.board")}</h1>
                          <p className="mt-5">
                            {t("room_pp.contact1")}
                            <a className="ml-1" href={`tel:${t("room_pp.phone")}`}>
                            {t("room_pp.phone")}
                            </a>
                            <br />
                            {t("room_pp.contact2")}
                            <a className="ml-1" href={`mailto:${t("room_pp.email")}`}>
                              {t("room_pp.email")}
                            </a>
                            <br />
                            {t("room_pp.contact3")}
                            <a className="ml-1" href={`https://${t("room_pp.website")}`}>
                              {t("room_pp.website")}
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
                    {t("room_pp.hotelService")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                  </div>
                  <div className="room__container">
                    <table className="room__table room__table-service pre-line">
                      <tbody>
                        <tr>
                          <th rowSpan={6}>{t("room_pp.breakfast")}</th>
                          <td colSpan={2}>{t("room_pp.ground")}</td>
                          <td rowSpan={6}>{t("room_pp.visitor")}</td>
                        </tr>
                        <tr>
                          <td style={{width:"10%"}}>{t("room_pp.weekday")}</td>
                          <td>
                            <strong>{t("room_pp.breakfastContent1")}</strong>
                            </td>
                        </tr>
                        <tr>
                        <td style={{width:"10%"}} rowSpan={2}>{t("room_pp.weekend")}</td>
                        <td>                            
                          <strong>{t("room_pp.breakfastContent2")}</strong>
                          </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_pp.breakfastNote1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_pp.breakfastNote2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={10}>{t("room_pp.rotenburo")}</th>
                          <td colSpan={2}>{t("room_pp.rotenFloor")}</td>
                          <td rowSpan={10}></td>
                        </tr>
                        <tr>
                        <td style={{width:"10%"}} rowSpan={4}>{t("room_pp.weekday")}</td>
                        <td>                            
                          <strong>{t("room_pp.rotenContent1")}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>{t("room_pp.rotenNote1")}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>{t("room_pp.rotenContent2")}</strong>
                            </td>
                        </tr>
                        <tr>
                          <td>{t("room_pp.rotenNote2")}</td>
                        </tr>
                        <tr>
                        <td style={{width:"10%"}} rowSpan={2}>{t("room_pp.weekend")}</td>
                        <td>                            
                          <strong>{t("room_pp.rotenContent3")}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>{t("room_pp.rotenNote2")}</td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <strong>
                            {t("room_pp.rotenNote3")}
                            </strong>
                            </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_pp.rotenNote4")}</td>
                        </tr>
                       <tr>
                        <th rowSpan={5}>{t("room_pp.massage")}</th>
                        <td colSpan={2}>{t("room_pp.rotenFloor")}</td>
                        <td rowSpan={5}>{t("room_pp.massageVisitor")}</td>
                       </tr>
                       <tr>
                        <td style={{width:"10%"}} rowSpan={2}>{t("room_pp.weekday")}</td>
                        <td>
                        <strong>
                        {t("room_pp.massageContent1")}
                        </strong>
                        </td>
                       </tr>
                       <tr>
                        <td>{t("room_pp.massageNote1")}</td>
                       </tr>
                       <tr>
                        <td rowSpan={2} style={{width:"10%"}}>{t("room_pp.weekend")}</td>
                        <td>
                          <strong>
                          {t("room_pp.massageContent2")}
                          </strong>
                        </td>
                       </tr>
                       <tr>
                        <td>{t("room_pp.massageNote1")}</td>
                       </tr>
                       <tr>
                       </tr>
                       <tr>
                          <th>{t("room_pp.reception")}</th>
                          <td colSpan={2}>{t("room_pp.receptionAsk")}</td>
                          <td></td>
                       </tr>
                      </tbody>
                    </table>
                    <div className="col-md-12">
                      <div className="table-footer pre-line">
                        <h1>{t("room_pp.attention")}</h1>
                        <p className="mt-5">
                          {t("room_pp.attentionContent")}
                        </p>
                        <p className="bold">
                          {t("room_pp.thanks")}
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
                    {t("room_pp.gallery")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                  </div>
                  <div className="room__container">
              <Gallery_PP />
              </div>
              </div>
              </div>
            </TabPanel>
              <TabPanel>
                <div className="service__content">
                  <div className="room__content">
                    <div className="room__title">
                      {t("room_pp.location")}
                      <img
                        src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                        alt=""
                        className="style-line"
                      />
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"left" }}>
                              {t("room_pp.locationContent")}
                            </p>
                            <div className="hotel__info">
                              <h1>{t("branch.pp")}</h1>
                              <p>
                                <i className="purple fa-solid fa-location-dot" />
                                {t("room_pp.address")}
                              </p>
                              <p>
                                <i className="purple fa fa-phone" />
                                {t("room_pp.tel")} : <a className="ml-1 purple" href={`tel:${t("room_pp.phone")}`}>
                                {t("room_pp.phone")}
                                </a>
                              </p>
                              <p>
                                <i className="purple fa fa-envelope" />
                                {t("room_pp.emailTitle")} :{" "}
                                <a className="ml-1 purple" href={`mailto:${t("room_pp.email")}`}>
                              {t("room_pp.email")}
                               </a>
                              </p>
                            </div>
                          </div>
                          <div className="room__container">
                            <div className="gg-map">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.90459742137!2d104.91778067601835!3d11.558696644275852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513c1345804d%3A0xeeaf7f7f10b9ffc1!2sAzumaya%20Hotel%20Phnom%20Penh!5e0!3m2!1sen!2s!4v1712910535170!5m2!1sen!2s"
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