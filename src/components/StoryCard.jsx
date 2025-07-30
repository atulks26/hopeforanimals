import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const cards = [
    { id: 1, img: "images/unnamed.jpg", content: "Lorem ipsum 1..." },
    { id: 2, img: "images/unnamed.jpg", content: "Lorem ipsum 2..." },
    { id: 3, img: "images/unnamed.jpg", content: "Lorem ipsum 3..." },
    { id: 4, img: "images/unnamed.jpg", content: "Lorem ipsum 4..." },
    { id: 5, img: "images/unnamed.jpg", content: "Lorem ipsum 5..." },
    { id: 6, img: "images/unnamed.jpg", content: "Lorem ipsum 6..." },
];

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
    }),
};

export default function Cards() {
    const isMediumScreen = useMediaQuery({
        query: "(min-width: 720px) and (max-width: 1023px)",
    });
    const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
    const [[index, direction], setIndex] = useState([0, 0]);
    const timeoutRef = useRef(null);

    const paginate = (newDirection) => {
        setIndex(([prev]) => {
            let newIndex = (prev + newDirection + cards.length) % cards.length;
            return [newIndex, newDirection];
        });
    };

    useEffect(() => {
        clearInterval(timeoutRef.current);
        timeoutRef.current = setInterval(
            () => paginate(1),
            isLargeScreen ? 7000 : 5000
        );
        return () => clearInterval(timeoutRef.current);
    }, [index, isLargeScreen]);

    const handleClick = (dir) => {
        clearInterval(timeoutRef.current);
        paginate(dir);
    };

    if (isMediumScreen || isLargeScreen) {
        const numCardsToShow = isLargeScreen ? 5 : 3;

        const getOffsetIndex = (offset) =>
            (index + offset + cards.length) % cards.length;

        const getCardStyle = (offset) => {
            const base = "absolute transition-all duration-500 ease-in-out";
            if (numCardsToShow === 5) {
                const positions = {
                    "-2": "left-0 opacity-10 scale-90 z-0",
                    "-1": "left-[10%] opacity-40 scale-95 z-10",
                    0: "left-[35%] opacity-100 scale-100 z-20 border-orange-300 border-4",
                    1: "left-[60%] opacity-40 scale-95 z-10",
                    2: "left-[80%] opacity-10 scale-90 z-0",
                };
                return `${base} ${positions[offset] || "hidden"}`;
            } else {
                const positions = {
                    "-1": "left-[5%] opacity-50 scale-95 z-10",
                    0: "left-[30%] opacity-100 scale-100 z-20 border-orange-300 border-4",
                    1: "left-[55%] opacity-50 scale-95 z-10",
                };
                return `${base} ${positions[offset] || "hidden"}`;
            }
        };

        return (
            <div className="w-full relative my-12 h-[28rem] overflow-hidden">
                <div className="relative w-full h-full">
                    {[...Array(numCardsToShow)].map((_, i) => {
                        const offset = i - Math.floor(numCardsToShow / 2);
                        const card = cards[getOffsetIndex(offset)];
                        return (
                            <motion.div
                                key={card.id}
                                className={`${getCardStyle(
                                    offset
                                )} rounded-2xl`}
                                style={{
                                    width: isLargeScreen ? "30%" : "40%",
                                    height: "100%",
                                    backgroundImage: `url(${card.img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-[1rem]" />
                                <div className="absolute bottom-0 p-4 text-white text-sm z-10">
                                    {card.content}
                                </div>
                            </motion.div>
                        );
                    })}
                    <button
                        onClick={() => handleClick(-1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full z-30 hover:bg-black"
                    >
                        ◀
                    </button>
                    <button
                        onClick={() => handleClick(1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full z-30 hover:bg-black"
                    >
                        ▶
                    </button>
                </div>
            </div>
        );
    }

    // Mobile layout
    return (
        <div className="w-full mx-auto my-10 flex flex-col items-center relative px-4">
            <div className="relative w-full max-w-lg h-[24rem] overflow-hidden">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={cards[index].id}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-cover bg-center text-white border-4 border-orange-300"
                        style={{ backgroundImage: `url(${cards[index].img})` }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, info) => {
                            if (info.offset.x < -100) {
                                handleClick(1);
                            } else if (info.offset.x > 100) {
                                handleClick(-1);
                            }
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-0 p-4 z-10">
                            <p className="text-sm">{cards[index].content}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
