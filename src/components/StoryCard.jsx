import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdoptionCamp from "./cards/AdoptionCamp";
import TreePlantation from "./cards/TreePlantation";
import GuptKashi from "./cards/GuptKashi";
import WaterBowl from "./cards/WaterBowl";

const cards = [
    { id: "adoption", component: <AdoptionCamp /> },
    { id: "tree", component: <TreePlantation /> },
    { id: "gupt", component: <GuptKashi /> },
    { id: "water", component: <WaterBowl /> },
];

export default function CardCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % cards.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const handleDragEnd = (_, info) => {
        const threshold = 100;
        if (info.offset.x < -threshold) handleNext();
        else if (info.offset.x > threshold) handlePrev();
    };

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
            position: "absolute",
        }),
        center: {
            x: 0,
            opacity: 1,
            position: "relative",
        },
        exit: (dir) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
            position: "absolute",
        }),
    };

    return (
        <div className="relative w-full overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
                <motion.div
                    key={cards[index].id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    className="w-full"
                >
                    {cards[index].component}
                </motion.div>
            </AnimatePresence>

            {/* Desktop Buttons */}
            <button
                onClick={handlePrev}
                className="hidden md:block absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-25 text-white px-2 py-1 w-[4%] rounded h-[70%]"
            >
                ⬅
            </button>
            <button
                onClick={handleNext}
                className="hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-25 text-white px-2 py-1 w-[4%] rounded h-[70%]"
            >
                ➡
            </button>
        </div>
    );
}
