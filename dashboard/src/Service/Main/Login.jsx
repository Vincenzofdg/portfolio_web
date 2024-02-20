import api from "./api";

import RequestError from "../../Hooks/RequestError";

const ENDPOINT = "/login";

export const requestLogin = async (param) => {
  try {
    const { data } = await api.post(ENDPOINT, param);
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