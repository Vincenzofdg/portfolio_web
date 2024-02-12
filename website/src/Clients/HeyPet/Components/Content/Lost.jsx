import { useContext, useEffect, useState } from "react";
import { Global } from "../../../../Context";

import { server } from "../../Services/api";
import Loader from "../../../../Components/Loader";
import { list } from "../../Services/Lost";
import "../../Style/Adoption.css";

function Lost() {
  const [type, setType] = useState("accepted");
  const [load, setLoad] = useState(true);

  const [acceptedAnimal, setAcceptedAnimal] = useState([]);
  const [pendingAnimal, setPendingAnimal] = useState([]);
  const { requestToken } = useContext(Global);

  useEffect(() => {
    async function Request() {
      const data = await list(requestToken);
      const accepted = data.filter(i => !i.new);
      const pending = data.filter(i => i.new);

      setAcceptedAnimal(accepted);
      setPendingAnimal(pending);
      setLoad(false);
    }
    Request()
  }, [])

  const menuIndex = (value, text) => {
    return (
      <div 
        style={{backgroundColor: type === value && "rgb(179, 194, 208)"}}
        className="c-adoption-text"
        onClick={() => setType(value)}
      >
        <p id="c-adoption-text">{text}</p>
        {
          (value === "pending" && pendingAnimal.length > 0) && (
            <div style={{backgroundColor: "red", width: "8px", height: "8px", borderRadius: "50px", marginLeft: "5px"}}/>
          )
        }
      </div>
    )
  }

  const card = (data, index) => {
    const { animal, picture, name, region, user, description } = data;
    return (
      <div key={`${animal}-${index}`} className="c-adoption-card">
        <img id="c-adoption-img" src={server + "/" + picture} alt="" srcset="" />
        <div className="c-adoption-card-content">
          <p id="c-adoption-card-text">Nome: {name}</p>
          <p id="c-adoption-card-text">Postado por <i>{user}</i> em <i>{region}</i></p>
          <p id="c-adoption-card-description">{description}</p>
        </div>
      </div>
    )
  }

  return !!load ? (
    <Loader />
  ) : (
    <div className="c-adoption-page">
      <div className="c-adoption-menu">
        { menuIndex("accepted", "Aceitos") }
        { menuIndex("pending", "Pendentes") }
      </div>

      {
        type === "accepted" ? (
          <div className="c-adoption-list">
            { acceptedAnimal.map((animal, i) => card(animal, i)) }
          </div>
        ) : (
          <div className="c-adoption-list">
            {
              pendingAnimal.length === 0 ? (
                <p style={{color: "black"}}>Sem Solicitações</p>
              ) : (
                pendingAnimal.map((animal, i) => card(animal, i))
              )
            }
          </div>
        )
      }

    </div>
  )
}

export default Lost;