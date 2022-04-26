import axios from 'axios'

//ALL
export function goalList(){
    return axios.get('http://localhost:3001/goals')
}
//ONE
export function oneGoal(id){
    return axios.get(`http://localhost:3001/goals/${id}`)
}
//DELETE
export function deleteGoal(id){
    return axios.delete(`http://localhost:3001/goals/${id}`)
}
//CREATE
export function createGoal(add){
    console.log(add)
    return axios.post('http://localhost:3001/goals', add)
}
//UPDATE
export function updateGoal(id, updatedGoal){
    return axios.put(`http://localhost:3001/goals/${id}`, updatedGoal)
}