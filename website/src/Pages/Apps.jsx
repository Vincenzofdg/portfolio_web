import Header from "../Components/Header";
import React, { useContext } from "react";
import { Global } from "../Context";

import Project from "../Components/Project";
import Divider from "../Components/Divider";

import Data from "../Data/Apps";

function Apps() {
  const { toggle } = useContext(Global);

  return !toggle ? (
    <div className="page">
      <Header />
      {
        Data.map((p, i) => {
          if (Data.length !== i + 1 ) return (
            <React.Fragment key={`show-case-${i}`}>
              <Project data={p} />
              <Divider />
            </React.Fragment>

          )
          return <Project key={`show-case-${i}`} data={p} />
        })
      }
    </div>
  ) : (
    <Header />
  )
}

export default Apps;