import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteDream, oneDream } from "../services/getDreams"

export default function Show(){
    const nav = useNavigate()
    const { id } = useParams()
    const [dream, setDream] = useState({})

    useEffect(()=>{
        oneDream(id)
        .then(res => setDream(res.data))
    }, [])
    console.log(dream)

    const deleteTheDream = () => {
        deleteDream(id)
        nav('/')
    }

    return(
        <div> 
            <h3> {dream.title} </h3>
            <p> {dream.description} </p>
            <button onClick={()=> {nav(`/${id}/update`)}}> Edit </button>
            <button onClick={deleteTheDream}> Delete Dream</button>
        </div>
    )
}