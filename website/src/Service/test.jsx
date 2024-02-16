import api from "./api";

const URL = '/login'

export const logIn = async () => {
    const format = {
        email: "vincenzofdg.dev@icloud.com",
        password: "b9t5qrpj5"
    }
  
    const { data } = await api.post(URL, format);
  
    if (!data.token) return { token: false };
  
    return { token: data.token, type: data.type }
};