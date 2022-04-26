import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteGoal, oneGoal } from "../../services/getGoals";

export default function ShowGoals(){
    const nav = useNavigate()
    const { id } = useParams()
    const [goal, setGoal] = useState({})

    useEffect(()=>{
        oneGoal(id)
        .then(res => setGoal(res.data))
    }, [])

    const deleteTheGoal = () => {
        deleteGoal(id)
        nav('/')
    }

    return(
        <div>
            <h3> {goal.title} </h3>
            <p> {goal.description} </p>
            <button onClick={()=> {nav(`/goal/${id}/update`)}}> Edit </button>
            <button onClick={deleteTheGoal}> Delete Goal </button>
        </div>
    )
}