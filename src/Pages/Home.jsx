import { useContext } from "react";
import { Global } from "../Context";

import Header from "../Components/Header";
import About from "../Components/About";
import Technologies from "../Components/Technologies";

function Home() {
  const { toggle } = useContext(Global);
  
  return !toggle ? (
    <>
      <Header />
      <About />
      <Technologies />
    </>
  ) : (
    <Header />
  )
}

export default Home;