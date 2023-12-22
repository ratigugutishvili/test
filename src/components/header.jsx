import Logo from "../logo.png"
import Lang from "../language.png"
import georgia from "../georgia.png"
import border from "../bordera.png"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function Header({prop}){
    const navigate = useNavigate()
    const [dropdownn,setdropdown] = useState(false)
    function dropdown() {
        console.log(dropdownn);
        setdropdown(!dropdownn)
    }
    if (!prop) {
        prop={color:'green'}
    }
    console.log(prop.color);
    return (
        <header>
            <img src={Logo} alt="" srcset="" />
            <div className="main">
                {prop.color == 'main' && <a href="/" style={{fontWeight:'bold'}}>მთავარი</a>}
                {prop.color !== 'main' && <a href="/">მთავარი</a>}
                <div class="dropdown">
                    {prop.color == 'prod' && <a href="/production" style={{fontWeight:'bold'}}  >პროდუქცია</a>}
                    {prop.color !== 'prod' && <a href="/production"  >პროდუქცია</a>}
                    <div class="dropdown-content">
                            <div className="d-flex and">
                                <div className="circle"></div>
                                <div>ნაყენი</div>
                            </div>
                            <div className="d-flex and">
                                <div className="circle"></div>
                                <div>მალამო</div>
                            </div>
                    </div>
                </div>
                {prop.color == 'blog' && <a href="/blogs" style={{fontWeight:'bold'}}  >ბლოგი</a>}
                {prop.color !== 'blog' && <a href="/blogs"  >ბლოგი</a>}
                
                {prop.color == 'abus' && <a href="/aboutus" style={{fontWeight:'bold'}}  >ჩვენ შესახებ</a>}
                {prop.color !== 'abus' && <a href="/aboutus"  >ჩვენ შესახებ</a>}
                <a href="x">კონტაქტი</a>
            </div>
            <div className="lang2">
            <div className="lang">
                <img src={Lang} alt="" srcset="" onClick={dropdown} />
            </div>
                {dropdownn &&
                    <div className="block">
                    <div onClick={console.log(12)}>
                        <img src={georgia} alt="" srcset="" />
                        <span>ქართული</span>
                    </div>
                </div>
                }
            </div>
            <div className="position">
                <span>595-95-95-95</span>
            </div>
        </header>
    )
}