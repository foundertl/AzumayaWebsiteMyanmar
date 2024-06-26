import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set('selectedLanguage', lng, {expires: 365})
  };
  const feature = t("feature_pp.feature_item", { returnObjects: true });
  const service = t("service.service_name", {returnObjects:true})
  const [isOpen, setIsOpen] = useState(false)

  const [backgroundColor, setBackgroundColor] = useState('transparent');

    useEffect(()=>{
      const savedLang = Cookies.get('selectedLanguage');
      if(savedLang && i18n.language !== savedLang){
        i18n.changeLanguage(savedLang)
      }
    })
    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        // You can define your conditions for changing the background color here
        if (position > 100) {
          setBackgroundColor('#482979'); // Change to whatever color you want
        } else {
          setBackgroundColor('transparent'); // Change to default color
        }
      };
  
      // Add scroll event listener when component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
     // Empty dependency array ensures the effect runs only once
  const toggleHeader = () => {
      setIsOpen(!isOpen)
  }
  useEffect(()=>{
    if(isOpen) {
      document.body.style.position= "fixed";
    }else{
      document.body.style.position = "";
    }
  })
 
  const HeaderMobile = () => {
    return(
    <ul className={`header__mobile-navbar-list ${isOpen ? 'open' :''}`}>
          <button
            onClick={()=> setIsOpen(false)}
            className="header__mobile-navbar-closed"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <li className="header__mobile-navbar-item">
            <Link
              onClick={()=> setIsOpen(false)}
              Link
              to="/"
              className="header__mobile-navbar-link"
            >
              {t("header.home")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/policies"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.policies")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/reservation"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.reservation")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/feature"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.feature")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="Service/Test/breakfast"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.service")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/contact"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.contact")}
            </Link>
          </li>
        </ul>
    )
  }
  const [active, setActive] = useState(false)
  const handleActive = () => {
    setActive(!active)
  }
  return (
    <>
      <div className='top-header'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-10'>
                        <p style={{marginLeft:'110px'}}>{t('header.top-header')}</p>
                        </div>
                        <div className='btn-lang col-md-2'>
                        <button className ='btn-en mr-3' onClick={()=>changeLanguage('en')}></button>                
                        <button className ='btn-ja mr-3' onClick={()=>changeLanguage('ja')}></button>  
                        {/* <button className ='btn-vie mr-3' onClick={()=>changeLanguage('vie')}></button>  
                        <button className ='btn-kor mr-3' onClick={()=>changeLanguage('kor')}></button>   */}
                        </div>
                    </div>
                </div>
            </div>
     <div className="header_container">
      <div className="header-2">
        <div className="header__PC-2">
          <div className="header__logo">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Link to="/Cambodia/Cambodia">
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1700714360/AzumayaWeb/nyvyprbkrs1v54vdmwib.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <ul className="header__navbar-list-2">
            <li className="header__navbar-item header-reserve">
            <Link
                className={`header__navbar-link header-reserve ${active? 'tab_active' : ''}`}
                onClick={handleActive}
                onBlur={(e)=>setActive(false)}
                to="reservation"
                style={{ color: "#fff" }}
              >
                {t("header.reservation")}
              </Link>
            </li>
            <li className="header__navbar-item header-reserve">
              <Link
                className="header__navbar-link header-reserve"
                to="/"
                style={{ color: "#fff" }}
              >
                {t("header.vietnam")}
              </Link>
            </li>
            <li className="header__navbar-item header-reserve">
              <Link
                to = "/Login"
                target="_blank"
                className="header__navbar-link header-reserve"
                style={{ color: "#fff" }}
              >
                Sign In
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to = "/Login"
                target="_blank"
                style={{ color: "#fff" }}
              >
                <Avatar 
                src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/394314988_3576024049338244_1513351123669816224_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=HHV1lmBFfe0AX8CBVCX&_nc_ht=scontent.fhan18-1.fna&oh=00_AfA3H6HQhxq3XDbbqahRGqQvW2LJ0LiHbLXO2oD5d1rWBA&oe=65A6ACCA"
                facebookId="FouNdeRLH"
                size="40"
                round={true}
                 />
              </Link>
            </li>
          </ul> */}
        </div>
        <div className="header__mobile-logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1697875380/AzumayaWeb/oq0sv0woicgxankvnfin.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="btn__header-mobile">
          <button
           onClick={toggleHeader}
           className="header__mobile">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <HeaderMobile />
        </div>
        </div>
        <div className="is-sticky">
        <div className="container">
          <div className="header" style={{backgroundColor:backgroundColor}}>
       <Tabs
        // selectedTabClassName="service__active" 
        className="header__PC">
             <TabList className="header__navbar-list mb-0 justify-content-start">
             <Tab className="header__navbar-item">
             <div className="header__logo">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Link to="/">
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1700714360/AzumayaWeb/nyvyprbkrs1v54vdmwib.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
      
      </Tab>
              </TabList>      
                  <TabList className="header__navbar-list mb-0">
                  <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/">
                        {t("header.home")}
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/news-list">
                        {t("header.news")}
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item" >
                      <Link className="header__navbar-link-2" style={{width:130}} to="/phnom-penh-detail/room">
                        {t("header.room")}
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/feature">
                        {t("header.feature")}
                      </Link>
                      <ul className="header__navbar-item-list">
                        {feature.map((item)=>(
                          <Tab className = "header__navbar-sub-link">
                          <Link 
                          to ={`/feature/${item.id}`}> 
                          <span style={{backgroundColor:"#482979", padding:"5px", marginRight:"8px"}}>
                            {item.num}</span>{t(item.title)}
                            </Link>
                            </Tab>
                        ))}
                        </ul>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/service">
                        {t("header.service")}
                      </Link>
                      <ul className="header__navbar-item-list" style={{width: 100}}>
                        {service.map((item)=>(
                          <li className = "header__navbar-sub-link" >
                          <Link 
                          to ={item.link}>{item.name}
                          </Link>
                            </li>
                        ))}
                        </ul>
                    </Tab>
                    
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/contract">
                        {t("header.contract")}
                      </Link>
                    </Tab>
                    {/* <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/gallery">
                        {t("header.gallery")}
                      </Link>
                    </Tab> */}
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/reservation">
                        {t("header.reservation")}
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/q&a">
                        {t("header.policies")}
                      </Link>
                    </Tab>
                  </TabList>
                  </Tabs>
            </div>
            </div>
            </div>
    </>
  );
}
export default Header;
