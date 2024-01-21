import Header from "../Components/Header";
import { useContext } from "react";
import { Global } from "../Context";

import Project from "../Components/Project";
import MobileTitle from "../Components/MobileTitle";

import Data from "../Data/Projects";

function Projects() {
  const { toggle } = useContext(Global);

  return !toggle ? (
    <>
      <Header />
      <MobileTitle text={"Projects"}/>
      {
        Data.map((p, i) => {
          console.log(Data.length)
          console.log(i)
          if (Data.length !== i + 1 ) return (
            <>
              <Project key={`project-${i}`} data={p} />
              <Divider />
            </>
          )
          return <Project key={`project-${i}`} data={p} />
        })
      }
    </>
  ) : (
    <Header />
  )
}

export default Projects;