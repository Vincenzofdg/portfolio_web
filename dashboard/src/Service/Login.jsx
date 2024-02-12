import axios from "axios";
import url from "./api";

import RequestError from "../Hooks/RequestError";

export const requestLogin = async (param) => {
  try {
    const { data } = await axios.post(url + "/login", param);
    console.log(data, data.data)
    return data;
  } catch (error) {
    const errorResponse = RequestError(error);
    if (errorResponse === undefined) {
      const msg = "Invalid username/password";
      return msg;
    }
    return errorResponse;
  }
};