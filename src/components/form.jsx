import Header from "./header";
import { useState } from "react";


export default function FormQavtas (){
    const [name,setname]=useState('')
    const [lastname,setlastname]=useState('')
    const [mobile,setmobile]=useState('')
    const [adress,setadress]=useState('')
    function buy() {
        const obj = {name,lastname,mobile,adress}
        var damatebulebi = readLocalStorage()
        damatebulebi.push(obj)
        localStorage.setItem('gayidvebi', JSON.stringify(damatebulebi))
    }
    return(
        <div>
            <Header />
            <div>
                <label htmlFor="">name:</label>
                <input type="text"  value={name} onChange={(e)=>{setname(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="">lastname:</label>
                <input type="text"  value={lastname} onChange={(e)=>{setlastname(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="">mobile:</label>
                <input type="text"  value={mobile} onChange={(e)=>{setmobile(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="">adress:</label>
                <input type="text"  value={adress} onChange={(e)=>{setadress(e.target.value)}} />
            </div>
            <div>
                <button onClick={()=>{buy()}}>გამოაგზავნე</button>
            </div>
        </div>
    )
}







function readLocalStorage() {
    var expenses = localStorage.getItem('gayidvebi')
    if (expenses === null) {
        return []
    }
    return JSON.parse(expenses)
  }