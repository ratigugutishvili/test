import Header from "./header";


export default function Gayidvebi(){
    const sels = readLocalStorage()
    console.log(sels);
    return(
        <div>
            <Header />
            {sels.map((el)=>{
                return (
                <div className="solds">
                    <div>name: {el.name}</div>
                    <div>lastname: {el.lastname}</div>
                    <div>mobile: {el.mobile}</div>
                    <div>adress: {el.adress}</div>
                </div>
                )
            })}
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