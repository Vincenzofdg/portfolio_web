import { useState } from "react";
import { Pesquisa as Context } from ".";

function PesquisaState({children}) {
  const [newSearch, setNewSearch] = useState({
    Cliente: {
      status: false,
      value: {
        clientId: null,
        qtdUsers: 0,
        meta: 0,
        total: 0
      }
    },
    Introdução: {
      status: false,
      value: [],
    },
    Perguntas: {
      status: false,
      value: [],
    }
  });

  const obj = { newSearch, setNewSearch };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default PesquisaState;