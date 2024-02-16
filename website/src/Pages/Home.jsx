import { useContext, useEffect } from "react";
import { Global } from "../Context";

import Header from "../Components/Header";
import Introduction from "../Components/Introduction";
import Technologies from "../Components/Technologies";
import About from "../Components/About";
import Footer from "../Components/Footer";

import Email from "../Components/Email";


import { logIn } from "../Service/test";

function Home() {
  const { toggle } = useContext(Global);

  useEffect(() => {
    async function Jobs() {
      const test = await logIn()
      console.log("teste")
      console.log(test)
    }

    Jobs()
  }, [])
  
  return !toggle ? (
    <>
      <Header />
      <Introduction />
      <Technologies />
      <About />
      <Email />
      <Footer />
    </>
  ) : (
    <Header />
  )
}

export default Home;