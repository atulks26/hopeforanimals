// Cards.jsx
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

const bgColors = [
    "bg-red-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-pink-100",
];

export default function Cards() {
    const track = [...cards, ...cards, ...cards];

    return (
        <div className="w-[80%] mx-auto my-10 overflow-hidden">
            <Marquee speed={20} gradient={false} pauseOnHover={true}>
                {track.map((card, i) => (
                    <div
                        key={i}
                        className={`
                    flex-none w-64 mx-4 p-4 h-[24rem] rounded-[2rem]
                    ${bgColors[i % bgColors.length]}
            `}
                    >
                        <div className="h-48 rounded-[1rem] overflow-hidden shadow-md">
                            <img
                                src={card.img}
                                alt={`Card ${card.id}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="mt-2 text-sm whitespace-normal break-words overflow-hidden">
                            {card.content}
                        </p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
