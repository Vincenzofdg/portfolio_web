import "../Style/AppCard.css";

function AppCard({data}) {
    const { name, image, online } = data;
    return (
        <div className="c-appcard-card-container">
            <div className="c-appcard-card">
                <div className="c-appcard-card-info">
                    <img id="app-icon" src={image} alt="App Icon" />
                    <p style={{color: "black"}}>{name}</p>
                </div>
                <div className="c-appcard-card-status">
                    <div className="c-appcard-card-switch">
                        <div id="c-appcard-switch" style={{backgroundColor: !!online ? "rgb(223, 226, 229)" : "red"}}/>
                        <div id="c-appcard-switch" style={{backgroundColor: !!online ? "green" : "rgb(223, 226, 229)"}}/>
                    </div>
                    <p style={{color: "black"}}>App is {!!online ? "online" : "offline"}</p>
                </div>
            </div>
        </div>
    )
}

export default AppCard;