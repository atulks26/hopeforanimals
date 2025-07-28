import Cards from "./StoryCard";
import GalleryPreview from "./GalleryPreview";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <section
            id="about-us-section"
            className="w-full flex flex-col justify-center items-center"
        >
            <div className="whoarewe flex w-[70%] h-[40rem] mt-10 py-10 justify-center items-center">
                <div className="textpart w-[50%] flex flex-col justify-center items-center">
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
                <div className="w-[50%] flex justify-center items-center">
                    <img
                        src="images/unnamed.jpg"
                        className="w-[36rem] h-[28rem] object-cover"
                    />
                </div>
            </div>

            <div className="whatwedo flex w-[70%] h-[40rem] mt-10 py-10 justify-center items-center">
                <div className="w-[50%] flex justify-center items-center">
                    <img
                        src="images/unnamed.jpg"
                        className="w-[36rem] h-[28rem] object-cover"
                    />
                </div>
                <div className="textpart w-[50%] flex flex-col justify-center items-center">
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
            </div>

            <div className="howitstarted flex w-[70%] h-[40rem] mt-10 py-10 justify-center items-center">
                <div className="textpart w-[50%] flex flex-col justify-center items-center">
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
                <div className="w-[50%] flex justify-center items-center">
                    <img
                        src="images/unnamed.jpg"
                        className="w-[36rem] h-[28rem] object-cover"
                    />
                </div>
            </div>

            <div className="w-full h-20vh flex flex-col justify-center items-center mb-10">
                <div className="h-16 text-5xl flex justify-start items-center font-bold text-emerald-500 w-[70%]">
                    <div className="w-[50%] flex justify-center">
                        <p className="w-[80%]">Success Stories</p>
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
                <div className="h-[50%] w-full flex justify-evenly items-center mb-20">
                    <div className="flex flex-col py-10 px-5 bg-white rounded-2xl shadow-md w-[15%] items-center">
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
                        <p className="text-sm text-gray-400 font-medium">
                            One single line to describe
                        </p>
                    </div>
                    <div className="flex flex-col py-10 px-5 bg-white rounded-2xl shadow-md w-[15%] items-center">
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
                    <div className="flex flex-col py-10 px-5 bg-white rounded-2xl shadow-md w-[15%] items-center">
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
                        <p className="text-sm text-gray-400 font-medium">
                            asdasdad
                        </p>
                    </div>
                    <div className="flex flex-col py-10 px-5 bg-white rounded-2xl shadow-md w-[15%] items-center">
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
                        <p className="text-sm text-gray-400 font-medium">
                            sadasdasd
                        </p>
                    </div>
                </div>
            </div>

            <GalleryPreview />

            <div className="w-full h-20vh flex flex-col justify-center items-center mb-10">
                <div className="h-16 text-4xl flex justify-start items-center font-bold text-emerald-500 w-[70%] mb-10">
                    <div className="w-[50%] flex justify-center">
                        <p className="w-[80%]">Adoptions</p>
                    </div>
                </div>
                <div className="flex justify-start items-center font-bold w-[70%] mb-10">
                    <div className="w-[50%] flex flex-col items-center">
                        <p className="text-5xl w-[80%]">
                            Find your new Furever Furry Friend.
                        </p>
                        <p className="text-lg w-[80%] font-normal mt-4 px-1">
                            Maybe you'll find the love of your life here instead
                            of a club...
                        </p>
                    </div>
                    <div className="flex justify-center items-center w-[50%]">
                        <img src="images/unnamed.jpg" />
                    </div>
                </div>
                <div className="flex w-[70%] justify-start">
                    <div className="w-[50%] flex justify-center">
                        <Link to={"/adoptions"} className="w-[80%]">
                            <button className="px-10 py-6 w-full bg-orange-400 text-xl active:text-white">
                                EXPLORE ADOPTIONS
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div
                id="sponsor-meal-section"
                className="w-full h-20vh flex flex-col justify-center items-center mb-10"
            >
                <div className="h-16 text-4xl flex justify-start items-center font-bold text-emerald-500 w-[70%] mb-10">
                    <div className="w-[50%] flex justify-center">
                        <p className="w-[80%]">Sponsor A Meal</p>
                    </div>
                </div>
                <div className="flex justify-start items-center font-bold w-[70%] mb-10">
                    <div className="flex justify-center items-center w-[50%]">
                        <img src="images/unnamed.jpg" />
                    </div>
                    <div className="w-[50%] flex flex-col items-center">
                        <p className="text-5xl w-[80%]">
                            Feed the shelter babies!
                        </p>
                        <p className="text-lg w-[80%] font-normal mt-4 px-1">
                            <span className="font-semibold">Option 1:</span>{" "}
                            ₹1500 for 2 meals (Breakfast + Dinner)
                        </p>
                        <p className="text-lg w-[80%] font-normal px-1">
                            <span className="font-semibold">Option 1:</span>{" "}
                            ₹2000 for 2 meals (Breakfast + Dinner) + Snacks
                        </p>

                        <p className="text-md w-[80%] font-normal mt-4 px-1">
                            By sponsoring a day's meal, you'll be providing
                            essential nutrition to our furry friends. Plus,
                            you'll have the opportunity to visit during feeding
                            time and see the impact of your generosity
                            firsthand! You can choose a date that suits you to
                            sponsor a meal. Contact us to learn more and
                            schedule your sponsorship today!
                        </p>
                    </div>
                </div>
                <div className="flex w-[70%] justify-end">
                    <div className="w-[50%] flex justify-center">
                        <Link to={"/"} className="w-[80%]">
                            <button className="px-10 py-6 w-full bg-orange-400 text-xl active:text-white">
                                DONATE
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
