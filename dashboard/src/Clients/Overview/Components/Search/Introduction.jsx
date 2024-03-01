import { useState, useContext } from "react";
import { Pesquisa } from "../../../../Context";

import AddedQuestion from "./InputQuestionAdded";
import NewQuestion from "./InputQuestionNew";
import SubmitBlock from "./SubmitBlock";
import "../../Style/BlockSearch.css";

function Introduction({current}) {
    const { setNewSearch } = useContext(Pesquisa);
    const [questions, setQuestions] = useState(['']);
    const [newQuestion, setNewQuestion] = useState({});
    const [count, setCount] = useState(1);
    const limit = 10;

    const handleSubmintBlock = () => {
        const completeList = [...questions, newQuestion];
        completeList.shift();
        
        const newObj = {
            status: true,
            value: completeList
        };
        setNewSearch(p => ({
            ...p,
            Introdução: newObj
        }));
        current("Perguntas");
    };

    const handleClickPus = () => {
        setQuestions(p => ([...p, newQuestion]));
        setCount(count < limit ? count + 1 : count);
    }

    return (
        <div className="c-search-block-page">
            <p className="c-search-block-sub">{count} de {limit} perguntas</p>
            <div className="c-search-block-container">                
                {
                    questions.map((_e, i) => {
                        if (i === 0 && questions.length - 1 === 0) return <NewQuestion key={"q-" + i} addToState={setNewQuestion} number={count} />
                        if (i === questions.length - 1 ) return <NewQuestion key={"q-" + i} addToState={setNewQuestion} number={count} />
                        return <AddedQuestion key={"q-" + i} number={count} />
                    }) 
                }
                { count < limit && (
                    <button onClick={handleClickPus} className="c-search-block-new">
                        +
                    </button>
                )}
            </div>
            <SubmitBlock action={handleSubmintBlock} />
        </div>
    )
}

export default Introduction;