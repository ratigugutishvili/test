import Header from "./header";
import blog1 from "../blog1.png"
import blog2 from "../blogimg.png"
import blog3 from "../forblog3.png"
import blog4 from "../forblog4.png"
import blog5 from "../forblog5.png"
import { useNavigate } from 'react-router-dom'

export default function Blog({prop}){
    const navigate = useNavigate()

    return(
        <div>
            <Header />
            <div className="blog">
                <div>
                    <p className="for-blog">ბ ლ ო გ ი</p>
                    <p className="for-qavtas for-blog">ქ ა ვ თ ა ს ი</p>
                </div>
                <div className="blog1" onClick={()=>{navigate('/interview')}}>
                    <img src={blog1} alt="" srcset="" className="blog-img" />
                    <span className="inreview">ინტერვიუ ქალბატონ ლელა <br/> გეჯაძესთან</span>
                </div>
                <div className="blog1">
                    <img src={blog2} alt="" srcset="" className="blog-img" />
                    <span className="inreview">სტუმრად ექიმთან - ლელა<br/> გეჯაძე</span>
                </div>
            </div>
            <div className="blog blog2">
                <div className="blog1">
                    <img src={blog3} alt="" srcset="" className="blog-img" />
                    <span className="inreview">კომპლექსური მკურნალობის <br/> პრეპარატი "ქავთასი"</span>
                </div>
                <div className="blog1">
                    <img src={blog4} alt="" srcset="" className="blog-img" />
                    <span className="inreview">ალექსიშვილის კლინიკა - ბუასილის <br/> მკურნალობა  უოპერაციოდ.</span>
                </div>
                <div className="blog1">
                    <img src={blog5} alt="" srcset="" className="blog-img" />
                    <span className="inreview">მეტი <br/> ქავთასის შესახებ</span>
                </div>
            </div>
        </div>
    )
}