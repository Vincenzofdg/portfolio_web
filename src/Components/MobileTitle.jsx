import "../Style/MobileTitle.css";

function MobileTitle({ text }) {
    return (
        <div className="mobile-title-container">
            <h1 id="mobile-title">{text}</h1>
        </div>
    );
}

export default MobileTitle;
