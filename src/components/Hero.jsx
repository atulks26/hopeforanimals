import React from "react";
import Img from "./Img";

const Hero = () => {
    return (
        <div className="w-screen overflow-hidden">
            <Img
                sizes="100vw"
                src="images/desktop-cut.webp"
                alt="Banner desktop"
                className="hidden md:block w-full h-auto object-cover"
            />
            <img
                src="images/mobile-cut.webp"
                alt="Banner mobile"
                className="block md:hidden w-full h-auto object-cover"
            />
        </div>
    );
};

export default Hero;
