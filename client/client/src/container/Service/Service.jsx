import React from "react";
import Booking from "../Units/Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import Flatpickr from "react-flatpickr";
import Button from "react-bootstrap/Button";
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import { format } from "date-fns";

export default function VietnamService() {
  function MassagePhnomPenhModal(props) {
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [guestName, setGuestName] = useState();
    const [option, setOption] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [specialRequest, setSpecialRequest] = useState();
    const handleStartTimeChange = (selectedDates) => {
      if (selectedDates.length > 0) {
        const selectedDate = new Date(selectedDates[0]);
        const timeString = selectedDate.toTimeString().split(" ")[0];
        setStartTime(timeString);
      } else {
        setStartTime(null);
      }
    };
    const handleSubmit = (e) => {
      const dataObject = {
        startDate: startDate ? format(startDate, "yyyy-MM-dd") : "",
        startTime,
        guestName,
        option,
        phone,
        email,
        specialRequest,
      };
      console.log(dataObject);
      e.preventDefault();
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {t("service_massage.modal_titlePP")}
          </Modal.Title>
          <Button variant="light" onClick={props.onHide}>
            <i class="fa-solid fa-xmark purple"></i>
          </Button>
        </Modal.Header>
        <div className="row">
          <div className="col-md-6 massage_reservation">
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <h2>{t("service_massage.reservation1")}</h2>
                <div className="row pl-3 pr-3">
                  <input
                    placeholder={t("service_massage.guest_name")}
                    type="text"
                    className="col-md-12 form__content mb-0"
                    value={guestName}
                    onChange={(e) => {
                      setGuestName(e.target.value);
                    }}
                  />
                </div>
                <div className="row pl-3 pr-3">
                  <input
                    type="text"
                    className="booker-phone form__content col-md-12"
                    id=""
                    value={phone}
                    placeholder={t("service_massage.phone_number")}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form__content col-md-12"
                    id=""
                    value={email}
                    placeholder={t("service_massage.email")}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <Flatpickr
                    value={startDate}
                    options={{
                      minDate: "today",
                      dateFormat: "Y-m-d",
                    }}
                    className="col-md-6 form__content webkit-appearance mr-0"
                    placeholder={t("service_massage.date")}
                    onChange={(dates) => {
                      setStartDate(dates[0]);
                    }}
                  />
                  <Flatpickr
                    value={startTime}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      maxTime: "21:30",
                      time_24hr: true,
                    }}
                    placeholder={t("service_massage.time")}
                    onChange={handleStartTimeChange}
                    className="col-md-6 form__content webkit-appearance mr-0"
                  />
                  <select
                    value={option}
                    className="col-md-12 form__content"
                    onChange={(e) => {
                      setOption(e.target.value);
                    }}
                  >
                    <option value="40 minutes">
                      40 {t("service_massage.minutes")}
                    </option>
                    <option value="70 minutes">
                      70 {t("service_massage.minutes")}
                    </option>
                    <option value="100 minutes">
                      100 {t("service_massage.minutes")}
                    </option>
                  </select>
                  <textarea
                    className="text-note"
                    cols="40"
                    rows="6"
                    placeholder={t("service_massage.special")}
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                  ></textarea>

                  <div className="row justify-content-center">
                    <button
                      id="send"
                      class="button-57 send-btn col-3 col-md-6"
                      type="submit"
                    >
                      <span class="text" style={{ color: "#fff" }}>
                        Send
                      </span>
                      <span className="d-flex align-item-center">
                        <i
                          class="fa-sharp fa-regular fa-paper-plane green"
                          style={{ fontSize: "1.8rem", lineHeight: "2.8rem" }}
                        ></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </Modal.Body>
          </div>
          <div className="col-md-6">
            <div className="space-line">
              <div className="row justify-content-center">
                <div className="col-6 col-md-6">
                  <img src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png" />
                </div>
              </div>
            </div>
            <Modal.Body>
              <h2>{t("service_massage.reservation2")}</h2>
              <div className="btn_container mt-4">
                <button className="button-57 call-btn p-0">
                  <a className="d-block" href="tel:+855.23.218.9618">
                    <i
                      class="fa-solid fa-phone purple"
                      style={{ lineHeight: "3.8rem" }}
                    ></i>
                  </a>
                  <span className="w-100">
                    <a
                      className="d-block call-after"
                      href="tel:+855.23.218.9618"
                    >
                      +855.23.218.9618
                    </a>
                  </span>
                </button>
              </div>
              <div className="room__container mt-5">
                <div className="gg-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.90459742137!2d104.91778067601835!3d11.558696644275852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513c1345804d%3A0xeeaf7f7f10b9ffc1!2sAzumaya%20Hotel%20Phnom%20Penh!5e0!3m2!1sen!2s!4v1712910535170!5m2!1sen!2s"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </Modal.Body>
          </div>
        </div>
        <Modal.Footer>
          <button
            class="button-57 close-btn"
            role="button"
            onClick={props.onHide}
          >
            <span class="text" style={{ color: "#fff" }}>
              Close
            </span>
            <span>
              <i
                class="fa-solid fa-xmark red"
                style={{ fontSize: "1.8rem", lineHeight: "2.8rem" }}
              ></i>
            </span>
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
  const { t } = useTranslation();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);
  const serviceTitle = t("service.service_name", { returnObjects: true });
  const a = t("header.service");
  const b = t("header.title");
  const c = a + " | " + b;
  const d = t("header.breakfast");
  const e = t("header.title");
  const f = d + " | " + e;
  const g = t("header.roten");
  const h = t("header.title");
  const i = g + " | " + h;
  const j = t("header.massage");
  const k = t("header.title");
  const l = j + " | " + k;
  const [title, setTitle] = useState("");
  useEffect(() => {
    switch (location.pathname) {
      case "/breakfast":
        setSelectedTab(0);
        setTitle(f);
        break;
      case "/rotenburo":
        setSelectedTab(1);
        setTitle(i);
        break;
      case "/massage":
        setTitle(l);
        setSelectedTab(2);
        break;
      default:
        setSelectedTab(0);
        setTitle(c);
    }
  }, [location]);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };
  const breakfast_hour = t("service_breakfast.table1", { returnObjects: true });
  const breakfast_price = t("service_breakfast.table2", {
    returnObjects: true,
  });
  const specialNoteBR = t("service_breakfast.special_note", { returnObjects: true });
  const rotenburo_hour = t("service_roten.table1", { returnObjects: true });
  const rotenburo_price = t("service_roten.table2", { returnObjects: true });
  const specialNoteRT = t("service_roten.special_note", { returnObjects: true });
  const massage_hour = t("service_massage.table_ll1", {
    returnObjects: true,
  });
  const massage_price = t("service_massage.table_ll2", {
    returnObjects: true,
  });

  const [modalShow, setModalShow] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  switch (title) {
    case "/breakfast":
      setPageTitle(t("header.breakfast"));
      break;
    case "/rotenburo":
      setPageTitle(t("header.rotenburo"));
  }
  return (
    <>
      <HelmetLayout title={title} />
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("header.service")}</h1>
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
                  <Link className="breadcrumb__title" to="/service">
                    {t("header.service")}
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
            className="col-md-12 p-0"
            selectedIndex={selectedTab}
            onSelect={handleTabSelect}
            selectedTabClassName="service__active"
            style={{ marginTop: 20 }}
          >
            <TabList className="service__list">
              {serviceTitle.map((item) => (
                <Tab className="service">{item.name}</Tab>
              ))}
              {/* <Tab className="service">
                <a
                  href="http://localhost:3000/service"
                  className="location_link"
                >
                  {t('header.cambodia')}
                </a>
              </Tab> */}
            </TabList>
            <TabPanel>
              <div className="service__content pt-0">
                <div className="row justify-content-center">
                  <Link className="image-holder p-0" to="">
                    <img
                      src={t("service_breakfast.image")}
                      alt="breakfast azumaya hotel"
                    />
                  </Link>
                  <div className="row">
                    <div
                      className="col-md-6 left"
                      style={{ borderRight: "solid 3px #482979" }}
                    >
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header"
                          style={{ width: "500px" }}
                        >
                          {t("service_breakfast.openHour")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table">
                          {breakfast_hour.map((item) => (
                            <tr>
                              <td width="20%">{item.row1}</td>
                              <td width="30%" className="right">
                                {item.row2}
                              </td>
                              <td>{item.row4}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6 left">
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header"
                          style={{ width: "500px" }}
                        >
                          {t("service_breakfast.price")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table">
                          {breakfast_price.map((item) => (
                            <tr>
                              <td className="left" width="30%">
                                {item.row1}
                              </td>
                              <td>{item.row2}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>
                  </div>
                      <div class="row justify-content-center">
                        <div
                          class="service_table-note"
                          style={{borderBottom:'3px solid #482979', width:'350px', paddingBottom:'2rem'}}>
                          {specialNoteBR.map((item) => (
                               <div class="left">
                               {item.content}
                             </div>
                          ))}
                        </div>
                      </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
            <div className="service__content pt-0">
                <div className="row justify-content-center">
                  <Link className="image-holder p-0" to="">
                    <img
                      src={t("service_roten.image")}
                      alt="rotenburo azumaya hotel"
                    />
                  </Link>
                  <div className="row">
                    <div
                      className="col-md-6 left"
                      style={{ borderRight: "solid 3px #482979" }}
                    >
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header"
                          style={{ width: "500px" }}
                        >
                          {t("service_roten.openHour")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table">
                          {breakfast_hour.map((item) => (
                            <tr>
                              <td width="20%">{item.row1}</td>
                              <td width="30%" className="right">
                                {item.row2}
                              </td>
                              <td>{item.row4}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6 left">
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header"
                          style={{ width: "500px" }}
                        >
                          {t("service_breakfast.price")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table">
                          {breakfast_price.map((item) => (
                            <tr>
                              <td className="left" width="30%">
                                {item.row1}
                              </td>
                              <td>{item.row2}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>
                  </div>
                      <div class="row justify-content-center">
                        <div
                          class="service_table-note"
                          style={{borderBottom:'3px solid #482979', width:'550px', paddingBottom:'2rem'}}>
                          {specialNoteRT.map((item) => (
                               <div class="left">
                               {item.content}
                             </div>
                          ))}
                        </div>
                      </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content p-0">
                <div className="row justify-content-center">
                  <Link className="image-holder p-0" to="">
                    <img
                      style={{ padding: "5px 22px" }}
                      className="image-holder"
                      src={t("service_massage.image")}
                      alt="massage azumaya hotel"
                    />
                  </Link>
                  <div className="row justify-content-center">
                      <div className="d-flex justify-content-center">
                        <div className="service_branch mb-0">
                          {t("header.pp")}
                        </div>
                      </div>
                      <div className="massage_branch-note mt-2">
                        ({t("branch.pp")})
                      </div>
                      <div className="row">
                    <div
                      className="col-md-6 left"
                      style={{ borderRight: "solid 3px #482979" }}
                    >
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header"
                          style={{ width: "500px" }}
                        >
                          {t("service_roten.openHour")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table">
                          {massage_hour.map((item) => (
                            <tr>
                              <td width="20%">{item.row1}</td>
                              <td width="30%" className="right">
                                {item.row2}
                              </td>
                              <td>{item.row4}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6 left">
                      <div className="d-flex justify-content-center">
                        <div
                          className="service_header"
                          style={{ width: "500px" }}
                        >
                          {t("service_breakfast.price")}
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <table className="service_table">
                          {massage_price.map((item) => (
                            <tr>
                              <td className="left" width="30%">
                                {item.row1}
                              </td>
                              <td>{item.row2}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>
                    </div>
                      <div className="d-flex justify-content-center mt-5">
                        <button
                          class="button-57 call-btn"
                          role="button"
                          onClick={() => setModalShow(true)}
                        >
                          <span class="text">
                            {t("service_massage.reservation")}
                          </span>
                          <span>{t("service_massage.contact")}</span>
                        </button>
                        <MassagePhnomPenhModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
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
