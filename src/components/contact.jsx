import Header from "./header";
import "../contact.css";
import phone from "../phone.png";
import loc from "../location-pin.png";
import env from "../envelope.png";

export default function Contact() {
  return (
    <div>
      <Header prop={{ color: "contact" }} />
      <div className="contact-span">
        <span>დ ა გ ვ ი კ ა ვ შ ი რ დ ი თ:</span>
      </div>
      <div className="contact-body">
        <div className="d-flex-conc">
          <div className="contact-flex">
            <img src={phone} alt="" srcset="" />
            <span>34523465436 </span>
          </div>
          <div className="contact-flex contact-margin">
            <img src={phone} alt="" srcset="" />
            <span>34523465436 </span>
          </div>
          <div className="contact-flex">
            <img src={phone} alt="" srcset="" />
            <span>34523465436 </span>
          </div>
        </div>
        <div className="contact-flexa contact-2">
          <span>
            <img src={loc} alt="" srcset="" />
            იყალთოს პირველი შესახვევი #5 <br /> საბურთალო, Tbilisi, Georgia
          </span>
        </div>
        <div className="contact-flexa contact-3">
          <img src={env} alt="" srcset="" />
          <span>იყალთოს პირველი შესახვევ</span>
        </div>
      </div>
      <div className="contact-button">
        <button className="conc-btn">შეუკვეთე ქავთასი ახლავე</button>
      </div>
    </div>
  );
}
