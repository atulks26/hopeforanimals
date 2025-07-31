import CardsCarousel from "../components/StoryCard";
import GalleryPreview from "../components/GalleryPreview";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Hero from "../components/Hero";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GuptKashi from "../components/cards/GuptKashi";
import AdoptionCamp from "../components/cards/AdoptionCamp";
import TreePlantation from "../components/cards/TreePlantation";
import WaterBowl from "../components/cards/WaterBowl";
import CardCarousel from "../components/StoryCard";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");

            const onLoad = () => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            };

            if (document.readyState === "complete") {
                onLoad();
            } else {
                window.addEventListener("load", onLoad);
                return () => window.removeEventListener("load", onLoad);
            }
        }
    }, [location]);

    return (
        <section className="w-full flex flex-col justify-center items-center bg-[#012F50]">
            <Hero />

            <section
                className="flex flex-col items-center justify-center w-full py-16"
                id="about-us-section"
            >
                <div className="font-lucky w-full max-w-[90%] xl:max-w-[70%] mt-4 text-5xl md:text-6xl text-green-500 mb-8 py-2">
                    <p className="w-fit">
                        <span className="text-[#F2EF61]">A</span>
                        <span className="text-[#ECAD5B]">bo</span>
                        <span className="text-[#BEB66D]">u</span>
                        <span className="text-[#ECAD5B]">t </span>
                        <span className="text-[#F2EF61]">U</span>
                        <span className="text-[#BEB66D]">s</span>
                    </p>
                </div>

                {/* WHO ARE WE */}
                <div className="flex flex-col md:flex-row md:justify-center w-full max-w-[90%] gap-4 xl:max-w-[70%] my-10 mb-20 items-center">
                    <div className="w-full md:w-1/2 flex order-2 md:order-1 xl:justify-start justify-center">
                        <div className="flex px-2">
                            {/* Left Image: smaller, tilted left */}
                            <div className="w-[40%] h-full flex flex-col">
                                <div className="w-full h-1/2">
                                    <img
                                        src="images/whoarewe-3.jpg"
                                        className="w-full h-full object-cover border-4 border-[#BEB66D]"
                                    />
                                </div>
                                <div className="w-full h-1/2">
                                    <img
                                        src="images/whoarewe-2.jpg"
                                        className="w-full h-full object-cover -rotate-12 border-4 border-[#F2EF61]"
                                    />
                                </div>
                            </div>
                            {/* Right Image: larger, tilted right */}
                            <div className="w-[60%] h-full">
                                <img
                                    src="images/whoarewe-1.jpg"
                                    className="w-full h-full object-cover rotate-6 border-4 border-[#ECAD5B]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:max-w-lg md:max-w-[40%] flex flex-col justify-center md:items-end ml-4 mt-8 md:mt-0 order-1 md:order-2">
                        <h3 className="text-[#EB492A] font-bold w-full text-lg uppercase tracking-wide">
                            Who are we
                        </h3>
                        <h2 className="text-2xl md:text-4xl w-full font-bold mb-5 leading-snug text-white">
                            Transforming lives through compassion and action.
                        </h2>
                        <p className="text-sm md:text-md w-full mb-4 text-gray-300">
                            Hope For Animals is a registered NGO based in
                            Dehradun, Uttarakhad. Our NGO started in 2022 and
                            since then we have been dedicated to rescuing and
                            caring for animals.
                        </p>
                    </div>
                </div>

                {/* WHAT WE DO */}
                <div className="flex flex-col md:flex-row md:justify-center w-full max-w-[90%] gap-4 xl:max-w-[70%] my-10 mb-20 items-center">
                    <div className="w-full md:w-1/2 flex order-2 md:order-2 xl:justify-start justify-center">
                        <div className="flex flex-col px-2 gap-4">
                            {/* Top Image: smaller, flat */}
                            <div className="w-full max-h-[240px]  rounded-md">
                                <img
                                    src="images/whatwedo-3.jpg"
                                    className="w-full h-full object-cover border-4 border-[#BEB66D]"
                                    alt=""
                                />
                            </div>
                            {/* Bottom Images: side by side, rotated */}
                            <div className="flex gap-4">
                                <div className="aspect-[4/3] w-1/3 rounded-md">
                                    <img
                                        src="images/whatwedo-1.jpg"
                                        className="w-full h-full object-cover -rotate-12 border-4 border-[#F2EF61]"
                                        alt=""
                                    />
                                </div>
                                <div className="aspect-[4/3] w-2/3 rounded-md">
                                    <img
                                        src="images/whatwedo-2.jpg"
                                        className="w-full h-full object-cover rotate-6 border-4 border-[#ECAD5B] cursor-zoom-in"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:max-w-lg md:max-w-[40%] flex flex-col justify-center md:items-end ml-4 mt-8 md:mt-0 order-1 md:order-1">
                        <h3 className="text-[#EB492A] font-bold w-full text-lg uppercase tracking-wide">
                            What we do
                        </h3>
                        <h2 className="text-2xl md:text-4xl w-full font-bold mb-5 leading-snug text-white">
                            Transforming lives through compassion and action.
                        </h2>
                        <p className="text-sm md:text-md w-full mb-4 text-gray-300">
                            We are a dedicated group of volunteers and animal
                            lovers committed to rescuing, rehabilitating, and
                            rehoming animals in need. Our mission is to create a
                            safer, more compassionate world for all creatures.
                        </p>
                    </div>
                </div>

                {/* HOW IT STARTED */}
                <div className="flex flex-col md:flex-row md:justify-center w-full max-w-[90%] gap-4 xl:max-w-[70%] my-10 mb-20 items-center">
                    <div className="w-full md:w-1/2 flex order-2 md:order-1 xl:justify-start justify-center">
                        <div className="flex px-2">
                            <div className="w-[60%] h-full flex justify-center items-center">
                                <div className="w-full h-1/2">
                                    <img
                                        src="images/howitstarted-1.jpg"
                                        className="w-full h-full object-cover -rotate-6 border-4 border-[#ECAD5B]"
                                    />
                                </div>
                            </div>

                            <div className="w-[40%] h-full flex flex-col">
                                <div className="w-full h-1/2">
                                    <img
                                        src="images/howitstarted-3.jpg"
                                        className="w-full h-full object-cover rotate-12 border-4 border-[#BEB66D]"
                                    />
                                </div>
                                <div className="w-full h-1/2">
                                    <img
                                        src="images/howitstarted-2.jpg"
                                        className="w-full h-full object-cover  border-4 border-[#F2EF61]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:max-w-lg md:max-w-[40%] flex flex-col justify-center md:items-end ml-4 mt-8 md:mt-0 order-1 md:order-2">
                        <h3 className="text-[#EB492A] font-bold w-full text-lg uppercase tracking-wide">
                            How it started
                        </h3>
                        <h2 className="text-2xl md:text-4xl w-full font-bold mb-5 leading-snug text-white">
                            Transforming lives through compassion and action.
                        </h2>
                        <p className="text-sm md:text-md w-full mb-4 text-gray-300">
                            We are a dedicated group of volunteers and animal
                            lovers committed to rescuing, rehabilitating, and
                            rehoming animals in need. Our mission is to create a
                            safer, more compassionate world for all creatures.
                        </p>
                    </div>
                </div>
            </section>

            <div className="w-full flex flex-col items-center mb-10">
                <div className="w-[100vw] bg-transparent -mb-1">
                    <img
                        src="images/paper.png"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full flex justify-center items-center bg-[#FDFDFD]">
                    <div className="font-lucky w-full max-w-[90%] xl:max-w-[70%] mt-4 text-5xl md:text-6xl text-green-500 mb-8 py-2">
                        <p className="w-fit">
                            <span className="text-[#7A9EBA]">S</span>
                            <span className="text-[#8CAAC9]">u</span>
                            <span className="text-[#7A9EBA]">c</span>
                            <span className="text-[#A4BFD6]">c</span>
                            <span className="text-[#8CAAC9]">es</span>
                            <span className="text-[#A4BFD6]">s </span>

                            <span className="text-[#8CAAC9] ml-1">S</span>
                            <span className="text-[#7A9EBA]">t</span>
                            <span className="text-[#A4BFD6]">o</span>
                            <span className="text-[#8CAAC9]">ri</span>
                            <span className="text-[#A4BFD6]">e</span>
                            <span className="text-[#7A9EBA]">s</span>
                        </p>
                    </div>
                </div>

                <div className="bg-[#FDFDFD] w-full min-h-[66vh] h-full -m-1">
                    <CardCarousel />
                </div>

                <div className="w-[100vw] bg-transparent">
                    <img
                        src="images/paper.png"
                        className="w-full h-full object-cover rotate-180"
                    />
                </div>
            </div>

            <div className="w-full flex flex-col items-center bg-gray-100 py-20">
                <div className="font-modak text-3xl md:text-6xl mb-12">
                    OUR IMPACT
                </div>
                <div className="w-full flex flex-wrap justify-center gap-6 px-4">
                    {[
                        {
                            img: "paws.png",
                            count: "850",
                            label: "RESCUES",
                            desc: "Helping those in need",
                        },
                        {
                            img: "adoption.png",
                            count: "350",
                            label: "ADOPTIONS",
                            desc: "Furry friends who found homes",
                        },
                        {
                            img: "dog-running.png",
                            count: "200",
                            label: "RELEASES",
                            desc: "Minor setbacks couldn't stop them",
                        },
                        {
                            img: "dog-in-front-of-a-man.png",
                            count: "50",
                            label: "ADOPTION CAMPS",
                            desc: "Meeting new hoomans",
                        },
                    ].map(({ img, count, label, desc }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center bg-white rounded-2xl shadow-md w-[80%] sm:w-[45%] md:w-[22%] h-auto p-6"
                        >
                            <img
                                src={`images/${img}`}
                                className="w-16 h-16 mb-4"
                                alt={label}
                            />
                            <div className="text-green-500 text-6xl font-bold relative">
                                {count}
                                <span className="absolute text-3xl font-bold top-2 right-[-20px]">
                                    +
                                </span>
                            </div>
                            <p className="text-lg font-bold mt-2">{label}</p>
                            <p className="text-sm text-gray-500 text-center">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <GalleryPreview />

            <div className="w-full flex flex-col items-center my-10 px-4">
                <div className="text-3xl md:text-4xl font-bold text-emerald-500 w-full max-w-[90%] mb-8 border-l-4 border-orange-400 pl-4">
                    Adoptions
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full max-w-[90%] items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <p className="text-3xl md:text-5xl font-bold">
                            Find your new Furrever Furry Friend.
                        </p>
                        <p className="text-md md:text-lg font-normal mt-4">
                            Maybe you'll find the love of your life here instead
                            of a club...
                        </p>
                        <Link to="/adoptions">
                            <div className="mt-6 py-4 bg-orange-400 text-center text-lg font-semibold text-white">
                                Explore Adoptions
                            </div>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="images/unnamed.jpg"
                            className="w-full h-auto object-cover"
                            alt="Adoptions"
                        />
                    </div>
                </div>
            </div>

            <div
                id="sponsor-meal-section"
                className="w-full bg-orange-100 py-10 px-4"
            >
                <div className="text-3xl md:text-4xl font-bold text-emerald-500 w-full max-w-[90%] mb-8 border-l-4 border-orange-400 pl-4">
                    Sponsor A Meal
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full max-w-[90%] items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <img
                            src="images/unnamed.jpg"
                            className="w-full h-auto object-cover"
                            alt="Sponsor a meal"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-between">
                        <p className="text-3xl md:text-5xl font-bold">
                            Feed the shelter babies!
                        </p>
                        <p className="text-md md:text-lg font-normal mt-4">
                            <span className="font-semibold">Option 1:</span>{" "}
                            ₹1500 for 2 meals (Breakfast + Dinner)
                        </p>
                        <p className="text-md md:text-lg font-normal">
                            <span className="font-semibold">Option 2:</span>{" "}
                            ₹2000 for 2 meals + Snacks
                        </p>
                        <p className="text-sm mt-4">
                            By sponsoring a day's meal, you'll be providing
                            essential nutrition... choose a date that suits you.
                        </p>
                        <HashLink
                            to="/#footer-section"
                            scroll={(el) =>
                                el.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            <div className="mt-6 py-4 bg-orange-400 text-center text-lg font-semibold text-white">
                                Donate
                            </div>
                        </HashLink>
                        <p className="text-sm mt-2">
                            *Contact us for scheduling your sponsorship and
                            visit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
