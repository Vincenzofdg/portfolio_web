import api from "./api";

const ENDPOINT = '/search'

export default async (obj, token) => {

  const indexType = (list) => {
    const newList = list.reduce((acc, cur) => {
      const check = cur.type === "text" ? 1 : (cur.type === "select_num" ? 2 : 3);
      const currentObj = { ...cur, type: check };

      acc.push(currentObj);

      return acc;
    }, []);

    return newList
  };

  const objFormated = {
    client: {
      clientId: obj["Cliente"].value.clientId,
      meta: obj["Cliente"].value.meta,
      qtdUsers: obj["Cliente"].value.qtdUsers,
      total: obj["Cliente"].value.total
    },
    intro: indexType(obj["Introdução"].value),
    questions: indexType(obj["Perguntas"].value),
  }


  try {
    const { data } = await api.post( ENDPOINT, objFormated, { headers: { 'Authorization': token }});
    return data;
  } catch (error) {
    console.error(error);
  }
};
