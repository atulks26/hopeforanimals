import React from "react";
import Img from "./Img";

const Hero = () => {
    return (
        <div className="w-screen overflow-hidden">
            <Img
                sizes="100vw"
                src="images/desktop-cut.webp"
                alt="Banner desktop"
                width={1920}
                height={720}
                fetchPriority="high"
                className="hidden md:block w-full h-auto"
            />
            <img
                src="images/mobile-cut.webp"
                alt="Banner mobile"
                width={480}
                height={720}
                fetchPriority="high"
                className="block md:hidden w-full h-auto"
            />
        </div>
    );
};

export default Hero;
