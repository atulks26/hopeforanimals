import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
    {
        id: "adoption",
        numberOfImages: 5,
        imageSrcs: [
            "images/adoption-camps/1.webp",
            "images/adoption-camps/2.webp",
            "images/adoption-camps/3.webp",
            "images/adoption-camps/4.webp",
            "images/adoption-camps/5.webp",
        ],
        desc1: "Launched in December 2023, adoption camps are hosted regularly to encourage adoptions, raise awareness, collect donations and most importantly, help animals and humans find their forever friends. These adoption camps have helped hundreds of animals find loving homes.",
        desc2: "",
        hasLink: true,
        linkUrl: "https://www.instagram.com/hopeforanimalsresq/",
    },
    {
        id: "tree",
        numberOfImages: 4,
        imageSrcs: [
            "images/tree-plantation/1.webp",
            "images/tree-plantation/2.webp",
            "images/tree-plantation/3.webp",
            "images/tree-plantation/4.webp",
        ],
        desc1: "Volunteers helped in planting over 100 saplings during a dedicated plantation drive organized to promote environmental sustainability. The event not only contributed to increasing the green cover but also encouraged community participation in preserving nature for future generations. These drives are conducted every year.",
        desc2: "",
        hasLink: false,
        linkUrl: "",
    },
    {
        id: "gupt",
        numberOfImages: 5,
        imageSrcs: [
            "images/gupt-kashi/1.webp",
            "images/gupt-kashi/2.webp",
            "images/gupt-kashi/3.webp",
            "images/gupt-kashi/4.webp",
            "images/gupt-kashi/5.webp",
        ],
        desc1: "What began as a rescue mission to Guptkashi, Uttarakhand took an unexpected turn when we stopped mid-journey to treat a cow with a severe maggot wound. After finally locating the missing dog late the next day, we rushed her to safety—only to discover she had a maggot-infested TVT tumor. With timely treatment, care, and her incredible will to fight, she made a full recovery.",
        desc2: "This journey reminded us that compassion and persistence can change lives against all odds.",
        hasLink: false,
        linkUrl: "",
    },
    {
        id: "water",
        numberOfImages: 4,
        imageSrcs: [
            "images/water-bowl/1.webp",
            "images/water-bowl/2.webp",
            "images/water-bowl/3.webp",
            "images/water-bowl/4.webp",
        ],
        desc1: "Our volunteers painted custom bowls and placed them throughout the town, ensuring that no animal goes thirsty in our community. Multiple bowls were painted, installed and filled. These drives are conducted every year.",
        desc2: "",
        hasLink: false,
        linkUrl: "",
    },
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

    const card = cards[index];

    return (
        <div className="relative w-full overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
                <motion.div
                    key={card.id}
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
                    <div className="w-full flex justify-center items-center">
                        <div className="w-[90%] lg:w-[70%] h-full flex items-center">
                            <div className="w-full h-full flex flex-col">
                                {/* Title based on id or you can add title in cards */}
                                <p className="font-audiowide text-2xl md:text-3xl font-semibold mb-10 text-[#2F3E5C] uppercase">
                                    {card.id === "adoption"
                                        ? "Adoption Camps"
                                        : card.id === "tree"
                                        ? "Tree Plantation Drive"
                                        : card.id === "gupt"
                                        ? "Guptkashi Rescue"
                                        : card.id === "water"
                                        ? "Water Bowl Drive"
                                        : ""}
                                </p>

                                {/* Images Section */}
                                {card.numberOfImages === 4 ? (
                                    // 4 images, 2 rows, top row bigger
                                    <>
                                        {/* Mobile */}
                                        <div className="h-[50%] md:hidden flex flex-col items-center justify-center">
                                            <div className="flex justify-center gap-4">
                                                {[0, 1].map((i) => {
                                                    const borderColors = [
                                                        "#efefef",
                                                        "#efefef",
                                                    ];
                                                    const rotate =
                                                        i === 0
                                                            ? "-6deg"
                                                            : "6deg";
                                                    const width = "35%";
                                                    return (
                                                        <div
                                                            key={i}
                                                            className="h-full flex aspect-[2/3] overflow-hidden border-[0.6rem] shadow-xl"
                                                            style={{
                                                                borderColor:
                                                                    borderColors[
                                                                        i
                                                                    ],
                                                                transform: `rotate(${rotate})`,
                                                                width,
                                                            }}
                                                        >
                                                            <img
                                                                src={
                                                                    card
                                                                        .imageSrcs[
                                                                        i
                                                                    ]
                                                                }
                                                                alt={`img-${i}`}
                                                                className="object-cover w-full h-full"
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="flex justify-center gap-4 mt-4">
                                                {[2, 3].map((i) => {
                                                    const borderColors = [
                                                        "#efefef",
                                                        "#efefef",
                                                    ];
                                                    // Notice the rotate values switched for bottom row compared to example you gave
                                                    const rotate =
                                                        i === 2
                                                            ? "6deg"
                                                            : "-6deg";
                                                    const width = "25%";
                                                    return (
                                                        <div
                                                            key={i}
                                                            className="h-full flex aspect-[2/3] overflow-hidden border-[0.6rem] shadow-xl"
                                                            style={{
                                                                borderColor:
                                                                    borderColors[
                                                                        i - 2
                                                                    ],
                                                                transform: `rotate(${rotate})`,
                                                                width,
                                                            }}
                                                        >
                                                            <img
                                                                src={
                                                                    card
                                                                        .imageSrcs[
                                                                        i
                                                                    ]
                                                                }
                                                                alt={`img-${i}`}
                                                                className="object-cover w-full h-full"
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Desktop */}
                                        <div className="h-[50%] hidden md:flex justify-center gap-4">
                                            {[0, 1, 2, 3].map((i) => {
                                                const borderColors = [
                                                    "#efefef",
                                                    "#efefef",
                                                    "#efefef",
                                                    "#efefef",
                                                ];
                                                const rotate =
                                                    i % 2 === 0
                                                        ? "-6deg"
                                                        : "6deg";
                                                return (
                                                    <div
                                                        key={i}
                                                        className="h-full flex aspect-[2/3] overflow-hidden border-[0.6rem] shadow-xl"
                                                        style={{
                                                            borderColor:
                                                                borderColors[i],
                                                            transform: `rotate(${rotate})`,
                                                            width: "18%",
                                                        }}
                                                    >
                                                        <img
                                                            src={
                                                                card.imageSrcs[
                                                                    i
                                                                ]
                                                            }
                                                            alt={`img-${i}`}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </>
                                ) : card.numberOfImages === 5 ? (
                                    // 5 images layout exactly like your example
                                    <>
                                        {/* Mobile / small screen */}
                                        <div className="h-[50%] md:hidden flex flex-col items-center justify-center gap-4">
                                            <div className="flex justify-center gap-4">
                                                <div className="h-full w-[35%] flex aspect-[2/3] border-[0.6rem] shadow-xl border-[#efefef] -rotate-6 overflow-hidden">
                                                    <img
                                                        src={card.imageSrcs[0]}
                                                        alt="img-0"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <div className="h-full w-[35%] flex aspect-[2/3] border-[0.6rem] shadow-xl border-[#efefef] rotate-6 overflow-hidden">
                                                    <img
                                                        src={card.imageSrcs[1]}
                                                        alt="img-1"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex justify-center gap-4">
                                                <div className="h-full w-[25%] flex aspect-[2/3] border-[0.6rem] shadow-xl border-[#efefef] -rotate-6 overflow-hidden">
                                                    <img
                                                        src={card.imageSrcs[2]}
                                                        alt="img-2"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <div className="h-full w-[25%] flex aspect-[2/3] border-[0.6rem] shadow-xl border-[#efefef] rotate-6 overflow-hidden">
                                                    <img
                                                        src={card.imageSrcs[3]}
                                                        alt="img-3"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <div className="h-full w-[25%] flex aspect-[2/3] border-[0.6rem] shadow-xl border-[#efefef] -rotate-6 overflow-hidden">
                                                    <img
                                                        src={card.imageSrcs[4]}
                                                        alt="img-4"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop */}
                                        <div className="h-[50%] hidden md:flex justify-center">
                                            {card.imageSrcs.map((src, i) => {
                                                const rotate =
                                                    i % 2 === 0
                                                        ? "-6deg"
                                                        : "6deg";
                                                const borderColors = [
                                                    "#efefef",
                                                    "#efefef",
                                                    "#efefef",
                                                    "#efefef",
                                                    "#efefef",
                                                ];
                                                return (
                                                    <div
                                                        key={i}
                                                        className="h-full w-[18%] flex aspect-[2/3] overflow-hidden border-[0.6rem] shadow-xl"
                                                        style={{
                                                            transform: `rotate(${rotate})`,
                                                            borderColor:
                                                                borderColors[i],
                                                        }}
                                                    >
                                                        <img
                                                            src={src}
                                                            alt={`img-${i}`}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </>
                                ) : (
                                    // fallback if other number of images (you can add more cases)
                                    <div>No images to display</div>
                                )}

                                {/* Descriptions */}
                                <div className="flex flex-col w-full mt-10 text-lg lg:text-xl text-gray-500 mb-10 md:mb-0">
                                    <p>{card.desc1}</p>
                                    <br />
                                    <p>{card.desc2}</p>

                                    {/* Show link if hasLink */}
                                    {card.hasLink && card.linkUrl && (
                                        <div className="flex gap-2 md:gap-4 items-center justify-between mb-4">
                                            <p>
                                                Check out our socials to get
                                                info on the next adoption camp
                                            </p>
                                            <a
                                                href={card.linkUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="/images/instagram.webp"
                                                    alt="instagram"
                                                    className="w-7 sm:w-6 sm:h-6"
                                                />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Mobile swipe arrows */}
            <div className="md:hidden absolute top-1/2 left-2 -translate-y-1/2 select-none pointer-events-none">
                <img
                    src="/images/left.webp"
                    alt="left arrow"
                    className="h-6 w-6 opacity-50 sliding-left"
                />
            </div>
            <div className="md:hidden absolute top-1/2 right-2 -translate-y-1/2 select-none pointer-events-none">
                <img
                    src="/images/right.webp"
                    alt="right arrow"
                    className="h-6 w-6 opacity-50 sliding-right"
                />
            </div>

            {/* Desktop Buttons */}
            <button
                onClick={handlePrev}
                className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-25 text-white w-8 h-[60%] hover:opacity-90 opacity-60 active:opacity-60 rounded items-center justify-center"
            >
                <img
                    src="/images/left.webp"
                    alt="left arrow"
                    className="max-h-6 w-auto object-contain"
                />
            </button>

            <button
                onClick={handleNext}
                className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-25 text-white w-8 h-[60%] hover:opacity-90 opacity-60 active:opacity-60 rounded items-center justify-center"
            >
                <img
                    src="/images/right.webp"
                    alt="right arrow"
                    className="max-h-6 w-auto object-contain"
                />
            </button>
        </div>
    );
}
