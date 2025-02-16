import { useContext } from "react";
import { Global } from "../Context";

import Header from "../Components/Header";
import Introduction from "../Components/Introduction";
import Technologies from "../Components/Technologies";
import About from "../Components/About";
import Footer from "../Components/Footer";

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
            <Footer />
        </>
    ) : (
        <Header />
    );
}

export default Home;
