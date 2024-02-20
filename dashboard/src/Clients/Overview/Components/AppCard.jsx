import { useEffect, useState } from "react";

import "../Style/AppCard.css";

import { publish } from "../../../Service/Main/Products";

function AppCard({data, token}) {
    const { name, image, online, id } = data;
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        setIsOnline(online === 1)
    }, [])

    const handleClick = async () => {
        await publish(!isOnline, id, token);
        setIsOnline(!isOnline)
    }

    return (
        <div className="c-appcard-card-container">
            <div className="c-appcard-card">
                <div className="c-appcard-card-info">
                    <img id="app-icon" src={image} alt="App Icon" />
                    <p style={{color: "black"}}>{name}</p>
                </div>
                <div className="c-appcard-card-status">
                    <div className="c-appcard-card-switch" onClick={handleClick}>
                        <div id="c-appcard-switch" style={{backgroundColor: isOnline ? "rgb(223, 226, 229)" : "red"}}/>
                        <div id="c-appcard-switch" style={{backgroundColor: isOnline ? "green" : "rgb(223, 226, 229)"}}/>
                    </div>
                    <p style={{color: "black"}}>App is {isOnline ? "online" : "offline"}</p>
                </div>
            </div>
        </div>
    )
}

export default AppCard;