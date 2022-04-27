import { useNavigate } from "react-router"
import { createGoal } from "../../services/getGoals"

export default function NewGoal(){
    const nav = useNavigate()

    const createTheGoal = e => {
        e.preventDefault()
        let add = {
            title: e.target.title.value,
            description: e.target.description.value,
            completeBy: e.target.completeBy.value,
            completed: false}
        createGoal(add)
        nav('/')
    }
    return(
        <div className="form"> 
            <h3> Create a New Goal </h3>
            <form onSubmit={createTheGoal}>
                Title:  <input type='text' name='title' /> <br/> 
                Description: <textarea name='description' cols='20' rows='3' /> <br/>
                Complete By: <input type='date' name='completeBy' /> <br/>
                Completed: <input type='checkbox' name='completed' /> <br/>
                <input type='submit' value='Create New Goal' /> 
            </form>
        </div>
    )
}