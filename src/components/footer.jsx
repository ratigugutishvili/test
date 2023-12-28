import phone from "../phone.png";
import face from "../Facebook.png";
import loc from "../loc.png";
import { useNavigate } from 'react-router-dom'
import "../footer.css"


export default function Footer(){
    const navigate = useNavigate()
    return(
        <div>
                    <div className="footer">
            <div className="footer-1">
                <span onClick={()=>{navigate('/production')}}>პროდუქცია</span>
                <span onClick={()=>{navigate('/blogs')}}>ბლოგი</span>
                <span onClick={()=>{navigate('/aboutus')}}>ჩვენ შესახებ</span>
            </div>
            <div className="footer-2">
                <span className="footer-2span">კონტაქტი :</span>
                <div className="footer-flex">
                    <div><img src={phone} alt="" srcset="" />551 611 416</div>
                    <div><img src={face} alt="" srcset="" />ქავთასი • Kavtasi</div>
                    <div className="footer-center"><img src={loc} alt="" srcset="" />თბილისი, ალექსანდრე ყაზბეგის გამზირი - 32ა</div>
                </div>
            </div>
            <div className="footer-3">
                <button onClick={()=>{navigate('/buy')}}>შეუკვეთე ახლავე</button>
            </div>
        </div>
        <div className="end-footer">
        კლინიკა ქავთასი გისურვებთ ჯანმრთელობას
        </div>
        </div>
    )
}