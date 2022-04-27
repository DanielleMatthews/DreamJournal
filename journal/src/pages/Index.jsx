import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { dreamList } from "../services/getDreams"
import { goalList } from "../services/getGoals"

export default function Index(){
    const nav = useNavigate()
    const[data, setData] = useState([])
    const [goals, setGoals] = useState([])

    useEffect(()=>{
        dreamList()
        .then(res=> setData(res.data))
    },[])
    // console.log(data)

    useEffect(()=>{
        goalList()
        .then(res => setGoals(res.data))
    }, [])
    console.log(goals)

    return(
        <div>
            <h1> homey home page </h1>
            <h3> Dream Journal </h3>
            <button onClick={()=> {nav("/dream/new")}}> New Dream </button> <br/> <br/>
            Try out this <a href="https://www.wombo.art/" target='_blank'> link </a> to generate an image based on key words from your dream!
            <ul>
                {data.map((item, i)=>(
                    <li key={i}>
                        <a href= {`http://localhost:3000/dream/${item._id}`}> {item.title} </a>
                    </li>
                ))}
            </ul> 
            <h3> Goals and Aspirations  </h3> 
            <button onClick={()=> {nav("/goal/new")}}> New Goal </button>
            <ul> 
                {goals.map((item, i)=>(
                    <li key={i}> 
                    < a href= {`http://localhost:3000/goal/${item._id}`}> {item.title} </a>
                    </li>
                ))}
            </ul> 
        </div>
    )
}