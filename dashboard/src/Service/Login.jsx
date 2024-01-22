import axios from "axios";
import url from "./api";

import RequestError from "../Hooks/RequestError";

export const requestLogin = async (param) => {
  // const { data } = await axios.post(url + "/login", param);

  try {
    const { data } = await axios.post(url + "/login", param);
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