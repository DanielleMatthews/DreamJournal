import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { dreamList } from "../services/getDreams"

export default function Index(){
    const nav = useNavigate()
    const[data, setData] = useState([])

    useEffect(()=>{
        dreamList()
        .then(res=> setData(res.data))
    },[])
    console.log(data)

    return(
        <div>
            <h1> homey home page </h1>
            <button onClick={()=> {nav("/new")}}> New Record </button>
            <ul></ul>
            <h3> Dreams </h3>
            <ul>
                {data.map((item, i)=>(
                    <li key={i}>
                        <a href= {`http://localhost:3000/${item._id}`}> {item.title} </a>
    
                    </li>
                ))}
            </ul>   
        </div>
    )
}