import { useState } from "react"
import nayeni1 from "../foto1.png"
import malamo from "../update1.png"
import malamo2 from "../update2.png"
import mcenare2 from "../mcenare2.png"
import nayeni from "../axalinayeni.png"
import malamo1 from "../axalimalamo.png"
import mobileabus from "../mobile-abus.png"
import mobileabus1 from "../mobile-abus1.png"
import left from "../left.png"
import right from "../right.png"
import first from "../first.png"
import second from "../second.png"
import third from "../third.png"
import fourth from "../fourth.png"
import malamo23 from "../axalimalamo2.png"
import aboutus from "../lela.png"
import aboutus3 from "../aboutus3.png"
import mamao from "../mamao.png"
import celeb from "../celeb.png"
import mcenare from "../mcenare1.png"
import celeb2 from "../celeb2.png"
import gamoc from "../gamoc.png"
import Footer from "./footer"

export default function Body(){
    var [images,setimages]= useState(1)
    function changemore (){
        if (images === 4) {
            setimages(1)
            return
        }
        setimages(images++)
    }
    function changeless (){
        if (images === 1) {
            setimages(4)
            return
        }
        setimages(images--)
    }
    return (
        <div>
            <div className="display-flex into-mobile">
            <div className="main-bodyy">
                <div className="">
                    <img className="updatedbig withimga" src={nayeni1} alt="" srcset="" />
                </div>
                <div className="withimg withimga" >
                    <img src={malamo} alt="" srcset="" />
                    <img src={malamo2} alt="" srcset="" />
                </div>
            </div>
            </div>
            <div className="for-none">
            <div className="mobile-body"><img className="mobile-nayeni" src={nayeni1} alt="" srcset="" /></div>
            <div className="mobile-main-body">
                <div className="mobile-flex" >
                    <img src={malamo} alt="" srcset="" />
                    <img src={malamo2} alt="" srcset="" />
                </div>
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
                <div className="withimg" >
                    <img src={malamo23} alt="" srcset="" />
                    <span>მალამო</span>
                </div>
            </div>
            <div className="for-none">
                <div className="mobile-abus">ჩვენ შესახებ</div>
                <div className="mobile-abus-span"><span>სასწაულმოქმედი ქართული ნაყენი - ქავთასი, რომელიც უმძიმეს დაავადებებს ამარცხებს, უკვე 18 წელია წარმატებით კურნავს უმძიმეს პაციენტებს საქართველოსა და მსოფლიოს მრავალ ქვეყანაში.</span></div>
                <div className="mobile-abus-img">
                    <img src={mobileabus} alt="" />
                    <img src={mobileabus1} alt="" />
                </div>
                <div className="mobile-abus-span"><span>ყოველდღიურ პრაქტიკაში ჩვენ სხვადასხვა დაავადებასთან ბრძოლის ახალ მეთოდებს ვეძებთ. განსაკუთებით კი მაშინ, როდესაც მედიცინა უძლურია და გამოჯანმრთელების იმედს ბოლომდე ვერ გვაძლევს. აღმოჩნდა, რომ საქართველოში ბევრი ასეთი ადამიანია, რომლებმაც ბოლო იმედად უნიკალური სამკურნალო ნაყენი „ქავთასი“ აირჩიეს. </span></div>
                <div className="mobile-abus">გამოცდილება</div>
            </div>


            <div className="img-changer">
                <div><img src={left} alt="" srcset="" onClick={()=>{changeless()}}/></div>
                <div>
                    {images == 1 && <img src={first} alt="" srcset=""/> }
                    {images == 2 && <img src={second} alt="" srcset=""/> }
                    {images == 3 && <img src={third} alt="" srcset=""/> }
                    {images == 4 && <img src={fourth} alt="" srcset=""/> }
                </div>
                <div><img src={right} alt="" srcset="" onClick={()=>{changemore()}} /></div>
            </div>






            </div>
            <h1>ჩვენს შესახებ</h1>
            <div  className="agharvici">
            <img src={mcenare2} alt="" srcset="" className="mcenare2" />
            <div  className="d-flex forpadd">
                <div>
                    <div className="d-flex withspan">
                        <div className="circle"></div>
                        <span>სასწაულმოქმედი ქართული ნაყენი ქავთასი, რომელიც უმძიმეს დაავადებებს ამარცხებს, უკვე 18 წელია წარმატებით კურნავს უმძიმეს პაციენტებს საქართველოსა და მსოფლიოს მრავალ ქვეყანაში.</span>
                    </div>
                    {/* <div className="d-flex withspan">
                        <div className="circle"></div>
                        <span>ბლაბლბალბალბლაბლაბლბ ბლაბალბლ <br /> ბლაბა ლბალბალბ ბალბალბალ ბლაბ <br /> ბლალ ბალლაბაბა ჰკხკჯსბ სხაბჯკხკსბხჯკა <br /> ბცსჯ სხნჯსხ ხსჯხსბ 28192ყ სხკბჯბხს</span>
                    </div> */}
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
                        <span>ყოველდღიურ პრაქტიკაში ჩვენ სხვადასხვა დაავადებასთან ბრძოლის ახალ მეთოდებს ვეძებთ. განსაკუთებით კი მაშინ, როდესაც მედიცინა უძლურია და გამოჯანმრთელების იმედს ბოლომდე ვერ გვაძლევს. აღმოჩნდა, რომ საქართველოში ბევრი ასეთი ადამიანია, რომლებმაც ბოლო იმედად უნიკალური სამკურნალო ნაყენი „ქავთასი“ აირჩიეს. </span>
                    </div>
                    {/* <div className="d-flex withspan">
                        <div className="circle"></div>
                        <span>ბლაბლბალბალბლაბლაბლბ ბლაბალბლ <br /> ბლაბა ლბალბალბ ბალბალბალ ბლაბ <br /> ბლალ ბალლაბაბა ჰკხკჯსბ სხაბჯკხკსბხჯკა <br /> ბცსჯ სხნჯსხ ხსჯხსბ 28192ყ სხკბჯბხს</span>
                    </div> */}
                </div>
            </div>
            </div>
            <h1>გამოცდილება</h1>
            <div className="rakiticha">
            <div className="d-flex experience">
                <div className="akakie">
                    <div className="expspan strokeg">ნუკა კვალიაშვილი</div>
                    <div className="gamoc"><img src={gamoc} alt="" srcset="" /></div>
                    <div  className="expdiv">
                        <span className="expspan">“უკიდეგანოდ მადლობელი ვარ ეს საშინელი ტანჯვა რომ მომაცილეთ, ბოლო იმედი იყო ქავთასი ჩემთვის, ოპერაციის გაკეთება მესაჭიროებოდა. შედეგი მივიღე მეორე დღესვე, რაც ქავთასის მომხმარებელი გავხდი, ტკივილგამაყუჩებლები დამავიწყდა.”</span>
                    </div>
                </div>
                <div >
                    <div className="expspan strokeg">მამა პანტელეიმონ იოსავა</div>
                    <div className="gamoc"><img src={mamao} alt="" srcset="" /></div>
                    <div  className="expdiv">
                        <span className="expspan">“მადლობას ვუხდი ქალბატონ ლელას გაწეული მკურნალობისთვის, მართლაც რომ ძალიან შედეგიანი ნაყენია “ქავთასი”, მან გამკურნა ჰემეროიდისგან და მოახდინა კომპლექსური მკურნალობა.”</span>
                    </div>
                </div>
            </div>
            <div className="d-flex experience">
                <div className="akakie">
                    <div className="expspan strokeg">გია გოგორიშვილი</div>
                    <div className="gamoc"><img src={celeb} alt="" srcset="" /></div>
                    <div className="expdiv">
                        <span className="expspan">“ქავთასმა მომიგვარა უსერიოზულესი ღვიძლის პრობლემები, აბსოლიტურად დაარეგულირა, როგორც ღვიძლის ფუნქციები ასევე აღადგინა იგი ხარისხობრივად. დიდ რეკომენდაციას ვუწევ ქავთასს და მადლობას ვუხდი ქნ. ლელა გეჯაძეს.”</span>
                    </div>
                </div>
                <div >
                    <div className="expspan strokeg">ბექა ღვინიაშვილი</div>
                    <div className="gamoc"><img src={celeb2} alt="" srcset="" /></div>
                    <div className="expdiv">
                        <span className="expspan">“მინდა რეკომენდაცია გავუწიო ქავთასს, არაჩვეულებრივი წამალია ზოგადად იმუნიტეტისთვის, დიდ მადლობას ვუხდი ქნ. ლელა გეჯაძეს გაწეული პროფესიონალური მომსახურებისთვის”</span>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}