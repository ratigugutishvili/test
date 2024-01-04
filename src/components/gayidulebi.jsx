import Header from "./header";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import trash from "../trash.png"

export default function Gayidvebi(){
    const sels = readLocalStorage()
    const navigate = useNavigate()
    const { number } = useParams();
    console.log(sels);
    function deletesale(name) {
        const currentsale = sels.find((el)=>{
            return el.name == name
        })
        const indexa = sels.indexOf(currentsale)
        sels.splice(indexa,1)
        localStorage.setItem('gayidvebi',JSON.stringify(sels))
        window.location.reload()
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