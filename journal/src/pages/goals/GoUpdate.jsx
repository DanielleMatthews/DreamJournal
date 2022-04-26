import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { oneGoal, updateGoal } from "../../services/getGoals";

export default function UpdateGoal(){
    const { id } = useParams()
    const nav = useNavigate()
    const [goal, setGoal] = useState({})

    useEffect(()=> {
        oneGoal(id)
        .then(res=> setGoal(res.data))
    }, [])

    const updateTheGoal = e => {
        e.preventDefault()
        const updated = {
            title: e.target.title.value,
            description: e.target.description.value,
            completeBy: e.target.completeBy.value,
            completed: e.target.completed.checked}
        updateGoal(id, updated)
        nav(`/goal/${id}`)
    }
    return(
        <div>
            <form onSubmit={updateTheGoal}>
            Title:  <input type='text' name='title' defaultValue={goal.title}/> <br/>
                Description: <input type='text' name='description' defaultValue={goal.description} /> <br/>
                Complete By: <input type='date' name='completeBy' defaultValue={goal.completeBy}/> <br/>
                Completed: <input type='checkbox' name='completed' defaultChecked={goal.completed}/> <br/>
                <input type='submit' value='Update Goal' /> 
            </form>
        </div>
    )
}