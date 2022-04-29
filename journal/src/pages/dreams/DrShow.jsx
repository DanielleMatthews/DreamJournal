import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteDream, oneDream } from "../../services/getDreams"

export default function ShowDream(){
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
        <div className="show"> 
            <h3> {dream.title} </h3>
            <button onClick={()=> {nav(`/dream/${id}/update`)}}> Edit </button> &nbsp;&nbsp;
            <button onClick={deleteTheDream}> Delete</button> <br/> <br/> <br/>
            <div className="description">
            <p> {dream.description} </p>
            </div>
        </div>
    )
}