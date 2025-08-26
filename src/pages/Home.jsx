import GalleryPreview from "../components/GalleryPreview";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardCarousel from "../components/StoryCard";

const GITHUB_JSON_URL =
    "https://raw.githubusercontent.com/atulksingh26/json-static-hosting/main/hfa-stats.json";

const Home = () => {
    const location = useLocation();
    const [stats, setStats] = useState({});

    useEffect(() => {
        async function fetchStats() {
            try {
                const res = await fetch(GITHUB_JSON_URL);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setStats(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchStats();
    }, []);

    const formatCount = (num) => {
        if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}K`;
        }
        return num;
    };

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

            <section
                className="flex flex-col items-center justify-center w-full pt-8 sm:pt-16 pb-0 md:pb-16"
                id="about-us-section"
            >
                <div className="font-lucky w-full max-w-[90%] xl:max-w-[70%] mt-2 text-5xl md:text-6xl mb-2 py-2 flex justify-center">
                    <p className="w-fit">
                        <span className="text-[#5E4B56]">A</span>
                        <span className="text-[#2F3E5C]">bo</span>
                        <span className="text-[#4A4A4A]">u</span>
                        <span className="text-[#2F3E5C]">t </span>
                        <span className="text-[#5E4B56]">U</span>
                        <span className="text-[#4A4A4A]">s</span>
                    </p>
                </div>

                {/* WHO ARE WE */}
                <div className="flex flex-col md:flex-row md:justify-center w-full max-w-[90%] gap-4 xl:max-w-[70%] md:my-10 mb-10 items-center sm:px-10">
                    <div className="w-full md:w-1/2 flex order-2 md:order-1 xl:justify-start justify-center">
                        <div className="flex px-6">
                            <div className="w-[40%] h-full flex flex-col">
                                <div className="w-full h-1/2">
                                    <img
                                        src="images/whoarewe-3.jpg"
                                        className="w-full h-full object-cover border-[0.6rem] shadow-2xl border-white"
                                    />
                                </div>
                                <div className="w-full h-1/2">
                                    <img
                                        src="images/whoarewe-2.jpg"
                                        className="w-full h-full object-cover -rotate-12 border-[0.6rem] shadow-2xl border-white"
                                    />
                                </div>
                            </div>

                            <div className="w-[60%] h-full">
                                <img
                                    src="images/whoarewe-1.jpg"
                                    className="w-full h-full object-cover rotate-6 border-[0.6rem] shadow-2xl border-white"
                                />
                            </div>
                        </div>
                    </div>

                    <div className=" md:max-w-[40%] flex flex-col justify-center md:items-end ml-4 mt-8 md:mt-0 order-1 md:order-2">
                        <h3 className="text-[#5E4B56] font-audiowide font-bold w-full text-xl uppercase tracking-wide">
                            Who are we
                        </h3>
                        <h2 className="text-2xl md:text-4xl w-full font-bold mb-5 leading-snug text-[#2F3E5C]">
                            An ever-growing family bound by the love for
                            animals.
                        </h2>
                        <p className="text-sm md:text-md w-full mb-4 text-[#4A4A4A]">
                            Hope For Animals is a registered NGO based in
                            Dehradun, Uttarakhand, established in 2022.
                            Dedicated to animal welfare, the organization works
                            to rescue, treat, and protect animals in need, while
                            promoting a culture of compassion and coexistence
                            throughout the region.
                        </p>
                    </div>
                </div>

                {/* WHAT WE DO */}
                <div className="flex flex-col md:flex-row md:justify-center w-full max-w-[90%] gap-4 xl:max-w-[70%] my-10 mb-10 items-cente sm:px-10r">
                    <div className="w-full md:w-1/2 flex order-2 md:order-2 xl:justify-start justify-center">
                        <div className="flex flex-col px-2 gap-4">
                            <div className="w-full max-h-[240px]  rounded-md">
                                <img
                                    src="images/whatwedo.jpg"
                                    className="w-full h-full object-cover border-[0.6rem] shadow-2xl border-white"
                                    alt=""
                                />
                            </div>

                            <div className="flex gap-4">
                                <div className="aspect-[4/3] w-1/3 rounded-md">
                                    <img
                                        src="images/whatwedo-1.jpg"
                                        className="w-full h-full object-cover -rotate-12 border-[0.6rem] shadow-2xl border-white"
                                        alt=""
                                    />
                                </div>
                                <div className="aspect-[4/3] w-2/3 rounded-md">
                                    <img
                                        src="images/whatwedo-2.jpg"
                                        className="w-full h-full object-cover rotate-6 border-[0.6rem] shadow-2xl border-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:max-w-[40%] flex flex-col justify-center md:items-end ml-4 mt-8 md:mt-0 order-1 md:order-1">
                        <h3 className="text-[#5E4B56] font-audiowide font-bold w-full text-xl uppercase tracking-wide">
                            What we do
                        </h3>
                        <h2 className="text-2xl md:text-4xl w-full font-bold mb-5 leading-snug text-[#2F3E5C]">
                            Protecting the vulnerable, healing the hurt, and
                            standing up for the silent.
                        </h2>
                        <p className="text-sm md:text-md w-full mb-4 text-[#4A4A4A]">
                            We are dedicated to rescuing injured animals,
                            offering them the medical care and compassion they
                            need to recover, and safely releasing them back to
                            their natural habitats — where they truly belong.
                            Our shelter is currently home to various animals
                            including dogs, cats, calves, birds, etc.
                        </p>
                    </div>
                </div>

                {/* HOW IT STARTED */}
                <div className="flex flex-col md:flex-row md:justify-center w-full max-w-[90%] gap-4 xl:max-w-[70%] my-10 mb-10 items-center sm:px-10">
                    <div className="w-full md:w-1/2 flex order-2 md:order-1 xl:justify-start justify-center">
                        <div className="flex px-2">
                            <div className="w-[60%] h-full flex justify-center items-center">
                                <div className="w-full h-1/2">
                                    <img
                                        src="images/howitstarted-1.jpg"
                                        className="w-full h-full object-cover -rotate-6 border-[0.6rem] shadow-2xl border-white"
                                    />
                                </div>
                            </div>

                            <div className="w-[40%] h-full flex flex-col">
                                <div className="w-full h-1/2">
                                    <img
                                        src="images/howitstarted-3.jpg"
                                        className="w-full h-full object-cover rotate-12 border-[0.6rem] shadow-2xl border-white"
                                    />
                                </div>
                                <div className="w-full h-1/2">
                                    <img
                                        src="images/howitstarted.jpg"
                                        className="w-full h-full object-cover border-[0.6rem] shadow-2xl border-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:max-w-[40%] flex flex-col justify-center md:items-end ml-4 mt-8 md:mt-0 order-1 md:order-2 mb-4">
                        <h3 className="text-[#5E4B56] font-audiowide font-bold w-full text-xl uppercase tracking-wide">
                            How it started
                        </h3>
                        <h2 className="text-2xl md:text-4xl w-full font-bold mb-5 leading-snug text-[#2F3E5C]">
                            Turning care for animals into action.
                        </h2>
                        <p className="text-sm md:text-md w-full mb-4 text-[#4A4A4A]">
                            Since 2019, Manish Rawat, Founder and Managing
                            Trustee of Hope For Animals, and his dedicated team
                            have been helping animals. In 2022, their vision for
                            a shelter took shape, and Hope For Animals was
                            officially registered as an NGO committed to
                            rescuing and caring for vulnerable animals.
                            <br />
                            <br />
                            Today, the shelter continues to grow, with a
                            dedicated animal clinic also under construction in
                            the shelter to provide quick and timely medical
                            care.
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
                    <div className="font-lucky w-full max-w-[90%] xl:max-w-[70%] mt-4 text-5xl md:text-6xl mb-8 py-2">
                        <p className="w-fit">
                            <span className="text-[#2F3E5C]">S</span>
                            <span className="text-[#4A4A4A]">u</span>
                            <span className="text-[#2F3E5C]">c</span>
                            <span className="text-[#5E4B56]">c</span>
                            <span className="text-[#4A4A4A]">es</span>
                            <span className="text-[#5E4B56]">s </span>
                            <span className="text-[#4A4A4A] ml-1">S</span>
                            <span className="text-[#2F3E5C]">t</span>
                            <span className="text-[#5E4B56]">o</span>
                            <span className="text-[#4A4A4A]">ri</span>
                            <span className="text-[#5E4B56]">e</span>
                            <span className="text-[#2F3E5C]">s</span>
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

            <div className="w-full flex flex-col items-center ">
                <div className="font-lucky text-5xl md:text-6xl mb-12">
                    <p className="w-fit">
                        <span className="text-[#4A4A4A]">O</span>
                        <span className="text-[#2F3E5C]">u</span>
                        <span className="text-[#5E4B56]">r </span>

                        <span className="text-[#4A4A4A]">I</span>
                        <span className="text-[#2F3E5C]">mp</span>
                        <span className="text-[#5E4B56]">a</span>
                        <span className="text-[#2F3E5C]">c</span>
                        <span className="text-[#5E4B56]">t</span>
                    </p>
                </div>
                <div className="w-full flex flex-wrap justify-center gap-6 px-4">
                    {[
                        {
                            img: "paws.png",
                            count: formatCount(stats.rescue),
                            label: "RESCUES",
                            desc: "Providing a safe new beginning",
                        },
                        {
                            img: "adoption.png",
                            count: formatCount(stats.adoption),
                            label: "ADOPTIONS",
                            desc: "Furry friends who found homes",
                        },
                        {
                            img: "dog-in-front-of-a-man.png",
                            count: formatCount(stats.vet),
                            label: "VET VISITS",
                            desc: "Because every paw matters",
                        },
                        {
                            img: "dog-running.png",
                            count: formatCount(stats.release),
                            label: "RELEASES",
                            desc: "Harder, Better, Faster, Stronger",
                        },
                    ].map(({ img, count, label, desc }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-4 border-4 w-[70%] justify-center aspect-square sm:w-[36%] lg:w-[22%]"
                        >
                            <img
                                src={`images/${img}`}
                                className="w-16 h-16 mb-4"
                                alt={label}
                            />
                            <div className="text-[#012F50] text-6xl font-bold relative">
                                {count}
                                <span className="absolute text-3xl font-bold top-3 right-[-20px]">
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

            <div className="w-full flex flex-col items-center mb-10">
                <div className="w-[100vw] bg-transparent -mb-1">
                    <img
                        src="images/paper.png"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full h-full bg-[#FDFDFD] flex flex-col items-center">
                    <div className="text-5xl md:text-6xl font-lucky w-full max-w-[90%] xl:max-w-[70%] mt-4 md:mb-8 py-2">
                        <p className="w-fit">
                            <span className="text-[#2F3E5C]">A</span>
                            <span className="text-[#4A4A4A]">d</span>
                            <span className="text-[#5E4B56]">o</span>
                            <span className="text-[#2F3E5C]">p</span>
                            <span className="text-[#5E4B56]">t</span>
                            <span className="text-[#5E4B56]">i</span>
                            <span className="text-[#4A4A4A]">o</span>
                            <span className="text-[#5E4B56]">n</span>
                            <span className="text-[#2F3E5C]">s</span>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-center w-full max-w-[90%] gap-4 xl:max-w-[70%] my-10 mb-10 items-center">
                        <div className="w-full md:w-[45%] flex flex-row justify-center items-center gap-4 md:gap-4 mr-2">
                            <div className="w-[42%] h-auto">
                                <img
                                    src="images/adoptions/a-1.jpg"
                                    className="w-full h-auto object-cover border-[0.6rem] shadow-2xl rotate-3 border-[#efefef]"
                                />
                            </div>
                            <div className="w-[42%] h-auto">
                                <img
                                    src="images/adoptions/a-2.jpg"
                                    className="w-full h-auto object-cover border-[0.6rem] shadow-2xl -rotate-6 border-[#efefef]"
                                />
                            </div>
                        </div>

                        <div className="sm:max-w-lg md:max-w-[40%] flex flex-col justify-center md:items-start ml-4 mt-8 md:mt-0">
                            <h3 className="text-[#5E4B56] font-audiowide font-bold w-full text-xl uppercase tracking-wide">
                                Physical Adoption
                            </h3>
                            <h2 className="text-2xl md:text-4xl w-full font-bold mb-5 leading-snug text-[#2F3E5C]">
                                Give a rescued puppy a forever home.
                            </h2>
                            <p className="text-md md:text-lg w-full mb-4 text-[#4A4A4A]">
                                Meet our playful puppies at the shelter or an
                                adoption camp and take one home. Physical
                                adoptions help our little ones find loving
                                families to grow up with.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-center w-full max-w-[90%] gap-4 xl:max-w-[70%] my-10 mb-20 items-center">
                        <div className="sm:max-w-lg md:max-w-[40%] flex flex-col justify-center md:items-end ml-4 mt-8 md:mt-0 md:order-1 order-2">
                            <h3 className="text-[#5E4B56] font-audiowide font-bold w-full text-xl uppercase tracking-wide">
                                Virtual Adoption
                            </h3>
                            <h2 className="text-2xl md:text-4xl w-full font-bold mb-5 leading-snug text-[#2F3E5C]">
                                Support a special dog from afar.
                            </h2>
                            <p className="text-md md:text-lg w-full mb-4 text-[#4A4A4A]">
                                Virtually adopt a paralyzed dog by contributing
                                ₹2500/month, covering food, medicine, and
                                diapers. You can visit your furry friend at the
                                shelter anytime and be a part of their healing
                                journey.
                            </p>
                        </div>

                        <div className="w-full md:w-[45%] flex flex-row justify-center items-center gap-4 md:gap-4 ml-2 md:order-2 order-1">
                            <div className="w-[42%] h-auto">
                                <img
                                    src="images/adoptions/va-1.jpg"
                                    className="w-full h-auto object-cover border-[0.6rem] shadow-2xl -rotate-2 border-[#efefef]"
                                />
                            </div>
                            <div className="w-[42%] h-auto">
                                <img
                                    src="images/adoptions/va-2.jpg"
                                    className="w-full h-auto object-cover border-[0.6rem] shadow-2xl rotate-6 border-[#efefef]"
                                />
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/adoptions"
                        className="flex justify-center mb-20 w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
                    >
                        <button className="button-cute px-10 py-4 w-full font-semibold bg-orange-400 md:text-lg">
                            Explore Adoptions
                        </button>
                    </Link>
                </div>

                <div className="w-[100vw] bg-transparent -mt-1">
                    <img
                        src="images/paper.png"
                        className="w-full h-full object-cover rotate-180"
                    />
                </div>
            </div>

            <div className="w-full h-full flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-lucky w-full max-w-[90%] xl:max-w-[70%] mt-4 md:mb-8 py-2">
                    <p className="w-fit">
                        <span className="text-[#5E4B56]">P</span>
                        <span className="text-[#2F3E5C]">u</span>
                        <span className="text-[#4A4A4A]">p </span>
                        <span className="text-[#5E4B56]">U</span>
                        <span className="text-[#4A4A4A]">p</span>
                        <span className="text-[#4A4A4A]">da</span>
                        <span className="text-[#2F3E5C]">t</span>
                        <span className="text-[#4A4A4A]">e</span>
                        <span className="text-[#5E4B56]">s</span>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row md:justify-center w-full max-w-[90%] gap-4 xl:max-w-[70%] my-10 mb-14 items-center">
                    <div className="w-full md:w-[45%] flex flex-row justify-center items-center gap-4 md:gap-4 mr-2">
                        <div className="w-[42%] h-auto">
                            <img
                                src="images/news/news-1.jpg"
                                className="w-full h-auto object-cover border-[0.6rem] shadow-2xl rotate-3 border-[#efefef]"
                            />
                        </div>
                        <div className="w-[42%] h-auto">
                            <img
                                src="images/news/news-2.jpg"
                                className="w-full h-auto object-cover border-[0.6rem] shadow-2xl -rotate-6 border-[#efefef]"
                            />
                        </div>
                    </div>

                    <div className="sm:max-w-lg md:max-w-[40%] flex flex-col justify-center md:items-start ml-4 mt-8 md:mt-0">
                        <h2 className="text-3xl md:text-4xl w-full font-bold mb-5 leading-snug text-[#2F3E5C]">
                            Stay updated on every rescue story.
                        </h2>
                        <p className="text-md md:text-lg w-full mb-4 text-[#4A4A4A]">
                            Follow our real-time feed to see when an animal is
                            rescued, taken for treatment, cared for at the
                            shelter, and finally healed and released. Celebrate
                            every milestone in their journey from rescue to
                            recovery.
                        </p>
                    </div>
                </div>

                <Link
                    to="/news"
                    className="flex flex-col justify-center item-center mb-20 w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
                >
                    <button className="button-cute md:text-lg px-10 py-4 w-full font-semibold bg-orange-400 mb-1">
                        Check feed
                    </button>
                </Link>
            </div>

            <div
                className="w-full h-full flex flex-col items-center"
                id="sponsor-meal-section"
            >
                <div className="w-[100vw] bg-transparent -mb-1">
                    <img
                        src="images/paper.png"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full h-full flex flex-col items-center bg-[#FDFDFD]">
                    <div className="text-5xl md:text-6xl font-lucky w-full max-w-[90%] xl:max-w-[70%] mt-8 md:mb-8 py-2">
                        <p className="w-fit">
                            <span className="text-[#5E4B56]">S</span>
                            <span className="text-[#2F3E5C]">p</span>
                            <span className="text-[#4A4A4A]">o</span>
                            <span className="text-[#5E4B56]">ns</span>
                            <span className="text-[#4A4A4A]">o</span>
                            <span className="text-[#4A4A4A]">r </span>
                            <span className="text-[#2F3E5C]">A </span>
                            <span className="text-[#4A4A4A]">M</span>
                            <span className="text-[#5E4B56]">e</span>
                            <span className="text-[#4A4A4A]">a</span>
                            <span className="text-[#2F3E5C]">l</span>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-center w-full max-w-[90%] gap-4 xl:max-w-[70%] my-6 mb-10 items-center">
                        <div className="sm:max-w-lg md:max-w-[40%] flex flex-col justify-center md:items-start ml-4 mt-8 md:mt-0">
                            <h2 className="text-3xl md:text-4xl w-full font-bold mb-5 leading-snug text-[#2F3E5C]">
                                Sponsor a day's meal for everyone at the
                                shelter.
                            </h2>
                            <p className="text-md md:text-lg w-full mb-4 text-[#4A4A4A]">
                                By sponsoring a day's meal, you'll be providing
                                essential nutrition to our furry friends. Plus,
                                you'll have the opportunity to visit during
                                feeding time and see the impact of your
                                generosity firsthand! You can choose a date that
                                suits you to sponsor a meal.
                            </p>
                        </div>

                        <div className="w-full md:w-[45%] flex flex-row justify-center items-center gap-4 md:gap-4 mr-2">
                            <div className="w-[42%] h-auto">
                                <img
                                    src="images/meal/meal-1.png"
                                    className="w-full h-auto object-cover border-[0.6rem] shadow-2xl -rotate-2 border-[#efefef]"
                                />
                            </div>
                            <div className="w-[42%] h-auto">
                                <img
                                    src="images/meal/meal-2.jpg"
                                    className="w-full h-auto object-cover border-[0.6rem] shadow-2xl rotate-6 border-[#efefef]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-center w-full max-w-[90%] gap-4 xl:max-w-[70%] mb-10 items-center">
                        <div className="sm:max-w-lg w-[90%] md:max-w-[40%] flex flex-col justify-center md:items-end md:order-1 order-2">
                            <h3 className="text-[#5E4B56] font-bold w-full text-lg uppercase tracking-wide">
                                Option 1
                            </h3>
                            <p className="text-md md:text-lg w-full md:mb-4 text-[#4A4A4A]">
                                ₹{stats.meal1p} for {stats.meal1}
                            </p>
                        </div>

                        <div className="sm:max-w-lg w-[90%] md:max-w-[45%] flex flex-col justify-center md:items-end md:order-1 order-2">
                            <h3 className="text-[#5E4B56] font-bold w-full text-lg uppercase tracking-wide">
                                Option 2
                            </h3>
                            <p className="text-md md:text-lg w-full md:mb-4 text-[#4A4A4A]">
                                ₹{stats.meal2p} for {stats.meal2}
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/#footer-section"
                        className="flex flex-col justify-center item-center mb-20 w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
                    >
                        <button className="button-cute md:text-lg px-10 py-4 w-full font-semibold bg-orange-400 mb-1">
                            Donate meals
                        </button>
                        <p className="text-sm md:text-md text-[#4A4A4A]">
                            *Contact us to schedule your sponsorship and visit
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
