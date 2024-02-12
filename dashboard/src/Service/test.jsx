import axios from "axios";

export const teste = async () => {
  const { data } = await axios.get("http://193.203.183.47:3000/login");
  console.log(data)
};