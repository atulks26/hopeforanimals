import React from "react";

const Hero = () => {
    return (
        <div className="w-screen overflow-hidden">
            <img
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
