import Header from "./header";
import "../contact.css";
import phone from "../phone.png";
import loc from "../location-pin.png";
import { Navigate, useNavigate } from "react-router-dom";
import env from "../envelope.png";
import Footer from "./footer";

export default function Contact() {
  const navigate = useNavigate()
  return (
    <div>
      <Header prop={{ color: "contact" }} />
      <div className="contact-span">
        <span>დ ა გ ვ ი კ ა ვ შ ი რ დ ი თ:</span>
      </div>
      <div className="contact-ako">
      <div className="contact-body">
        <div className="d-flex-conc">
          <div className="contact-flex">
            <img src={phone} alt="" srcset="" />
            <span>551 611 416 </span>
          </div>
          {/* <div className="contact-flex contact-margin">
            <img src={phone} alt="" srcset="" />
            <span>34523465436 </span>
          </div>
          <div className="contact-flex">
            <img src={phone} alt="" srcset="" />
            <span>34523465436 </span>
          </div> */}
        </div>
        <div className="contact-flexa contact-2">
          <span>
            <img src={loc} alt="" srcset="" />
            თბილისი, ალექსანდრე ყაზბეგის გამზირი - 32ა
          </span>
        </div>
        <div className="contact-flexa contact-3">
          <img src={env} alt="" srcset="" />
          <span>იყალთოს პირველი შესახვევი</span>
        </div>
      </div>
      </div>
      <div className="contact-button">
        <button onClick={()=>{navigate('/buy')}} className="conc-btn">შეუკვეთე ქავთასი ახლავე</button>
      </div>
      <Footer />
    </div>
  );
}
