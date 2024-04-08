import React, { useContext } from "react";
import Header from "../Components/Header";
import { Global } from "../Context";

import Project from "../Components/Project";
import Divider from "../Components/Divider";

import Data from "../Data/Products";

function Products() {
  const { toggle } = useContext(Global);

  return !toggle ? (
    <>
      <Header />
      {
        Data.map((p, i) => {
          if (Data.length !== i + 1 ) return (
            <React.Fragment key={`project-${i}`}>
              <Project data={p} />
              <Divider />
            </React.Fragment>
          )
          return <Project key={`project-${i}`} data={p} />
        })
      }
    </>
  ) : (
    <Header />
  )
}

export default Products;