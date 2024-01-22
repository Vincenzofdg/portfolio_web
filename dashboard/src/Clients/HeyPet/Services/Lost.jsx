import api from "./api";

const URL = '/missing-animals'

export const list = async (token) => {  
  try {
    const { data } = await api.get(
      URL,
      {
        headers: { 'Authorization': token }
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  list
}