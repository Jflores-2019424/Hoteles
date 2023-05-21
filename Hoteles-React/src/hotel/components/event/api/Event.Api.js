import axios from "axios"
const URL = "http://localhost:3011/api/"

export const listEvent = async()=>{
    try{
        const {data:{events}} = await  axios.get(`${URL}list-events`)
        return events

    }catch(e){
        throw new Error(e)
    }
}