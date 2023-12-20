import Header from "./header";
import nayeni1 from "../nayeni.png";
import malamo1 from "../malamoforprod.png";
import malamo from "../malamo.png";
import aboutus from "../lela.png";
import nayeni2 from "../nayeniforprod.png";
import { useState } from "react";

export default function Production({ prop }) {
  const [more, setmore] = useState(false);
  const gayidvebi = readLocalStorage()
  function add() {
    const obj = {addres:'firosmani',phone:'555105360'}
    gayidvebi.push()
  }
  return (
    <div>
      <Header prop={{ color: "rediko" }} />
      <h1>ჩვენი პროდუქცია</h1>
      <div className="main-body">
        <div className="withimg">
          <span>ნაყენი</span>
          <img src={nayeni1} alt="" srcset="" />
        </div>
        <div className="withimg">
          <span>მალამო</span>
          <img src={malamo1} alt="" srcset="" />
        </div>
      </div>
      <h1>ნაყენი ქავთასი</h1>
      <div className="d-flex forpadd">
        <div>
          <div className="d-flex withspan">
            <div className="circle"></div>
            <span>
              ქავთასი ძლიერმოქმედი ანტისეპტიკ-იმუნომოდულატორია, რომელსაც
              პირველივე კურსიდან აქვს შედეგი, სწორედ პირველი კურსი განსაზღვრის
              კურსების რაოდენობას სრულ განკურნებამდე, კურსის ხანგღძლივობა 24
              დღეა, მკურნალობის დაწყებისთანავე.
            </span>
          </div>
          <div className="d-flex withspan">
            <div className="circle"></div>
            <span>
              ხდება მკვეთრად გამოხატული სიმპტომების შემცირება 30-40%-ით ,
              საორიენტაციო კურსის გავლის შემდეგ მოწმდება ანალიზები და მიღებული
              შედეგის მიხედვით განისაზღვრება დოზირება და მიმართულება.
            </span>
          </div>
          <div className="d-flex withspan">
            <button> დაგვიკავშირდი შესაძენად</button>
          </div>

        </div>

        <div>
          <div className="forrela">
            <img src={nayeni2} alt="" srcset="" />
          </div>
        </div>
      </div>
    <div className="for-production">
    <span className="nayeni-ebrdzvis">ნაყენი ქავთასი ებრძვის :</span>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>
                კუჭ-ნაწლავის ნებისმიერ პათოლოგიას (გასტრიტი, რეფლუქსი,
                ეზოფაგიტი,წყლული)
              </span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>
                ნაღვლის ბუშტის პათოლოგიებს (კენჭები,კონკრემენტები,ქოლეცისტიტი)
              </span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>თირკმელების პათოლოგიებს (კრეატინინი, ვიზუალურად)</span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>
                საშარდე გზების პათოლოგიებს (ცისტიტი, ანთებითი პროცესი)
              </span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>
                საშარდე გზების პათოლოგიებს (ცისტიტი, ანთებითი პროცესი)
              </span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>
                ჰემოროი-ბუასილს (სისხლმდენი კვანძოვანი, შიდა ნახეთქებით)
              </span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>არეგულირებს შარდმჟავას (პადაგრა)</span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>უსიამოვნო სუნს პირის ღრუში (ჰელიკობაქტერია )</span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>
                ართრიტსა და ართროზს კოქსართროზს (ხდება ლოკალური
                ზონებისელასტინითა და კოლაგენით მომარაგება, გამოიდევნება ლიმფა)
              </span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>
                ებრძვის სიმსივნური უჯრედებს (იმუნომოდულატორი-ანტისეფტიკი)
              </span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>
                ფარისებრი ჯირკვლის პათოლოგიებს (ნებისმიერი
                ფორმაცვალებისშემთხვევაში, როგორც ვიზუალურად ასევე ანალიზებით)
              </span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>ამაღლებს იმუნურ სისტემას</span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>
                არეგულირებს ქოლესტერინს ( ხდება ქოლესტერინის გამოდევნა
                ფოლაქებიდან)
              </span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>არეგულირებს ნივთიერებათა ცვლასა და ჰორმონალურ ბალანსს</span>
            </div>
            <div className="d-flex withspana">
              <div className="for-more-circle"></div>
              <span>
                აქვს უნარი გაიწოვოს: კისტები, მასტიტები, მასტოფატიები ( თუ
                ციკლიაქტიურია)
              </span>
            </div>
    </div>
      <h1>მალამო ქავთასი</h1>
      <div className="d-flex forpadd">
        <div className="forrela">
          <img src={malamo1} alt="" srcset="" />
        </div>

        <div>
            <span className="for-spani">ბუასილის და ჰემოროიდული კვანძების <br /> საწინააღმდეგო მალამო "ქავთასი" :</span>
          <div className="d-flex withspan">
            <div className="circle"></div>
            <span>
              .კუჭ-ნაწლავის ნებისმიერ პათოლოგიას (გასტრიტი, რეფლუქსი,
              ეზოფაგიტი,წყლული) .ნაღვლის ბუშტის პათოლოგიებს
              (კენჭები,კონკრემენტები,ქოლეცისტიტი) .თირკმელების პათოლოგიებს
              (კრეატინინი, ვიზუალურად) .საშარდე გზების პათოლოგიებს (ცისტიტი,
              ანთებითი პროცესი) .ჰემოროი-ბუასილს (სისხლმდენი კვანძოვანი, შიდა
              ნახეთქებით)
              <div>იხილეთ მეტი</div>
            </span>
          </div>
          <div className="d-flex withspan">
            <div className="circle"></div>
            <span>
              ბლაბლბალბალბლაბლაბლბ ბლაბალბლ <br /> ბლაბა ლბალბალბ ბალბალბალ ბლაბ{" "}
              <br /> ბლალ ბალლაბაბა ჰკხკჯსბ სხაბჯკხკსბხჯკა <br /> ბცსჯ სხნჯსხ
              ხსჯხსბ 28192ყ სხკბჯბხს
            </span>
          </div>
          <div className="d-flex withspan">
            <button > დაგვიკავშირდი შესაძენად</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function readLocalStorage() {
  var expenses = localStorage.getItem('gayidvebi')
  if (expenses === null) {
      return []
  }
  return JSON.parse(expenses)
}