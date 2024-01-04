import Header from "./header";
import order from "../order.png";
import '../order.css';
import Footer from "./footer";

export default function Order(){
    return (
        <div>
            <Header />
            <div className="order-flex">
                <div className="order-center" style={{textAlign:'center'}}>
                    <span style={{display:'block'}} className="order-span">ინფორმაცია მიღებულია</span>
                    <span className="order-span1">ქავთასის წარმომადგენელი უმოკლეს დროში <br /> დაგიკავშირდებათ.</span>
                    <div><img src={order} alt="" srcset="" /></div>
                    <span className="order-span2">მადლობა ნდობისთვის</span>
                    <span className="order-span3">კლინიკა ქავთასი გისურვებთ ჯანმრთელობას!</span>
                </div>
            </div>
            <Footer />
        </div>
    )
}