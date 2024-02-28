import { useTranslation } from "react-i18next";
export default function Footer() {
    const {t} = useTranslation();
    const footer = t("footer.branch", {returnObjects: true})
    return(
        <div className="footer">
        <div className="footer__container">
            <div className="container">
                <div className="row left">
                {footer.map(item => (
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="footer__branch-name mb-3 mt-5">
                            <div className="bold-white">{item.name}</div>
                        </div>
                        <div className="footer__branch-location">
                            <p>{item.add}<br />
                            {item.num}<br />
                            {item.mail}<br />
                            </p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className="footer__container2">
            <div className="container">
                <div className="row left">
                    <div className="col-md-12 offset-md-5">
                        <div className="footer__branch-name mb-3 mt-3">
                            <div className="bold-white">AZUMAYA PHNOM PENH</div>
                        </div>
                        <div className="footer__branch-location">
                            <p>No. 302 St.228, Phnom Penh, Cambodia<br />
                            (+855) 23 218 961<br />
                            reservation@azumayacambodia.com </p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div className="footer__container3">
                    <div className="container">
                        <div className="row" style={{textAlign:'center'}}>
                            <div className="col-md-12">
                    <img className="footer__logo" src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1697875380/AzumayaWeb/oq0sv0woicgxankvnfin.png" alt="" />
                    <div className="footer__copyright">
                        <p className="mb-0">Copyright © 2013 - Azumaya - All Right Reversed</p>
                    </div>
                </div>
                </div>
                </div>
                </div>
        </div>
    )
}
