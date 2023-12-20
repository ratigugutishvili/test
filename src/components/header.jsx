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
    return (
        <header>
            <img src={Logo} alt="" srcset="" />
            <div className="main">
                {prop.color == 'main' && <a href="/" style={{color:'red'}}>მთავარი</a>}
                {prop.color !== 'main' && <a href="/">მთავარი</a>}
                <div class="dropdown">
                    {prop.color == 'rediko' && <a href="/production" style={{color:'red'}}  >პროდუქცია</a>}
                    {prop.color !== 'rediko' && <a href="/production"  >პროდუქცია</a>}
                    <div class="dropdown-content">
                            <div className="d-flex and">
                                <div className="circle"></div>
                                <div>ნაყენიi</div>
                            </div>
                            <div className="d-flex and">
                                <div className="circle"></div>
                                <div>მალამო</div>
                            </div>
                    </div>
                </div>
                <a href="/blogs">ბლოგი</a>
                <a href="x">გამოხმაურება</a>
                <a href="/aboutus">ჩვენს შესახებ</a>
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