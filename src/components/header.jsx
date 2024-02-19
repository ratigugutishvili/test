import Logo from "../logo.png"
import headerlogo from "../headerlogo.png"
import Lang from "../language.png"
import georgia from "../georgia.png"
import arrow from "../dropdownarrow.png"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function Header({prop}){
    const navigate = useNavigate()
    const [dropdownn,setdropdown] = useState(false)
    const [mobileHeader,setmobileHeader] = useState(false)
    function dropdown() {
        setdropdown(!dropdownn)
    }
    function mobiledropdown() {
        setmobileHeader(!mobileHeader)
    }
    if (!prop) {
        prop={color:'green'}
    }
    return (
        <div>
            <header className="pc">
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
            <div className="mobile">
                <div className="mobile-header">
                    <div><img src={Logo} alt="" className="header-img-mobile" /></div>
                    <div>
                    {prop.mobile == "mtavari" && <span>ქავთასი ნაყენი</span> }
                    {prop.mobile == "prod" && <span>ჩვენი პროდუქცია</span> }
                    {prop.mobile == "aboutus" && <span>ქავთასი ნაყენი</span> }
                    {prop.mobile == "blogs" && <span>ქავთასი ნაყენი</span> }
                    </div>
                    <div><img src={headerlogo} alt="" onClick={()=>{mobiledropdown()}} /></div>
                </div>
                {mobileHeader && 
                <div className="main-mobile">
                    <img src={arrow} alt="" className="arrow-mobile"   onClick={()=>{mobiledropdown()}}/>
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
                }
            </div>
        </div>
    )
}










