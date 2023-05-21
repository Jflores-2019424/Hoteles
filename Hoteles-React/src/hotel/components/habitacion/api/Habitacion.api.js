import axios from "axios"
const URL = "http://localhost:3000/api/"

export const listRoom = async()=>{
    try{
        const {data:{rooms}} = await  axios.get(`${URL}read-room`)
        return rooms

    }catch(e){
        throw new Error(e)
    }
}