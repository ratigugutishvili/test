import Header from "./header";
import aboutus from "../baoutus.png";

export default function AboutUs({ prop }) {
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
              <span className="blog-span">
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
          <span className="blog-span">
            ჰეპატიტი, ღვიძლის დაზინებები, სიმსივნე, ფარისებრი ჯირკვალი,
            ფიბროზული წარმონაქმნები, პროსტატა, კუჭ-ნაწლავის პრობლემები, ეს
            მხოლოდ მცირე ჩამოანთვალია იმ პრობლემებისა, რომლის დამარცხებაშიც
            პაციენტები ლელა გეჯაძეს ემადლიერებიან.
          </span>
        </div>
      </div>
    </div>
  );
}
