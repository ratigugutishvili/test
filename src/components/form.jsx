import Header from "./header";
import "../sales.css";
import { useState } from "react";
import Footer from "./footer";
import lamazi from "../lamazi.png";
import lamazi2 from "../lamazi2.png";

export default function FormQavtas() {
  const [name, setname] = useState("");
  const [value, setValue] = useState("");
  const [city, setcity] = useState("");
  const [mobile, setmobile] = useState("");
  const [mobileT, setmobileT] = useState(false);
  const [mobileB, setmobileB] = useState(true);
  const [email, setemail] = useState("");
  const [adress, setadress] = useState("");
  function buy() {
    if (mobile.length <9) {
      console.log('error');
      setmobileT(true)
      setmobileB(false)
      return
    }
    const obj = { name, city, mobile, adress, email, value };
    var damatebulebi = readLocalStorage();
    damatebulebi.push(obj);
    localStorage.setItem("gayidvebi", JSON.stringify(damatebulebi));
    console.log(obj);
  }
  return (
    <div className="for-lamazai">
      <Header />
      <img className="imgitqo" src={lamazi} alt="" />
      <div className="center-sales">
        <span className="sales-span">შეუკვეთე ქავთასი ახლავე</span>
      </div>
      <div className="center-sales">
        <div className="sales-flex">
          <div className="sales-input">
            <div>
              <input type="text" placeholder="             სახელი და გვარი"  value={name} onChange={(e)=>{setname(e.target.value)}}/>
            </div>
            <div>
            {mobileB &&<input type="text" placeholder="              ტელეფონის ნომერი"  value={mobile} onChange={(e)=>{
                setmobile(e.target.value)
                setmobileT(false)
              }}/>}
            {mobileB == false &&<input type="text" placeholder="              ტელეფონის ნომერი"  value={mobile} className="wrong-sale" style={{border:'1px solid red'}} onChange={(e)=>{
                setmobile(e.target.value)
                setmobileT(false)
              }}/>}
            </div>
            <div>
              <input
                type="text"
                placeholder="              ელ-ფოსტის მისამართი"
                 value={email} onChange={(e)=>{setemail(e.target.value)}}
              />
            </div>
          </div>
          <div className="sales-input">
            <div>
              <input type="text" placeholder="              ქალაქი"  value={city} onChange={(e)=>{setcity(e.target.value)}}/>
            </div>
            <div>
              <input type="text" placeholder="              მისამართი" value={adress} onChange={(e)=>{setadress(e.target.value)}} />
            </div>
            <div>
              <select
                name=""
                id=""
                className="select"
                placeholder="                       ქავთასის პროდუქცია"
                onChange={(event) => setValue(event.target.value)}
                defaultValue={value}
              >
                <option disabled={true} value="">
                  ქავთასის პროდუქცია
                </option>
                <option value="malamo">მალამო</option>
                <option value="nayeni">ნაყენი</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="center-sales sales-btn">
        <button onClick={()=>{buy()}}>შეკვეთა</button>
      </div>
      <div className="center-sales">
        {mobileT && <span className="sales-span" style={{color:'red'}}>შეიყვანეთ სწორი ტელეფონი</span>}
      </div>
      <Footer />
    </div>
  );
}

function readLocalStorage() {
  var expenses = localStorage.getItem("gayidvebi");
  if (expenses === null) {
    return [];
  }
  return JSON.parse(expenses);
}
