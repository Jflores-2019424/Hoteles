import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3011/api/";

export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(`${URL}delete-event/${id}`);
    return response.data;
  } catch (error) {
    Swal.fire({
        icon: 'error',
        title: "Error",
        text: "no se puede borrar este evento",
        confirmButtonText: "Ok"
      });
  }
};
