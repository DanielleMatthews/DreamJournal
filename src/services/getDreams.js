import axios from "axios"

//ALL
export function dreamList(){
    return axios.get('https://dreamjournalapi.herokuapp.com/dreams')
}
//ONE
export function oneDream(id){
    return axios.get(`https://dreamjournalapi.herokuapp.com/dreams/${id}`)
}
//DELETE
export function deleteDream(id){
    return axios.delete(`https://dreamjournalapi.herokuapp.com/dreams/${id}`)
}
//CREATE
export function createDream(add){
    return axios.post('https://dreamjournalapi.herokuapp.com/dreams', add)
}
//UPDATE
export function updateDream(id, updatedDream){
    return axios.put(`https://dreamjournalapi.herokuapp.com/dreams/${id}`, updatedDream)
}



