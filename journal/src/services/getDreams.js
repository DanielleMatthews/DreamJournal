import axios from "axios"

//ALL
export function dreamList(){
    return axios.get('http://localhost:3001/dreams')
}
//ONE
export function oneDream(id){
    return axios.get(`http://localhost:3001/dreams/${id}`)
}
//DELETE
export function deleteDream(id){
    return axios.delete(`http://localhost:3001/dreams/${id}`)
}
//CREATE
export function createDream(add){
    return axios.post('http://localhost:3001/dreams', add)
}
//UPDATE
export function updateDream(id, updatedDream){
    return axios.put(`http://localhost:3001/dreams/${id}`, updatedDream)
}



