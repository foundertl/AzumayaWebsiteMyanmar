import React from 'react';
import Booking from '../Booking';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Breakfast = () => {
  return (
    <>
    <div className="policies__header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Breakfast</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="is-sticky">
    <Booking />
  </div>
  <Tabs className="container-fluid" style={{marginTop: 20}}>
    <TabList  className="row"
          style={{ justifyContent: "center", padding: "10px" }}> 
          <Tab className="service__location  service__active col-md-12 col-lg-2 col-xl-2 col-xxl-2">
        <a href="/Test/breakfast" className="location_link">Breakfast</a>
        </Tab>
      <Tab className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">
      <a href="/Test/rotenburo" className="location_link">Rotenburo</a>
      </Tab>
      <Tab className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">
      <a href="/Test/massage" className="location_link">Massage</a>
      </Tab>
      <Tab className="service__location  col-md-12 col-lg-2 col-xl-2 col-xxl-2">
      <a href="/Test/Cambodia/breakfast" className="location_link">Cambodia</a>
      </Tab>
    </TabList>

    <TabPanel>
    <div className="container">
      <div className="row">
          <div className="col-md-12">
            <img className='image-holder' style={{width: "100%", height: "100%"}} src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1704877089/AzumayaWeb/breakfast__2_v4esjd.jpg" alt="" />
          </div>
      </div>
    </div>
    </TabPanel>
  </Tabs>
   
    </>
  );
};

export default Breakfast;