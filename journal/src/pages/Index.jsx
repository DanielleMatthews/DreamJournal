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
        <div id='mainHome'>
            <h1> homey home page </h1>
            <h3> Dream Journal </h3>
            <button onClick={()=> {nav("/dream/new")}}> New Dream </button> <br/> <br/>
            <p id="tryLink"> Try out this <a href="https://www.wombo.art/" target='_blank'> link </a> to generate an image based on key words from your dream! </p>
            <ul>
                {data.map((item, i)=>(
                <div className='list'>
                    <li key={i}>
                        <a href= {`http://localhost:3000/dream/${item._id}`} className="listLink"> {item.title} </a>
                    </li> 
                </div>
                ))}
            </ul> 
            <h3> Goals and Aspirations  </h3> 
            <button onClick={()=> {nav("/goal/new")}}> New Goal </button>
            <ul> 
                {goals.map((item, i)=>(
                    <div className="list">
                    <li key={i}> 
                    < a href= {`http://localhost:3000/goal/${item._id}`} className="listLink"> {item.title} </a>
                    </li>
                    </div>
                ))}
            </ul> 
        </div>
    )
}