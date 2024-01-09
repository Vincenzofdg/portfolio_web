import { useContext } from "react";
import { Global } from "../Context";

import Header from "../Components/Header";
import Introduction from "../Components/Introduction";
import Technologies from "../Components/Technologies";
import About from "../Components/About";

function Home() {
  const { toggle } = useContext(Global);
  
  return !toggle ? (
    <>
      <Header />
      <Introduction />
      <Technologies />
      <About />
    </>
  ) : (
    <Header />
  )
}

export default Home;