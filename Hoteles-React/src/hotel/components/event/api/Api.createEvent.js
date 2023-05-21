import axios from "axios"
import Swal from "sweetalert2"

const URL = "http://localhost:3011/api/"
export const createEvent = async(name, guests,date,nameType,descriptionType)=>{
    try{
        const events = {
            name,
            guests,
            date,
            nameType
            ,descriptionType
        }
        const response = await axios.post(`${URL}create-event`, events)
        return response.data
    }catch(e){
        Swal.fire({
            icon: 'error',
            title: "Error",
            text: "al parecer esa fecha ya esta agendada",
            confirmButtonText: "Ok"
          });
    }
}