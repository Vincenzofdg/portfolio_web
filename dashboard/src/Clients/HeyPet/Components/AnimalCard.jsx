import "../Style/AnimalCard.css";


// import { server } from "../Services/api";

function AnimalCard({data, i}) {
  const { animal, picture, name, region, user, description } = data;
  return (
    <div key={`${animal}-${i}`} className="c-animal-card">
      <img id="c-animal-img" src={"https://api.vincenzofdg.com.br/hey-pet/" + picture} alt={name + "-" + i} />
      <div className="c-animal-card-content">
        <p id="c-animal-card-text">Nome: {name}</p>
        <p id="c-animal-card-text">Postado por <i>{user}</i> em <i>{region}</i></p>
        <p id="c-animal-card-description">{description}</p>
      </div>
    </div>
  )
}

export default AnimalCard;