import nayeni1 from "../foto1.png"
import malamo from "../foto2.png"
import mcenare2 from "../mcenare2.png"
import nayeni from "../nayeni.png"
import malamo1 from "../malamo1.png"
import aboutus from "../lela.png"
import aboutus3 from "../aboutus3.png"
import mamao from "../mamao.png"
import celeb from "../celeb.png"
import mcenare from "../mcenare1.png"
import celeb2 from "../celeb2.png"
import screen1 from "../Screenshot_1.png"

export default function Body(){
    return (
        <div>
            <div className="main-body">
                <div className="withimg">
                    <img src={nayeni1} alt="" srcset="" />
                </div>
                <div className="withimg" >
                    <img src={malamo} alt="" srcset="" />
                </div>
            </div>
            <h1>ჩვენი პროდუქცია</h1>
            <div>
            <div className="main-body">
                <div className="mcenare">
                    <img src={mcenare} alt="" srcset="" />
                </div>
                <div className="withimg">
                    <img src={nayeni} alt="" srcset="" />
                    <span> ნაყენი</span>
                </div>
                <div className="withimg" >
                    <img src={malamo1} alt="" srcset="" />
                    <span>მალამო</span>
                </div>
            </div>
            
            </div>
            <h1>ჩვენს შესახებ</h1>
            <div  className="agharvici">
            <img src={mcenare2} alt="" srcset="" className="mcenare2" />
            <div  className="d-flex forpadd">
                <div>
                    <div className="d-flex withspan">
                        <div className="circle"></div>
                        <span>ბლაბლბალბალბლაბლაბლბ ბლაბალბლ <br /> ბლაბა ლბალბალბ ბალბალბალ ბლაბ <br /> ბლალ ბალლაბაბა ჰკხკჯსბ სხაბჯკხკსბხჯკა <br /> ბცსჯ სხნჯსხ ხსჯხსბ 28192ყ სხკბჯბხს</span>
                    </div>
                    <div className="d-flex withspan">
                        <div className="circle"></div>
                        <span>ბლაბლბალბალბლაბლაბლბ ბლაბალბლ <br /> ბლაბა ლბალბალბ ბალბალბალ ბლაბ <br /> ბლალ ბალლაბაბა ჰკხკჯსბ სხაბჯკხკსბხჯკა <br /> ბცსჯ სხნჯსხ ხსჯხსბ 28192ყ სხკბჯბხს</span>
                    </div>
                </div>
                <div>
                    <div className="forrela">
                        <img src={aboutus} alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div  className="d-flex forpadd">
                <div>
                    <div className="forrela">
                        <img src={aboutus3} alt="" srcset="" />
                    </div>
                </div>
                <div>
                    <div className="d-flex withspan">
                        <div className="circle"></div>
                        <span>ბლაბლბალბალბლაბლაბლბ ბლაბალბლ <br /> ბლაბა ლბალბალბ ბალბალბალ ბლაბ <br /> ბლალ ბალლაბაბა ჰკხკჯსბ სხაბჯკხკსბხჯკა <br /> ბცსჯ სხნჯსხ ხსჯხსბ 28192ყ სხკბჯბხს</span>
                    </div>
                    <div className="d-flex withspan">
                        <div className="circle"></div>
                        <span>ბლაბლბალბალბლაბლაბლბ ბლაბალბლ <br /> ბლაბა ლბალბალბ ბალბალბალ ბლაბ <br /> ბლალ ბალლაბაბა ჰკხკჯსბ სხაბჯკხკსბხჯკა <br /> ბცსჯ სხნჯსხ ხსჯხსბ 28192ყ სხკბჯბხს</span>
                    </div>
                </div>
            </div>
            </div>
            <h1>გამოცდილება</h1>
            <div className="d-flex experience">
                <div >
                    <div className="expspan">თამარ ივერი</div>
                    <div><img src={screen1} alt="" srcset="" /></div>
                    <div  className="expdiv">
                        <span className="expspan">“ქავთასი კურნავს კუჭ-ნაწლავის პათოლოგიებს (წყლულსა და ეროზიებს) ღვიძლის ნებისმიერ პათოლოგიას.... იხ. მეტი</span>
                    </div>
                </div>
                <div >
                    <div className="expspan">თამარ ივერი</div>
                    <div><img src={mamao} alt="" srcset="" /></div>
                    <div  className="expdiv">
                        <span className="expspan">“ქავთასი კურნავს კუჭ-ნაწლავის პათოლოგიებს (წყლულსა და ეროზიებს) ღვიძლის ნებისმიერ პათოლოგიას.... იხ. მეტი</span>
                    </div>
                </div>
            </div>
            <div className="d-flex experience">
                <div >
                    <div className="expspan">თამარ ივერი</div>
                    <div><img src={celeb} alt="" srcset="" /></div>
                    <div className="expdiv">
                        <span className="expspan">“ქავთასი კურნავს კუჭ-ნაწლავის პათოლოგიებს (წყლულსა და ეროზიებს) ღვიძლის ნებისმიერ პათოლოგიას.... იხ. მეტი</span>
                    </div>
                </div>
                <div >
                    <div className="expspan">თამარ ივერი</div>
                    <div><img src={celeb2} alt="" srcset="" /></div>
                    <div className="expdiv">
                        <span className="expspan">“ქავთასი კურნავს კუჭ-ნაწლავის პათოლოგიებს (წყლულსა და ეროზიებს) ღვიძლის ნებისმიერ პათოლოგიას.... იხ. მეტი</span>
                    </div>
                </div>
            </div>
        </div>
    )
}