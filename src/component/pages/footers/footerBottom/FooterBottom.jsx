import "./footerBottom.scss"
import paymentlogo from "../../../../assets/paymentlog.jpg"

const FooterBottom = () => {
    return(
        <div className = "container-copyright">
            <div>
                <span className = "footer-copyright">
                    © K12 Techno Services Pvt Ltd. 2020. All Rights Reserved
                </span>
            </div>
            <div>
                <img src={paymentlogo}/>
            </div>
        </div>
    )
}

export default FooterBottom