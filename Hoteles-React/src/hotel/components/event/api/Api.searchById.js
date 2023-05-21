import axios from "axios";

const URL = "http://localhost:3011/api/";

export const getEventById = async (id,name) => {
  try {
    const {data:{events}} = await axios.get(`${URL}search/${id}`);
    return events,{name};
  } catch (error) {
    throw new Error(error);
  }
};
