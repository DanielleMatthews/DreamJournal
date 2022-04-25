import { useNavigate } from "react-router-dom"
import { createDream } from "../services/getDreams"

export default function New(){
    const nav = useNavigate()

    const createTheDream = e => {
        e.preventDefault()
        let add = {
            title: e.target.title.value,
            description: e.target.description.value,
            opinions: e.target.opinions.value,
            dayBefore: e.target.dayBefore.value,
            date: e.target.date.value}
        createDream(add)
        nav('/')
    }
    return(
        <div>
            <form onSubmit={createTheDream}>
            Title: <input type='text' name='title' /> <br/>
            Description: <input type='text' name='description' /> <br/>
            Opinions on Dream: <input type='text' name='opinions' /> <br/>
            Describe the Day Before Your Dream: <input type='text' name='dayBefore' /> <br/>
            Date: <input type='date' name='date' /> <br/>
            <input type='submit' value='Create a New Dream'/>
            </form>
        </div>
    )
}