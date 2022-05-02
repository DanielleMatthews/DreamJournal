import { useNavigate } from "react-router-dom"
import { createDream } from "../../services/getDreams"

export default function NewDream(){
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
        <div className="form">
            <h3> Create a New Dream </h3>
            <form onSubmit={createTheDream}>
            Title: <input type='text' name='title' /> <br/>
            Description: <textarea name='description' cols='32' rows='3' /> <br/>
            Opinions on Dream: <textarea name='opinions' cols='32' rows='2'/> <br/>
            Describe the Day Before Your Dream: <textarea name='dayBefore' cols='32' rows='3'/> <br/>
            Date: <input type='date' name='date' /> <br/> <br/>
            <input type='submit' value='Create a New Dream'/>
            </form>
        </div>
    )
}