import Header from "./header";
import blog1 from "../blog1.png";
import Footer from "./footer";

export default function Interview() {
  return (
    <div>
      <Header />
      <div className="blog-flex">
        <div className="height-reduce">
          <div>
            <p className="for-blog">ბ ლ ო გ ი</p>
            <p className="for-qavtas for-blog">ქ ა ვ თ ა ს ი</p>
          </div>
        </div>
        <div>
          <img src={blog1} alt="" srcset="" />
        </div>
      </div>
      <div className="blog-interwie-flex">
        <div className="blog-circle"></div>
        <div className="forpaddingblog">
          <span className="blog-span">
            ფიტო თერაპევტი ლელა გეჯაძე 2005 წლიდან მკურნალობს <br /> ავადმყოფებს
            თავისი საავტორო პრეპარატით, რომელიც <br /> თავდაპირველად ღვიძლისა და
            ნაღვლის სამკურნალოდ <br /> იყო შექმნილი, მაგრამ პაციენტებთან
            მუშაობისას <br /> აღმოჩნდა, რომ მათ კომპლექსური მკურნალობა <br />{" "}
            ჩაუტარდათ გარდა იმ კონკრეტული პათოლოგიებისა, <br /> რომლის
            სამკურნალოდაც მიიღეს ლელას წამალი, მათი <br /> სხვა დაავადებებიც
            განიკურნა. ამ ყველაფერზე თავად <br /> ქალბატონი ლელა გვესაუბრება.
          </span>
        </div>
      </div>
      <div className="blog-interwie-flex for-blog-margin">
        <div className="blog-circle"></div>
        <div className="forpaddingblog">
          <span className="blog-span">
            ლელა გეჯაძე: ნაყენი ქავთასი სრულიად ბუნებრივ <br /> კომპონენტებზეა
            დამზადებული.იგი 100%-ით <br /> მცენარეულია და არ შეიცავს არანაირ ქიმიურ <br />
            დანამატს
          </span>
        </div>
      </div>
      <div className="blog-interwie-flex for-blog-margin third">
        <div className="blog-circle"></div>
        <div className="forpaddingblog">
          <span className="blog-span">
          ქალბატონო ლელა, რის სამკურნალოდ გამოიყენება ნაყენი „ქავთასი“?
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
