import Header from "./header";
import { useState } from "react";
import aboutus from "../baoutus.png";
import arrow from "../arrow.png";

export default function AboutUs({ prop }) {
  const [isdown1, setdown1] = useState(false);
  const [isdown2, setdown2] = useState(false);
  const [isdown3, setdown3] = useState(false);
  const [isdown4, setdown4] = useState(false);
  const [isdown5, setdown5] = useState(false);
  const [isdown6, setdown6] = useState(false);
  const [isdown7, setdown7] = useState(false);
  const [isdown8, setdown8] = useState(false);
  const [isdown9, setdown9] = useState(false);
  function down1() {
    setdown1(!isdown1);
  }
  function down2() {
    setdown2(!isdown2);
  }
  function down3() {
    setdown3(!isdown3);
  }
  function down4() {
    setdown4(!isdown4);
  }
  function down5() {
    setdown5(!isdown5);
  }
  function down6() {
    setdown6(!isdown6);
  }
  function down7() {
    setdown7(!isdown7);
  }
  function down8() {
    setdown8(!isdown8);
  }
  function down9() {
    setdown9(!isdown9);
  }
  return (
    <div>
      <Header prop={{ color: "abus" }} />
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
          <div
            className="each"
            onClick={() => {
              down1();
            }}
          >
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>გასტროენტეროლოგიური მიმართულებით</span>
          </div>
          {isdown1 && (
            <div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    ქავთასი კურნავს გასტრო მიმართულებით ნებისმიერ პათოლოგიას :
                    გასტრიტი, ეზოფაგიტი, რეფლუქსი, დუოდენიტი, ეროზიები,
                    წყლულები, საყლაპავი მილის თიაქარი, ჰელიკო ბაქტერია და სხვა.
                    კუჭ-ნაწლავის პათოლოგიები გამოხატულია მკვეთრი სიმპტომებით,
                    როგორიცაა: შებერილობა, სიმძიმის შეგრძნება, მჟავიანობა,
                    უსიამოვნო სუნი და გემო, ნადები ენაზე, პერესტალტიკის
                    დაქვეითება, კოლიტისკენ ან პირიქით ფაღარათისკენ მიდრეკილება,
                    გულის რევის შეგრძნება და სხვა ...
                  </span>
                </div>
              </div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    მკურნალობის პირველი კურსი არის 24 დღიანი, რომელიც შემდგომ
                    განსაზღვრავსს კურსების რაოდენობას სრულ განკურნებამდე,
                    პაციენტი, როგორც კი იწყებს მკურნალობას, მომენტალურად იწყება
                    მკვეთრად გამოხატული სიმპტომების შემცირება, უკუსვლა. პირველი
                    კურსის დასრულების შემდეგ ხდება მდგომარეობის შეფასება
                    რამდენად არის შემცირებული სიმპტომები და ინიშნება კურსების
                    რაოდენობა სრულ განკურნებამდე.
                  </span>
                </div>
              </div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    ქავთასით გასტრო მიმართულებით მკურნალობა მოიცავს შემდეგ
                    ორგანოებს : საყლაპავი მილი, ღვიძლი, ნაღვლის ბუშტი, ელენთა,
                    პანკრიასის ჯირკვალი, მსხვილი ნაწლავი, წვრილი ნაწლავი, თორმე
                    გოჯა ნაწლავი და კუჭი. ქავთასით მკურნალობის დროს ხდება
                    ორგანოების რეგენერირება-განკურნება.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className="each"
            onClick={() => {
              down2();
            }}
          >
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>ნაღვლის ბუშტი :</span>
          </div>
          {isdown2 && (
            <div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    ქავთასი კურნავს ნაღვლის ბუშტის ნებისმიერ პათოლოგიას:
                    კენჭებს, ქოლეცისტიტს. დისკინეზიას კენჭი იშლება თუ ის
                    სტრუქტურული აგებულებით არის ქოლესტერინული წარმონაქმნი ანუ
                    რბილი საგოზავისებრი მასის პასტელინის მაგვარი კონსისტენციის
                    და გამოიდევნება სრულიად უმტკივნეულოდ, თუ კენჭი სტრუქტურული
                    აგებულება არის მთვარისებრი ტიპის ანუ მყიფე კენჭი, რომელსაც
                    მოყვება აკუსტიკური ჩრდილი ეს კენჭი ბოლომდე დაშლას არ
                    ექვემდებარება, მცირდება მხოლოდ ზომაში, სიმფტომები ნებისმიერ
                    შემთხვევაში ქრება
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className="each"
            onClick={() => {
              down3();
            }}
          >
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span> ენდოკრინული მიმართულება :</span>
          </div>
          {isdown3 && (
            <div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    ენდოკრინული მიმართულება : ფარისებრი ჯირკვალი (ჩიყვი) ქავთასი
                    ენდოკრინული მიმართულება სრულიად კურნავს ფარისებრი ჯირკვლის
                    ნებისმიერ პათოლოგიას, ნებისმიერი ფორმაცვალების შემთხვევაში,
                    როგორც კვანძოვნი ასევე ჰორმონალურ დისბალანსს, მკურნალობის
                    პირველი კურსი შეადგენს 24 დღეს, 24 დღიანი კურსი დასრულების
                    შემდეგ მოწმდება ანალიზები და ექოსკოპია და მიღებული სხვაობა
                    განსაზღვრის კურსების რაოდენობას, პაციენტი დინამიკაში იტარებს
                    გამოკვლევებს საბოლოო განკურნებამდე.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className="each"
            onClick={() => {
              down4();
            }}
          >
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>უროლოგიური მიმართულება : </span>
          </div>
          {isdown4 && (
            <div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    უროლოგიური მიმართულება : ქავთასი კურნავს წინამდებარე
                    ჯირკვლის ნებისმიერ პათოლოგიას, როგორც ხარისხობრივად ასევე
                    ფუნქციონალურადაც, „პი სი აი“ რეგულირდება და თავად ჯირკვალი
                    ჯდება ზომის ფარგლებში, ქავთასი ძლიერმოქმედი ანტისეფტიკია,
                    რომელსაც უნარი აქვს სწრაფად მოქმედების, მომენტალურად იწყება
                    სიმპტომებს : წყვეტილი შარდვა, წვა შარდვის დროს,
                    დაუკმაყოფილებლობის, ერექციული დისფუნქციის და იწყება ამ
                    მკვეთრად გამოხატული სიმფტომების უკუსვლა, პირველი კურსის
                    შემდეგ კეთდება საკონტროლო ექოსკოპიური კვლევა და სისხლის
                    ანალიზები და მიღებული შედეგი განსაზღვრის კურსების
                    რაოდენობას. პაციენტი იკეთებს გამოკვლევებს დინამიკაში.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className="each"
            onClick={() => {
              down6();
            }}
          >
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>მკურნალობა ართროზისა და ართრიტის მიმართულებით :</span>
          </div>
          {isdown6 && (
            <div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    მკურნალობა ართროზისა და ართრიტის მიმართულებით : ქავთასით
                    მკურნალობა ამ მიმართულებით იძლევა 60-80% შედეგს, ლოკალური
                    ზონებიდან გამოიდევნება ლიმფა და ზონები მარაგდება კოლაგენითა
                    და ელასტინით, ამ მიმართულბით სრული განკურნება არ ხდება,
                    პირველივე კურსიდან იწყება ტკივილის შემცირება, და ანთებით
                    პროცესის გამოდინება.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className="each"
            onClick={() => {
              down7();
            }}
          >
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>მკურნალობა ჰეპატოლოგიური მიმართულებით :</span>
          </div>
          {isdown7 && (
            <div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    მკურნალობა ჰეპატოლოგიური მიმართულებით : ქავთასი აღადგენს
                    ღვიძლს, როგორც ხარისხობრივად ასევე რეგულირდება
                    ფუნქციონალურადაც, ქავთასი ძლიერმოქმედი ანტისეფტიკია,
                    რომელსაც უნარი აქვს ორგანოების რეგენერირების, ამ
                    მიმართულებით მკურნალობა შემდეგნაირად ხდება: პირველი კურსის
                    შემდეგ, რომელიც 24 დღიანია, კეთდება საკონტროლო ანალიზები ამ
                    შემთხვევაში : ა ლ ტ , ა ს ტ, ჯ ჯ ტ, ბილირუბინი და ფიბროსკანი
                    ან ელასტოგრაფია, ღვიძლი პირველივე კურის დასრულებისას
                    დაიწყებს ფუნქციონალურ-ხარისხობრივ რეგენერირებას. იმკურნალე
                    ქავთასით, აირჩიე ჯანმრთელობა
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className="each"
            onClick={() => {
              down8();
            }}
          >
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>კისტები, მასტიტები, მასტოფატიებიმ პაპილომები :</span>
          </div>
          {isdown8 && (
            <div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    კისტები, მასტიტები, მასტოფატიებიმ პაპილომები : ქავთასი
                    ძლიერმოქმედი ანტისეფტიკია, რომლის მკურნალობას ახასიათებს
                    გაიწოვოს ზემოთ ჩამოთვლილი წარმონაქმნები, პირველი კურსის
                    შემდეგ კეთდება ექოსკოპიური კვლევა და ზომაში შემცირებული
                    სხვაობა განსაზღვრის კურსების რაოდენობას ინდივიდუალურად სრულ
                    განკურნებამდე.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className="each"
            onClick={() => {
              down9();
            }}
          >
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>წონის კორექცია :</span>
          </div>
          {isdown9 && (
            <div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    წონის კორექცია : ქავთასი ახდენს წონის კორექციას ნივთიერებათა
                    ცვლის დარეგულირებისა და ღვიძლის გაცხიმოვნების, ჰეპატოზის
                    ალაგების ფონზე, ქავთასი არ აქვეითებს მადას.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className="each"
            onClick={() => {
              down5();
            }}
          >
            <div>
              <img src={arrow} alt="" srcset="" />
            </div>
            <span>მკურნალობა ართროზისა და ართრიტის მიმართულებით :</span>
          </div>
          {isdown5 && (
            <div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    ქავთასი ძლიერმოქმედი ანტისეფტიკია, რომელსაც უნარი აქვს
                    გამოდევნოს ორგანიზმში მიმდინარე ანთებითი პროცესები მათ შორის
                    საშარდე გზების აწესრიგებს შარდის გამოყოფას
                  </span>
                </div>
              </div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    ქავთასი მცენარეთა ნაკრები იმუნომოდულატორია, რომელსაც უნარი
                    აქვს სწრაფი მოქმედების, ქავთასით მკურნალობის ერთი კურსი
                    მოიცავს 24 დღეს, კურსის დაწყებისთანავე მომენტალურად იწყება
                    მკვეთრად გამოხატული სიმფტომების შემცირება, პაციენტს ამ 24
                    დღის განმავლობაში აქვს გარკვეული შედეგი, რომელიც პროცენტულად
                    განისაზღვრება 30-50% ოდენობით.
                  </span>
                </div>
              </div>
              <div className="blog-interwie-flex margin-top">
                <div className="blog-circle"></div>
                <div className="forpaddingblog">
                  <span className="blog-span aboutus-list-span">
                    პირველი კურის შემდეგ ხდება მდგომარეობის და ზოგადი ფონის
                    შეფასება ასევე კეთდება საკონტროლო ანალიზები სხვაობის
                    მიხედვით ინიშნება კურსების რაოდენობა საბოლოო განკურნებამდე .
                    ქავთასი ონკოლოგიური პაციენტებისათვის ქავთასი
                    იუმუნომოდულატორია, რომელიც ებრძვის სიმსივნური უჯრედების
                    წარმოქმნა განვითარებას, იგი ძლიერმოქმედი ანტისეფტიკიამ
                    რომელიც სისხლს წმენდს უჯრედულად, როგორც ტოქსინებისგან ასევე
                    გამოდევნის თავისუფალ რადიკალებს აღადგენს ბალანსს და ახდენს
                    ორგანიზმის სრულ დეტოქსიკაციას
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
