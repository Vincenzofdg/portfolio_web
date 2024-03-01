import { useState, useEffect, useContext } from "react";
import { Pesquisa } from "../../../../Context";

import LockImg from "../../Assets/lock.png";
import CheckImg from "../../Assets/check.png";
import Loader from "../../../../Components/Loader";
import QuestionBlock from "../Search";

import "../../Style/Search.css";

function Search() {
  const { newSearch } = useContext(Pesquisa);
  const [selected, setSelected] = useState('');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function Jobs() {
      setLoad(false);
    }
    Jobs();
  }, [])

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
    <div className="c-search-page">
      { blocks("Cliente") }
      { blocks("Introdução") }
      { blocks("Perguntas") }
    </div>
  )
}

export default Search;