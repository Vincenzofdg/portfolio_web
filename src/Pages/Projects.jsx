import Header from "../Components/Header";
import { useContext } from "react";
import { Global } from "../Context";

function Projects() {
  const { toggle } = useContext(Global);

  return !toggle ? (
    <div className="page">
      <Header />
      <h1>PROJECTS</h1>
    </div>
  ) : (
    <Header />
  )
}

export default Projects;