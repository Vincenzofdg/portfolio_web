import "../../Style/InputQuestion.css"

function InputQuestionAdded({number}) {
    return (
        <div className="c-search-question-container">
            <label>
                added
                <input
                    type="text"
                    // value={nome}
                    // onChange={(event) => setNome(event.target.value)}
                />
            </label>
        </div>
    )
}

export default InputQuestionAdded;