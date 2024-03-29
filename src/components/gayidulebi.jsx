import Header from "./header";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import trash from "../trash.png"

export default function Gayidvebi(){
    const [sels, setdata] = useState([])
    const [test,settest] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://dolphin-app-5on2b.ondigitalocean.app/sales", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
    
            const data = await response.json();
    
            setdata(data.sales);
          } catch (error) {
            console.log(error + "pirveli");
          }
        };
    
        fetchData();
      }, []);


      
    const navigate = useNavigate()
    const { number } = useParams();
    console.log(sels);
    function deletesale(name) {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://dolphin-app-5on2b.ondigitalocean.app/delete/${name}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            });
    
            const data = await response.json();
            console.log(data);
    
    
          } catch (error) {
            console.log(error + "qwerqwerqewr");
          }
        };
    
        fetchData();
        window.location.reload();
      }
    return(
        <div>
            <Header />
            <table style={{width:'100%'}}>
            {sels.map((el)=>{
                const index = sels.indexOf(el)
                if (index < 3 && number == 1) {
                    return (
                        <tr className="solds" key={el.name}>
                            <td className="for-lela" style={{width:'25px'}}><div className="lela-inside-index">{index+1}.</div></td>
                            <td className="lela-inside1"><div className="lela-inside">{el.name}</div></td>
                            <td className="lela-inside2"><div className="lela-inside">{el.mobile}</div></td>
                            <td className="lela-inside3"><div className="lela-inside">{el.city}</div></td>
                            <td onClick={()=>{deletesale(el.name)}}><span>წაშლა</span><img src={trash} alt="" srcset="" /></td>
                        </tr>
                        )
                }
                if (index <= 6 && number == 2 && index >= 3) {
                    return (
                        <div className="solds" key={el.name}>
                            <div>name: {el.name}</div>
                            <div>lastname: {el.lastname}</div>
                            <div>mobile: {el.mobile}</div>
                            <div>adress: {el.adress}</div>
                            <div onClick={()=>{deletesale(el.name)}}><span>წაშლა</span><img src="" alt="" srcset="" /></div>
                        </div>
                        )
                }
            })}
            {sels.length > 3 && 
                <div>
                <div onClick={()=>{navigate('/sales/1')}}>1</div>
                <div onClick={()=>{navigate('/sales/2')}}>2</div>
                </div>
            }
            </table>
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