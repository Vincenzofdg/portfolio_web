import Header from "../Components/Header";
import { useContext } from "react";
import { Global } from "../Context";

// import Project from "../Components/Project";

function Projects() {
  const { toggle } = useContext(Global);

  return !toggle ? (
    <div className="page">
      <Header />
    </div>
  ) : (
    <Header />
  )
}

export default Projects;