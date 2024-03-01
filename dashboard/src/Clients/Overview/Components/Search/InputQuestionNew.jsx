import { useState, useEffect } from "react";

import "../../Style/InputQuestion.css"

function InputQuestionNew({addToState, number}) {
    const [selected, setSelected] = useState("text");

    useEffect(() => {
        addToState(p => ({id: number, type: "text", answer: "", question: ""}))
    }, [])

    const handleClick = (value) => {
        setSelected(value);
        addToState(p => ({ ...p, type: value, answer: "" }));
    };

    return (
        <div className="c-search-question-container">
            <textarea
                placeholder="pergunta"
                className="c-search-question-question"
                type="text"
                rows={7}
                style={{ resize: 'none' }}
                onChange={({target: { value }}) => addToState(p => ({ ...p, question: value }))}
            />
            <div className="c-search-question-answer">
                <div className="c-search-question-answer-container">
                    <p style={{backgroundColor: selected === "text" && "#EADDCA"}} id="c-search-question-answer-text" onClick={() => handleClick('text')}>Texto</p>
                    <p style={{backgroundColor: selected === "select_num" && "#EADDCA"}} id="c-search-question-answer-text" onClick={() => handleClick('select_num')}>Grau 01 a 05</p>
                    <p style={{backgroundColor: selected === "select_text" && "#EADDCA"}} id="c-search-question-answer-text" onClick={() => handleClick('select_text')}>Seleção</p>
                </div>
                { selected === "select_text" && (
                    <textarea
                        className="c-search-question-answer-selection"
                        placeholder="palavra e vircula junto (calmo,respeitoso,dedicado)"
                        onChange={({target: { value }}) => addToState(p => ({ ...p, answer: value }))}
                        style={{ resize: 'none' }}
                    />
                )}
            </div>
        </div>
    )
}

export default InputQuestionNew;