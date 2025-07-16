import React from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Gallery from "../pages/Gallery";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            {/* <Gallery /> */}
            {/* Footer */}
        </div>
    );
};

export default Home;
