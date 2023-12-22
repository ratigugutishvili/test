import Header from "./header";


export default function Gayidvebi(){
    const sels = readLocalStorage()
    console.log(sels);
    return(
        <div>
            <Header />
            {sels.map((el)=>{
                return (
                <div>
                    <div>{el.phone}</div>
                    <div>{el.address}</div>
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