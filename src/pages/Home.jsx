import Cards from "../components/StoryCard";
import GalleryPreview from "../components/GalleryPreview";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Hero from "../components/Hero";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
        <section className="w-full flex flex-col justify-center items-center">
            <Hero />
            <div
                id="about-us-section"
                className="flex w-[70%] mt-20 font-bold items-center text-5xl text-green-500 border-l-4 border-orange-400 pl-4"
            >
                About Us
            </div>

            <div className="whoarewe flex w-[70%] h-[40rem] justify-center items-center">
                <div className="w-[50%] flex items-center">
                    <img
                        src="images/unnamed.jpg"
                        className="w-[36rem] h-[28rem] object-cover"
                    />
                </div>
                <div className="textpart w-[50%] flex flex-col items-end">
                    <div className="text-green-500 font-bold w-[80%]">
                        Who are we
                    </div>
                    <div className="left text-4xl w-[80%] font-bold mb-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </div>
                    <div className="right text-md w-[80%] mt-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit voluptas impedit fuga consectetur.
                        Doloribus dolore voluptas omnis nulla eaque similique
                        laboriosam ut odio. Placeat quidem officia nesciunt non,
                        eaque autem. Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>
            </div>

            <div className="whatwedo flex w-[70%] h-[40rem] mt-10 justify-center items-center">
                <div className="textpart w-[50%] flex flex-col">
                    <div className="text-green-500 font-bold w-[80%]">
                        What we do
                    </div>
                    <div className="left text-4xl w-[80%] font-bold mb-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </div>
                    <div className="right text-md w-[80%] mt-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit voluptas impedit fuga consectetur.
                        Doloribus dolore voluptas omnis nulla eaque similique
                        laboriosam ut odio. Placeat quidem officia nesciunt non,
                        eaque autem. Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>
                <div className="w-[50%] flex justify-end items-center">
                    <img
                        src="images/unnamed.jpg"
                        className="w-[36rem] h-[28rem] object-cover"
                    />
                </div>
            </div>

            <div className="howitstarted flex w-[70%] h-[40rem] mt-10 justify-center items-center">
                <div className="w-[50%] flex items-center">
                    <img
                        src="images/unnamed.jpg"
                        className="w-[36rem] h-[28rem] object-cover"
                    />
                </div>
                <div className="textpart w-[50%] flex flex-col items-end">
                    <div className="text-green-500 font-bold w-[80%]">
                        How it started
                    </div>
                    <div className="left text-4xl w-[80%] font-bold mb-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </div>
                    <div className="right text-md w-[80%] mt-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit voluptas impedit fuga consectetur.
                        Doloribus dolore voluptas omnis nulla eaque similique
                        laboriosam ut odio. Placeat quidem officia nesciunt non,
                        eaque autem. Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>
            </div>

            <div className="w-full h-20vh flex flex-col justify-center items-center mb-10">
                <div className="h-16 text-4xl flex justify-start items-center font-bold text-emerald-500 w-[70%]">
                    <div className="w-[50%] flex">
                        <p className="w-[36rem] border-l-4 border-orange-400 px-4 py-3">
                            Success Stories
                        </p>
                    </div>
                </div>
                <div className="w-full h-20vh">
                    <Cards />
                </div>
            </div>

            <div className="w-full border-2 flex flex-col m-auto justify-center items-center bg-gray-100">
                <div className="h-16 w-100 text-5xl my-20 font-semibold">
                    OUR IMPACT
                </div>
                <div className="w-full flex justify-evenly items-center mb-20">
                    <div className="flex flex-col py-10 px-5 bg-white rounded-2xl shadow-md w-[15%] items-center h-[20rem]">
                        <div className="h-[5rem] w-[5rem]">
                            <img src="images/paws.png" />
                        </div>
                        <div className="text-green-500 text-8xl font-bold relative">
                            800
                            <p className="text-green-500 text-4xl font-bold absolute top-[30%] right-[-16%]">
                                +
                            </p>
                        </div>
                        <p className="text-xl font-bold">RESCUES</p>
                        <p className="text-sm text-gray-400 font-medium text-center">
                            Helping those in need
                        </p>
                    </div>
                    <div className="flex flex-col py-10 px-5 bg-white rounded-2xl shadow-md w-[15%] items-center h-[20rem]">
                        <div className="h-[5rem] w-[5rem]">
                            <img src="images/adoption.png" />
                        </div>
                        <div className="text-green-500 text-8xl font-bold relative">
                            350
                            <p className="text-green-500 text-4xl font-bold absolute top-[30%] right-[-16%]">
                                +
                            </p>
                        </div>
                        <p className="text-xl font-bold">ADOPTIONS</p>
                        <p className="text-sm text-gray-400 font-medium text-center">
                            Furry friends who found their new forever homes
                        </p>
                    </div>
                    <div className="flex flex-col py-10 px-5 bg-white rounded-2xl shadow-md w-[15%] items-center h-[20rem]">
                        <div className="h-[5rem] w-[5rem]">
                            <img src="images/dog-running.png" />
                        </div>
                        <div className="text-green-500 text-8xl font-bold relative">
                            200
                            <p className="text-green-500 text-4xl font-bold absolute top-[30%] right-[-16%]">
                                +
                            </p>
                        </div>
                        <p className="text-xl font-bold">RELEASES</p>
                        <p className="text-sm text-gray-400 font-medium text-center">
                            Minor setbacks couldn't stop them
                        </p>
                    </div>
                    <div className="flex flex-col py-10 px-5 bg-white rounded-2xl shadow-md w-[15%] items-center h-[20rem]">
                        <div className="h-[5rem] w-[5rem]">
                            <img src="images/dog-in-front-of-a-man.png" />
                        </div>
                        <div className="text-green-500 text-8xl font-bold relative">
                            50
                            <p className="text-green-500 text-4xl font-bold absolute top-[30%] right-[-22%]">
                                +
                            </p>
                        </div>
                        <p className="text-xl font-bold">ADOPTION CAMPS</p>
                        <p className="text-sm text-gray-400 font-medium text-center">
                            Helping them meet new hoomans, and the other way
                            around
                        </p>
                    </div>
                </div>
            </div>

            <GalleryPreview />

            <div className="w-full h-20vh flex flex-col justify-center items-center mb-10">
                <div className="h-16 text-4xl flex justify-start items-center font-bold text-emerald-500 w-[70%] mb-10">
                    <div className="w-[50%] flex justify-start">
                        <p className="w-[36rem] border-l-4 border-orange-400 px-4 py-3">
                            Adoptions
                        </p>
                    </div>
                </div>
                <div className="flex justify-start items-stretch font-bold w-[70%] mb-10">
                    <div className="w-[50%] flex justify-start">
                        <div className="w-[90%] flex flex-col justify-between">
                            <div>
                                <p className="text-5xl">
                                    Find your new Furrever Furry Friend.
                                </p>
                                <p className="text-lg font-normal mt-4 px-1">
                                    Maybe you'll find the love of your life here
                                    instead of a club...
                                </p>
                            </div>
                            <div className="w-full">
                                <Link to="/adoptions">
                                    <div className="px-2 py-6 bg-orange-400 text-xl active:text-white text-center">
                                        Explore Adoptions
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center w-[50%]">
                        <div className="w-[90%]">
                            <img src="images/unnamed.jpg" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="sponsor-meal-section"
                className="w-full h-20vh flex flex-col justify-center items-center py-10 bg-orange-100"
            >
                <div className="h-16 text-4xl flex justify-start items-center font-bold text-emerald-500 w-[70%] mb-10">
                    <div className="w-[50%] flex justify-start">
                        <p className="w-[36rem] border-l-4 border-orange-400 px-4 py-3">
                            Sponsor A Meal
                        </p>
                    </div>
                </div>
                <div className="flex justify-start items-stretch font-bold w-[70%] mb-10">
                    <div className="flex justify-start items-center w-[50%]">
                        <div className="w-[90%]">
                            <img src="images/unnamed.jpg" className="w-full" />
                        </div>
                    </div>
                    <div className="w-[50%] flex justify-end">
                        <div className="w-[90%] flex flex-col items-start justify-between">
                            <div>
                                <p className="text-5xl">
                                    Feed the shelter babies!
                                </p>
                                <p className="text-lg font-normal mt-4 px-1">
                                    <span className="font-semibold">
                                        Option 1:
                                    </span>{" "}
                                    ₹1500 for 2 meals (Breakfast + Dinner)
                                </p>
                                <p className="text-lg font-normal px-1">
                                    <span className="font-semibold">
                                        Option 1:
                                    </span>{" "}
                                    ₹2000 for 2 meals (Breakfast + Dinner) +
                                    Snacks
                                </p>

                                <p className="text-md font-normal mt-4 px-1">
                                    By sponsoring a day's meal, you'll be
                                    providing essential nutrition to our furry
                                    friends. Plus, you'll have the opportunity
                                    to visit during feeding time and see the
                                    impact of your generosity firsthand! You can
                                    choose a date that suits you to sponsor a
                                    meal.
                                </p>
                            </div>

                            <div className="w-full">
                                <HashLink
                                    to="/#footer-section"
                                    scroll={(el) =>
                                        el.scrollIntoView({
                                            behavior: "smooth",
                                        })
                                    }
                                >
                                    <div className="px-2 py-6 bg-orange-400 text-xl active:text-white text-center">
                                        Donate
                                    </div>
                                </HashLink>

                                <p className="font-normal text-sm">
                                    *Contact us for scheduling your sponsorship
                                    and visit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
