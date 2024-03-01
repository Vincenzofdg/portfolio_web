import "../../Style/SubmitBlock.css";

function SubmitBlock({action}) {
    return (
        <button
            className="c-search-block-submit"
            type="submit"
            onClick={action}
        >
            Salvar Bloco
        </button>
    )
}

export default SubmitBlock;