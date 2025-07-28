import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    };

    return (
        <div className="w-full flex justify-around">
            <div className="flex flex-col justify-center items-center relative w-full h-[6rem]">
                <div className="flex w-full justify-center items-center bg-green-400">
                    <div className="flex gap-4 w-[70%] h-[2rem] text-black text-sm justify-between">
                        <div className="flex gap-4">
                            <div className="flex h-full items-center">
                                <img
                                    src="images/phone.png"
                                    className="h-[55%] mr-1"
                                />
                                <p className="h-fit">+91 7818037628</p>
                            </div>

                            <div className="flex h-full items-center">
                                <img
                                    src="images/mail.png"
                                    className="h-[55%] mr-1"
                                />
                                <p className="h-fit">
                                    hopeforanimalsrescue@gmail.com
                                </p>
                            </div>

                            <div className="flex h-full items-center">
                                <img
                                    src="images/location.png"
                                    className="h-[55%] mr-1"
                                />
                                <p className="h-fit">
                                    Dehradun, Uttarakhand, India
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <a
                                href="https://www.instagram.com/hopeforanimalsresq/"
                                target="_blank"
                            >
                                <img
                                    src="/images/instagram.png"
                                    alt="instagram"
                                    className="w-[1.1rem] h-[1.1rem] cursor-pointer"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/hopeforanimalsresq/"
                                target="_blank"
                            >
                                <img
                                    src="/images/facebook.png"
                                    alt="facebook"
                                    className="w-[1.3rem] h-[1.3rem] cursor-pointer"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/@hopeforanimalsrescue"
                                target="_blank"
                            >
                                <img
                                    src="/images/youtube.png"
                                    alt="youtube"
                                    className="w-[1.4rem] h-[1.4rem] cursor-pointer"
                                />
                            </a>

                            <div className="h-full w-[8rem] bg-orange-400 flex justify-center items-center text-[1rem] text-white hover:text-black cursor-pointer delay-50">
                                Donate Now
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[70%] h-[4rem]">
                    <div className="flex gap-10 h-full items-center text-lg justify-end mr-4">
                        <HashLink smooth to="/#about-us-section">
                            About Us
                        </HashLink>
                        <HashLink smooth to="/#sponsor-meal-section">
                            Sponsor a meal
                        </HashLink>
                        <HashLink to="/gallery">Gallery</HashLink>
                        <HashLink to="/adoptions">Adoptions</HashLink>
                    </div>
                    {/* <div></div> Dog pic in nav */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
