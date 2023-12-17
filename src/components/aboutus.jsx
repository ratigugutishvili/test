import Header from "./header";
import { useState } from "react";
import aboutus from "../baoutus.png";
import arrow from "../arrow.png";

export default function AboutUs({ prop }) {
    const [isdown1,setdown1] = useState(false)
    const [isdown2,setdown2] = useState(false)
    const [isdown3,setdown3] = useState(false)
    const [isdown4,setdown4] = useState(false)
    const [isdown5,setdown5] = useState(false)
    const [isdown6,setdown6] = useState(false)
    const [isdown7,setdown7] = useState(false)
    const [isdown8,setdown8] = useState(false)
    function down1() {
        setdown1(!isdown1)
    }
    function down2() {
        setdown2(!isdown2)
    }
    function down3() {
        setdown3(!isdown3)
    }
    function down4() {
        setdown4(!isdown4)
    }
    function down5() {
        setdown5(!isdown5)
    }
    function down6() {
        setdown6(!isdown6)
    }
    function down7() {
        setdown7(!isdown7)
    }
    function down8() {
        setdown8(!isdown8)
    }
  return (
    <div>
      <Header />
      <div className="aboutus-stroke">
        სასწაულმოქმედი ქართული ნაყენი - ქ ა ვ თ ა ს ი, რომელიც უმძიმეს <br />
        დაავადებებს ამარცხებს, უკვე 18 წელია წარმატებით კურნავს უმძიმეს <br />
        პაციენტებს საქართველოსა და მსოფლიოს მრავალ ქვეყანაში.
      </div>
      <div className="aboutus-flex">
        <div>
          <div className="blog-interwie-flex">
            <div className="blog-circle"></div>
            <div className="forpaddingblog">
              <span className="blog-span aboutus-span">
                ყოველდღიურ პრაქტიკაში ჩვენ სხვადასხვა დაავადებასთან ბრძოლის ახალ
                მეთოდებს ვეძებთ. განსაკუთებით კი მაშინ, როდესაც მედიცინა უძლურია
                და გამოჯანმრთელების იმედს ბოლომდე ვერ გვაძლევს. აღმოჩნდა, რომ
                საქართველოში ბევრი ასეთი ადამიანია, რომლებმაც ბოლო იმედად
                უნიკალური სამკურნალო ნაყენი „ქავთასი“ აირჩიეს. ფიტოთერაპევტი
                ლელა გეჯაძე საზოაგადოებისთვის უკვე კარგად ნაცნობი ექიმია, რადგან
                მისი ნაყენის საშუალებით უამრავმა პაციენტმა შეძლო მძიმე
                დაავადების ბოლომდე დამარცხება.
              </span>
            </div>
          </div>
        </div>
        <div>
          <img src={aboutus} alt="" srcset="" />
        </div>
      </div>
      <div className="blog-interwie-flex margin-top">
        <div className="blog-circle"></div>
        <div className="forpaddingblog">
          <span className="blog-span aboutus-span">
            ჰეპატიტი, ღვიძლის დაზინებები, სიმსივნე, ფარისებრი ჯირკვალი,
            ფიბროზული წარმონაქმნები, პროსტატა, კუჭ-ნაწლავის პრობლემები, ეს
            მხოლოდ მცირე ჩამოანთვალია იმ პრობლემებისა, რომლის დამარცხებაშიც
            პაციენტები ლელა გეჯაძეს ემადლიერებიან.
          </span>
        </div>
      </div>
      <div className="about-us-p">
        რომელ დაავადებებს კურნავს <br /> ქავთასი?
      </div>
      <div className="blog-interwie-flex margin-top">
        <div className="blog-circle"></div>
        <div className="forpaddingblog">
          <span className="blog-span aboutus-span">
            გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით, მცენარეთა
            ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც უნდა ველოდეთ,
            ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი ანტისეფტიკი იმუნომოდულატორია,
            რომელსაც უნარი აქვს სხვადასხვამიმდინარეობით მისი მოქმედების არეალი
            ფართეა და პაციენტს უტარდება კომპლექსური მკურნალობა...
          </span>
        </div>
      </div>
      <div className="aboutus-cures">ქავთასი მკურნალობს:</div>
      <div className="aboutus-main">
        <div>
          <div className="each" onClick={()=>{down1()}}>
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>გასტროენტეროლოგიური მიმართულებით</span>
          </div>
          {isdown1 &&           <div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
          </div>}
        </div>
        <div>
          <div className="each" onClick={()=>{down2()}}>
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>გასტროენტეროლოგიური მიმართულებით</span>
          </div>
          {isdown2 &&           <div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
          </div>}
        </div>
        <div>
          <div className="each" onClick={()=>{down3()}}>
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>გასტროენტეროლოგიური მიმართულებით</span>
          </div>
          {isdown3 &&           <div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
          </div>}
        </div>
        <div>
          <div className="each" onClick={()=>{down4()}}>
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>გასტროენტეროლოგიური მიმართულებით</span>
          </div>
          {isdown4 &&           <div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
          </div>}
        </div>
        <div>
          <div className="each" onClick={()=>{down5()}}>
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>გასტროენტეროლოგიური მიმართულებით</span>
          </div>
          {isdown5 &&           <div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
            <div className="blog-interwie-flex margin-top">
              <div className="blog-circle"></div>
              <div className="forpaddingblog">
                <span className="blog-span aboutus-list-span">
                  გაგაცნობთ ქავთასით მკურნალობას მიმართულების მიხედვით,
                  მცენარეთა ნაკრებ ქავთასის მოქმედება, და შედეგები, რომელსაც
                  უნდა ველოდეთ, ქავთასი მცენარეთა ნაკრები ძლიერმოქმედი
                  ანტისეფტიკი იმუნომოდულატორია, რომელსაც უნარი აქვს
                  სხვადასხვამიმდინარეობით მისი მოქმედების არეალი ფართეა და
                  პაციენტს უტარდება კომპლექსური მკურნალობა...
                </span>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}
