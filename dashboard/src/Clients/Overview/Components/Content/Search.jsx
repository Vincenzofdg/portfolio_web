import { useState, useEffect, useContext } from "react";
import { Global, Pesquisa } from "../../../../Context";

import LockImg from "../../Assets/lock.png";
import CheckImg from "../../Assets/check.png";
import Loader from "../../../../Components/Loader";
import QuestionBlock from "../Search";

import "../../Style/Search.css";

import NewSearch from "../../../../Service/Pesquisa/NewSearch";

function Search() {
  const { newSearch, setNewSearch } = useContext(Pesquisa);
  const { requestToken } = useContext(Global);
  const [selected, setSelected] = useState('');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function Jobs() {
      setLoad(false);
    }
    Jobs();
  }, []);

  const blocks = (text) => {
    const blockRuleLiberation = {
      Cliente: !(newSearch.Cliente.status || newSearch.Introdução.status || newSearch.Perguntas.status),
      Introdução: newSearch.Cliente.status && !newSearch.Introdução.status && !newSearch.Perguntas.status,
      Perguntas: newSearch.Cliente.status && newSearch.Introdução.status && !newSearch.Perguntas.status,
    };
    
    const handleClick = ({target}) => {
      if (!blockRuleLiberation[text]) return;
      const valueHTML = target[Object.keys(target)[1]].children;
      if (selected === valueHTML) {
        setSelected('');
        return;
      }
      setSelected(valueHTML);
      return;
    };
    
    return (
      <div
        className="c-search-container"
        style={{
          backgroundColor: blockRuleLiberation[text] ? "#f5f5f5" : (!!newSearch[text].status ? "#50C878" : "#899499"),
          cursor: blockRuleLiberation[text] ? "pointer" : "default"
        }}
      >
        <div className="c-search-title"  onClick={handleClick}>
          <h2 className="c-search-container-text" style={{width: blockRuleLiberation[text] && "100%"}}>{text}</h2>
          { blockRuleLiberation[text] ? null :(
            !!newSearch[text].status ? (
              <img className="c-search-icon" src={CheckImg} alt="Icon Status Checked" />
            ) : (
              <img className="c-search-icon" src={LockImg} alt="Icon Status Locked" />
            )
          )
          }
        </div>
        { selected === text && <QuestionBlock current={setSelected} type={text} /> }
      </div>
    )
  }

  return !!load ? (
    <Loader />
  ) : (
    !newSearch['Perguntas'].status ? (
      <div className="c-search-page">
        { blocks("Cliente") }
        { blocks("Introdução") }
        { blocks("Perguntas") }
      </div>
    ) : (
      <div className="c-search-container">
        <div>
          <h2 className="c-search-container-text" style={{textAlign: "center"}}>Confirmação da Pesquisa</h2>
          {/* Icone de download */}
        </div>
        <div className="c-search-confirm-client-container">
          <p className="c-search-confirm-client-text">Número de identificação do Cliente: {newSearch["Cliente"].value.clientId}</p>
          <p className="c-search-confirm-client-text">Número total de entrevistas: {newSearch["Cliente"].value.total}</p>
          <p className="c-search-confirm-client-text">Quantidade de entrevistadores: {newSearch["Cliente"].value.qtdUsers}</p>
          <p className="c-search-confirm-client-text">Média de entrevistas por entrevistador: {newSearch["Cliente"].value.meta}</p>
        </div>
        <p style={{color: "black", padding: "20px", fontSize: "20px", fontStyle: "italic"}}>Perguntas</p>
        <div className="c-search-confirm-client-intro">
          <div className="c-search-confirm-intro-container">
            <p className="c-search-confirm-client-text" style={{width: "5%", fontWeight: "700"}}>N</p>
            <p className="c-search-confirm-client-text" style={{width: "50%", fontWeight: "700"}}>Pergunta</p>
            <p className="c-search-confirm-client-text" style={{width: "15%", fontWeight: "700"}}>Tipo</p>
          </div>
          {
            newSearch['Introdução'].value.map((e, i) => (
              <div className="c-search-confirm-intro-container">
                <p className="c-search-confirm-client-text" style={{width: "5%"}}>{ i >= 9 ? i + 1 : '0' + (i + 1)}</p>
                <p className="c-search-confirm-client-text" style={{width: "50%"}}>{e.question}</p>
                <p className="c-search-confirm-client-text" style={{width: "15%"}}>{e.type}</p>
              </div>
            ))
          }
          <hr />  
          {
            newSearch['Perguntas'].value.map((e, i) => (
              <div className="c-search-confirm-intro-container">
                <p className="c-search-confirm-client-text" style={{width: "5%"}}>{ i >= 9 ? i + 1 : '0' + (i + 1)}</p>
                <p className="c-search-confirm-client-text" style={{width: "50%"}}>{e.question}</p>
                <p className="c-search-confirm-client-text" style={{width: "15%"}}>{e.type}</p>
              </div>
            ))
          }
        </div>
        
        <button
            className="c-search-block-submit"
            type="submit"
            onClick={async () => {
              await NewSearch(newSearch, requestToken);
              return
            }}
        >
            Confirmar
        </button>

        <button
            className="c-search-block-submit"
            type="submit"
            onClick={() => setNewSearch({
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
            })}
        >
            Deletar
        </button>
      </div>
    )
  )
}

export default Search;