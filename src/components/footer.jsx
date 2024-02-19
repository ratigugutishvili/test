import phone from "../phone.png";
import face from "../Facebook.png";
import loc from "../loc.png";
import { useNavigate } from "react-router-dom";
import "../footer.css";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mobile-footer">
        <div className="footer">
          <div className="footer-1">
            <span
              onClick={() => {
                navigate("/production");
              }}
            >
              პროდუქცია
            </span>
            <span
              onClick={() => {
                navigate("/blogs");
              }}
            >
              ბლოგი
            </span>
            <span
              onClick={() => {
                navigate("/aboutus");
              }}
            >
              ჩვენ შესახებ
            </span>
          </div>
          <div className="footer-2">
            <span className="footer-2span">კონტაქტი :</span>
            <div className="footer-flex">
              <div>
                <img src={phone} alt="" srcset="" />
                551 611 416
              </div>
              <div>
                <img src={face} alt="" srcset="" />
                ქავთასი • Kavtasi
              </div>
              <div className="footer-center">
                <img src={loc} alt="" srcset="" />
                თბილისი, ალექსანდრე ყაზბეგის გამზირი - 32ა
              </div>
            </div>
          </div>
          <div className="footer-3">
            <button
              onClick={() => {
                navigate("/buy");
              }}
            >
              შეუკვეთე ახლავე
            </button>
          </div>
        </div>
        <div className="end-footer">კლინიკა ქავთასი გისურვებთ ჯანმრთელობას</div>
      </div>
      <div className="for-mobile-footer">
        <div className="mobile-main-footer">
          <div className="mobile-footer-three">
            <span>პროდუქცია</span>
            <span>ბლოგი</span>
            <span>ჩვენ შესახებ</span>
          </div>
          <div className="mobile-footer-icons">
            <span className="mobile-position">კონტაქტი</span>
            <div>
              <img src={phone} alt="" srcset="" />
              <span>555-95-85-75</span>
            </div>
            <div>
              <img src={face} alt="" srcset="" />
              <span>ქავთასი • Kavtasi</span>
            </div>
            <div>
              <img src={loc} alt="" srcset="" />
              <span className="txtcenter">
                იყალთოს პირველი <br /> შესახვევი #5 საბურთალო,
                <br />
                Tbilisi, Georgia
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
