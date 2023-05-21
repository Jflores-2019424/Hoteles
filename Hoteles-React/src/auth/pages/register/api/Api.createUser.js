import axios from "axios";
const URL = "http://localhost:3011/api/";

export const createUser = async (name, lastName, birthday, contry, telefono, lenguage, email, password) => {
  try {
    const users = {
      name,
      lastName,
      birthday,
      contry,
      telefono,
      lenguage,
      email,
      password,
    };

    const response = await axios.post(`${URL}create-user`, users);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

