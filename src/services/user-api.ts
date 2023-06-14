import axios from "axios";
import { NewUserData } from "./api-types";
import { BASE_URL } from "../constants/system";

export const UserApi = {
  newUser: async (data: NewUserData) => {
    const response = await axios.post(`${BASE_URL}/users`, data);
    return response;
  },
};
