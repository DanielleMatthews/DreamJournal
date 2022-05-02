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
    const date = goal.completeBy && goal.completeBy.slice(0,10)
    
    console.log(date)
    return(
        <div  className="show">
            <h3> {goal.title} </h3>
            <button onClick={()=> {nav(`/goal/${id}/update`)}}> Edit </button> &nbsp; &nbsp; &nbsp;
            <button onClick={deleteTheGoal}> Delete Goal </button> <br/> <br/> <br/> 
            <div className="description">
                <p> {goal.description} </p>
                <p> {goal.completed ? 'Congratulations! You have completed this goal!' : 'Keep working towards this goal!'} </p>
                <p> Complete Goal By: {date}  </p>
            </div>
        </div>
    )
}