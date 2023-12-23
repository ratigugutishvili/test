import Header from "./header";
import '../contact.css';
import phone from "../phone.png"

export default function Contact(){
    return(
        <div>
            <Header prop={{ color: "contact" }} />
            <div className="contact-span">
                <span>დ ა გ ვ ი კ ა ვ შ ი რ დ ი თ:</span>
            </div>
            <div>
                <div className="contact-flex"><img src={phone} alt="" srcset="" /><span>34523465436 </span></div>
                <div className="contact-flex"></div>
                <div className="contact-flex"></div>
            </div>
        </div>
    )
}