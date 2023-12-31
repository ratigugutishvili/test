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
        setdropdown(!dropdownn)
    }
    if (!prop) {
        prop={color:'green'}
    }
    return (
        <header>
            <img src={Logo} alt="" onClick={()=>{navigate('/')}} style={{cursor:'pointer'}} />
            <div className="main">
                {prop.color == 'main' && <a href="/" style={{fontWeight:'bold'}}className="header-hoverii">მთავარი</a>}
                {prop.color !== 'main' && <a href="/"className="header-hoverii">მთავარი</a>}
                <div className="dropdown">
                    {prop.color == 'prod' && <a href="/production" style={{fontWeight:'bold'}} className="header-hoverii" >პროდუქცია</a>}
                    {prop.color !== 'prod' && <a href="/production" className="header-hoverii" >პროდუქცია</a>}
                </div>
                {prop.color == 'blog' && <a href="/blogs" style={{fontWeight:'bold'}} className="header-hoverii" >ბლოგი</a>}
                {prop.color !== 'blog' && <a href="/blogs"  >ბლოგი</a>}
                
                {prop.color == 'abus' && <a href="/aboutus" style={{fontWeight:'bold'}} className="header-hoverii" >ჩვენ შესახებ</a>}
                {prop.color !== 'abus' && <a href="/aboutus" className="header-hoverii" >ჩვენ შესახებ</a>}

                {prop.color == 'contact' && <a href="/contact" style={{fontWeight:'bold'}} className="header-hoverii" >კონტაქტები</a>}
                {prop.color !== 'contact' && <a href="/contact" className="header-hoverii" >კონტაქტები</a>}
            </div>
            <div className="lang2">
            <div className="lang">
                <img src={Lang} alt="" onClick={dropdown} />
            </div>
                {dropdownn &&
                    <div className="block">
                    <div onClick={console.log(12)}>
                        <img src={georgia} alt=""/>
                        <span>ქართული</span>
                    </div>
                </div>
                }
            </div>
            <div className="position">
                <span>551 611 416</span>
            </div>
        </header>
    )
}