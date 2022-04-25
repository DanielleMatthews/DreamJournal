import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { oneDream, updateDream } from "../services/getDreams";

export default function Update(){
    const { id } = useParams()
    const nav = useNavigate()
    const [dream, setDream] = useState({})

    useEffect(()=>{
        oneDream(id)
        .then(res=> setDream(res.data))
    }, [])

    const updateTheDream = e => {
        e.preventDefault()
        const updated = {
            title: e.target.title.value,
            description: e.target.description.value,
            opinions: e.target.opinions.value,
            dayBefore: e.target.dayBefore.value,
            date: e.target.date.value}
        updateDream(id, updated)
        nav(`/${id}`)
    }
    return(
        <div> 
            <form onSubmit={updateTheDream}>
            Title: <input type='text' name='title' defaultValue={dream.title} /> <br/>
            Description: <input type='text' name='description' defaultValue={dream.description} /> <br/>
            Opinions on Dream: <input type='text' name='opinions' defaultValue={dream.opinions} /> <br/>
            Describe the Day Before Your Dream: <input type='text' name='dayBefore' defaultValue={dream.dayBefore} /> <br/>
            Date: <input type='date' name='date' defaultValue={dream.date} /> <br/>
            <input type='submit' value='Update Dream'/>
            </form>
        </div>
    )
}