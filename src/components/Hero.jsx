import React from "react";

const Hero = () => {
    return (
        <div className="w-screen overflow-hidden">
            <img
                src="images/desktop-cut.png"
                alt="Banner desktop"
                className="hidden md:block w-full h-auto object-cover"
            />
            <img
                src="images/mobile-cut.png"
                alt="Banner mobile"
                className="block md:hidden w-full h-auto object-cover"
            />
        </div>
    );
};

export default Hero;
