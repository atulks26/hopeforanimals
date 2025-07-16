import React from "react";
import Marquee from "react-fast-marquee";

const cards = [
    {
        id: 1,
        img: "images/unnamed.jpg",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi mollitia, incidunt dignissimos commodi magnam, aliquid totam atque, esse ullam assumenda consequuntur tempora voluptates ex eum voluptatum culpa sequi autem.",
    },
    {
        id: 2,
        img: "images/unnamed.jpg",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi mollitia, incidunt dignissimos commodi magnam, aliquid totam atque, esse ullam assumenda consequuntur tempora voluptates ex eum voluptatum culpa sequi autem.",
    },
    {
        id: 3,
        img: "images/unnamed.jpg",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi mollitia, incidunt dignissimos commodi magnam, aliquid totam atque, esse ullam assumenda consequuntur tempora voluptates ex eum voluptatum culpa sequi autem.",
    },
    {
        id: 4,
        img: "images/unnamed.jpg",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi mollitia, incidunt dignissimos commodi magnam, aliquid totam atque, esse ullam assumenda consequuntur tempora voluptates ex eum voluptatum culpa sequi autem.",
    },
    {
        id: 5,
        img: "images/unnamed.jpg",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi mollitia, incidunt dignissimos commodi magnam, aliquid totam atque, esse ullam assumenda consequuntur tempora voluptates ex eum voluptatum culpa sequi autem.",
    },
    {
        id: 6,
        img: "images/unnamed.jpg",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi mollitia, incidunt dignissimos commodi magnam, aliquid totam atque, esse ullam assumenda consequuntur tempora voluptates ex eum voluptatum culpa sequi autem.",
    },
];

export default function Cards() {
    const track = [...cards, ...cards, ...cards];

    return (
        <div className="w-[100%] mx-auto my-10 overflow-hidden">
            <Marquee speed={20} gradient={false} pauseOnHover={true}>
                {track.map((card, i) => (
                    <div
                        key={i}
                        className={`
                            flex-none w-80 h-[24rem] mx-4 rounded-[0.8rem] 
                            relative overflow-hidden shadow-md text-white
                        `}
                        style={{
                            backgroundImage: `url(${card.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                        <div className="absolute bottom-0 p-4 z-10">
                            <p className="text-sm">{card.content}</p>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
