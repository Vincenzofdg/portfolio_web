import api from "./api";

const URL = '/login'

export default async (obj) => {
  console.log(obj)
  const { data } = await api.post(URL, {
    email: obj.username,
    password: obj.password
  });

  return data.token
};