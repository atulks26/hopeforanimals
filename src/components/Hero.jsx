import React from "react";

const Hero = () => {
    return (
        <div className="w-screen overflow-hidden">
            {/* Desktop banner */}
            <img
                src="images/banner-2.png"
                alt="Banner desktop"
                className="hidden md:block w-full h-auto object-cover"
            />
            {/* Mobile banner */}
            <img
                src="images/bg-mobile-2.png"
                alt="Banner mobile"
                className="block md:hidden w-full h-auto object-cover"
            />
        </div>
    );
};

export default Hero;
