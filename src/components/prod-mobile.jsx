import Header from "./header";
import malamo from "../mobile-second.png";
import nayeni from "../mobile-first.png";
import Footer from "./footer";
import nayeniMobile from "../mobile-third.png";
import { Navigate, useNavigate } from "react-router-dom";


export default function MobileProd() {
    const navigate = useNavigate();
  return (
    <div>
      <Header prop={{ mobile: "prod" }} />
      <div className="first-two">
        <div>
          <img src={nayeni} alt="" srcset="" />
          <span>ქავთასის ნაყენი</span>
        </div>
        <div>
          <img src={malamo} alt="" srcset="" />
          <span>ქავთასი მალამო</span>
        </div>
      </div>
      <div className="mobile-qav">
        <span>ქავთასი ნაყენი</span>
      </div>
      <div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>
            ქავთასი ძლიერმოქმედი ანტისეპტიკი იმუნომოდულატორია, რომელსაც
            პირველივე კურსიდან აქვს შედეგი, სწორედ პირველი კურსი განსაზღვრავს
            კურსების რაოდენობას სრულ განკურნებამდე. კურსის ხანგღძლივობა 24 დღეა.
          </span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>
            ხდება მკვეთრად გამოხატული სიმპტომების შემცირება 30-40%-ით ,
            საორიენტაციო კურსის გავლის შემდეგ მოწმდება ანალიზები და მიღებული
            შედეგის მიხედვით განისაზღვრება დოზირება და მიმართულება.
          </span>
        </div>
      </div>
      <div className="prodnav">
        <span>რას კურნავს ნაყენი ქავთასი?</span>
      </div>
      <div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>
            კუჭ-ნაწლავის ნებისმიერ პათოლოგიას (გასტრიტი, რეფლუქსი, ეზოფაგიტი,
            წყლული)
          </span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>
            ნაღვლის ბუშტის პათოლოგიებს (კენჭები,კონკრემენტები,ქოლეცისტიტი)
          </span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>თირკმელების პათოლოგიებს (კრეატინინი, ვიზუალურად)</span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>საშარდე გზების პათოლოგიებს (ცისტიტი, ანთებითი პროცესი)</span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>ჰემოროი-ბუასილს (სისხლმდენი კვანძოვანი, შიდა ნახეთქებით)</span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>არეგულირებს შარდმჟავას (პადაგრა)</span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>უსიამოვნო სუნს პირის ღრუში (ჰელიკობაქტერია )</span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>
            ართრიტსა და ართროზს კოქსართროზს (ხდება ლოკალური ზონების ელასტინითა
            და კოლაგენით მომარაგება, გამოიდევნება ლიმფა)
          </span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>
            ებრძვის სიმსივნური უჯრედებს (იმუნომოდულატორი-ანტისეფტიკი) ამაღლებს
            იმუნურ სისტემას
          </span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>
            ფარისებრი ჯირკვლის პათოლოგიებს (ნებისმიერი ფორმაცვალების
            შემთხვევაში, როგორც ვიზუალურად ასევე ანალიზებით)
          </span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>
            არეგულირებს ქოლესტერინს ( ხდება ქოლესტერინის გამოდევნა ფოლაქებიდან)
          </span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>არეგულირებს ნივთიერებათა ცვლასა და ჰორმონალურ ბალანსს</span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>
            აქვს უნარი გაიწოვოს: კისტები, მასტიტები, მასტოფატიები ( თუ ციკლი
            აქტიურია)
          </span>
        </div>
        <div className="d-flex withspana mobile-withspan">
          <div className="for-more-circle"></div>
          <span>
            ქავთასი წმენდს სისხლს, გამოდევნის ტოქსინებს შლაკებს წინამდებარე
            ჯირკვლის ნებისმიერ პათოლოგიას ( პროსტატიტს, როგორც სიმფტომურად ასევე
            ხარისხობრივად)
          </span>
        </div>
      </div>
      <div className="prod-nav">
        <button onClick={()=>{navigate("/production")}}> უკან </button>
      </div>
      <Footer />
    </div>
  );
}
