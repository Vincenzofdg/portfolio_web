import { useContext } from "react";
import { Global } from "../Context";

import Header from "../Components/Header";
import Introduction from "../Components/Introduction";
import Technologies from "../Components/Technologies";
import About from "../Components/About";

import Email from "../Components/Email";

function Home() {
  const { toggle } = useContext(Global);
  
  return !toggle ? (
    <>
      <Header />
      <Introduction />
      <Technologies />
      <About />
      <Email />
    </>
  ) : (
    <Header />
  )
}

export default Home;