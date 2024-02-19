import { useContext, useEffect, useState } from "react";
import { Global } from "../../../../Context";

import { list } from "../../Services/Adoption";

import Loader from "../../../../Components/Loader";
import Status from "../Status";
import AnimalCard from "../AnimalCard";

import "../../Style/Adoption.css";

function Adoption() {
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

  return !!load ? (
    <Loader />
  ) : (
    <div className="c-adoption-page">
      <div className="c-adoption-menu">
        <Status text={"Aceitos"} value={"accepted"} list={pendingAnimal} state={{cur: type, action: setType}} />
        <Status text={"Pendentes"} value={"pending"} list={pendingAnimal} state={{cur: type, action: setType}} />
      </div>

      {
        type === "accepted" ? (
          <div className="c-adoption-list">
            { acceptedAnimal.map((animal, i) => <AnimalCard key={`accepted-adoption-${i}`} data={animal} i={i}/>) }
          </div>
        ) : (
          <div className="c-adoption-list">
            {
              pendingAnimal.length === 0 ? (
                <p style={{color: "black"}}>Sem Solicitações</p>
              ) : (
                pendingAnimal.map((animal, i) => <AnimalCard key={`pending-adoption-${i}`} data={animal} i={i}/>)
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default Adoption;