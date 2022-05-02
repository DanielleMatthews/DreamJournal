import axios from 'axios'

//ALL
export function goalList(){
    return axios.get('https://dreamjournalapi.herokuapp.com/goals')
}
//ONE
export function oneGoal(id){
    return axios.get(`https://dreamjournalapi.herokuapp.com/goals/${id}`)
}
//DELETE
export function deleteGoal(id){
    return axios.delete(`https://dreamjournalapi.herokuapp.com/goals/${id}`)
}
//CREATE
export function createGoal(add){
    console.log(add)
    return axios.post('https://dreamjournalapi.herokuapp.com/goals', add)
}
//UPDATE
export function updateGoal(id, updatedGoal){
    return axios.put(`https://dreamjournalapi.herokuapp.com/goals/${id}`, updatedGoal)
}