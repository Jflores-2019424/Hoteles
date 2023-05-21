import axios from "axios";

const URL = "http://localhost:3000/api/";

export const getRoomById = async (id) => {
  try {
    const {data:{rooms}} = await axios.get(`${URL}search-room/${id}`);
    return rooms;
  } catch (error) {
    throw new Error(error);
  }
};
