import Header from "../Components/Header";
import { useContext } from "react";
import { Global } from "../Context";

import Project from "../Components/Project";
import MobileTitle from "../Components/MobileTitle";

import Data from "../Data/ShowCases";

function ShowCases() {
  const { toggle } = useContext(Global);

  return !toggle ? (
    <div className="page">
      <Header />
      <MobileTitle text={"Show Cases"}/>
      {
        Data.map((p, i) => <Project key={`project-${i}`} data={p} />)
      }
    </div>
  ) : (
    <Header />
  )
}

export default ShowCases;