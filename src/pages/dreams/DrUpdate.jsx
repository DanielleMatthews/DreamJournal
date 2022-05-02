import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { oneDream, updateDream } from "../../services/getDreams";

export default function UpdateDream(){
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
        nav(`/dream/${id}`)
    }
    return(
        <div className="form"> 
            <h3> Update Dream </h3>
            <form onSubmit={updateTheDream}>
            Title: <input type='text' name='title' defaultValue={dream.title} /> <br/>
            Description: <textarea name='description' defaultValue={dream.description} cols='32' rows='3' /> <br/>
            Opinions on Dream: <textarea name='opinions' defaultValue={dream.opinions} cols='32' rows='2'/> <br/>
            Describe the Day Before Your Dream: <textarea name='dayBefore' defaultValue={dream.dayBefore} cols='32' rows='3'/> <br/>
            Date: <input type='date' name='date' defaultValue={dream.date} /> <br/> <br/>
            <input type='submit' value='Update Dream'className="formBtn"/>
            </form>
        </div>
    )
}