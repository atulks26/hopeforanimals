import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const handleHome = () => {
        navigate("/");
        setMenuOpen(false);
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="w-full fixed top-0 left-0 z-50 bg-white border-b-2">
            {/* Top bar */}
            <div className="w-full bg-[#012F50] overflow-x-auto">
                <div className="flex flex-nowrap justify-between items-center gap-4 w-full max-w-[1440px] px-2 mx-auto text-sm text-white">
                    {/* Contact info */}
                    <div className="flex flex-nowrap items-center gap-4 sm:gap-6 min-w-0 overflow-hidden">
                        {/* Phone */}
                        <div className="flex items-center shrink-0 whitespace-nowrap">
                            <img
                                src="images/phone.png"
                                className="h-4 mr-1 shrink-0"
                            />
                            <p className="whitespace-nowrap">+91 7818037628</p>
                        </div>
                        {/* Email */}
                        <div className="flex items-center shrink-0 whitespace-nowrap min-w-0">
                            <img
                                src="images/mail.png"
                                className="h-4 mr-1 shrink-0"
                            />
                            <p className="whitespace-nowrap">
                                hopeforanimalsrescue@gmail.com
                            </p>
                        </div>
                        {/* Location */}
                        <div className="hidden md:flex items-center shrink-0 whitespace-nowrap">
                            <img
                                src="images/location.png"
                                className="h-4 mr-1 shrink-0"
                            />
                            <p className="whitespace-nowrap">
                                Dehradun, Uttarakhand, India
                            </p>
                        </div>
                        <div className="hidden sm:flex md:hidden items-center shrink-0 whitespace-nowrap">
                            <img
                                src="images/location.png"
                                className="h-4 mr-1 shrink-0"
                            />
                            <p className="whitespace-nowrap">
                                Dehradun, UK, India
                            </p>
                        </div>
                    </div>

                    {/* Social + Donate */}
                    <div className="flex gap-2 items-center ml-auto shrink-0">
                        {/* Social icons - hidden below lg */}
                        <div className="hidden lg:flex gap-2 items-center">
                            <a
                                href="https://www.instagram.com/hopeforanimalsresq/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/instagram.png"
                                    alt="instagram"
                                    className="w-4 h-4 invert"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/hopeforanimalsresq/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/facebook.png"
                                    alt="facebook"
                                    className="w-5 h-5 invert"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/@hopeforanimalsrescue"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/youtube.png"
                                    alt="youtube"
                                    className="w-5 h-5 invert"
                                />
                            </a>
                        </div>

                        <HashLink
                            smooth
                            to="/#footer-section"
                            className="bg-orange-400 text-black px-4 py-1 hover:text-black text-sm whitespace-nowrap"
                            onClick={() => setMenuOpen(false)}
                        >
                            Donate Now
                        </HashLink>
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <div className="w-full flex items-center justify-between px-4 py-2 max-w-[1440px] mx-auto">
                <div
                    className="h-14 w-24 flex items-center cursor-pointer"
                    onClick={handleHome}
                >
                    <img
                        src="images/logo2.jpeg"
                        alt="Logo"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden relative z-60 flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span
                        className={`block h-1 w-full bg-black rounded transition-transform duration-300 ease-in-out ${
                            menuOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`block h-1 w-full bg-black rounded my-1 transition-opacity duration-300 ease-in-out ${
                            menuOpen ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span
                        className={`block h-1 w-full bg-black rounded transition-transform duration-300 ease-in-out ${
                            menuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>

                {/* Desktop menu */}
                <nav className="hidden md:flex flex-wrap justify-end items-center gap-4 md:gap-6 text-base md:text-lg flex-grow overflow-hidden">
                    <HashLink
                        smooth
                        to="/#about-us-section"
                        className="hover:bg-orange-400 hover:text-white px-3 py-2 transition-all rounded whitespace-nowrap"
                    >
                        About Us
                    </HashLink>
                    <HashLink
                        smooth
                        to="/#sponsor-meal-section"
                        className="hover:bg-orange-400 hover:text-white px-3 py-2 transition-all rounded whitespace-nowrap"
                    >
                        Sponsor a meal
                    </HashLink>
                    <HashLink
                        to="/gallery"
                        className="hover:bg-orange-400 hover:text-white px-3 py-2 transition-all rounded whitespace-nowrap"
                    >
                        Gallery
                    </HashLink>
                    <HashLink
                        to="/adoptions"
                        className="hover:bg-orange-400 hover:text-white px-3 py-2 transition-all rounded whitespace-nowrap"
                    >
                        Adoptions
                    </HashLink>
                </nav>
            </div>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out ${
                    menuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={closeMenu}
            />

            {/* Mobile menu */}
            <nav
                className={`fixed top-[calc(6rem+48px)] right-0 left-0 bg-white shadow-md transition-transform duration-300 ease-in-out z-50
                ${
                    menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-full opacity-0 pointer-events-none"
                }
                md:hidden flex flex-col items-center gap-4 py-6`}
            >
                <HashLink
                    smooth
                    to="/#about-us-section"
                    className="block w-full text-center px-6 py-3 hover:bg-orange-400 hover:text-white rounded"
                    onClick={closeMenu}
                >
                    About Us
                </HashLink>
                <HashLink
                    smooth
                    to="/#sponsor-meal-section"
                    className="block w-full text-center px-6 py-3 hover:bg-orange-400 hover:text-white rounded"
                    onClick={closeMenu}
                >
                    Sponsor a meal
                </HashLink>
                <HashLink
                    to="/gallery"
                    className="block w-full text-center px-6 py-3 hover:bg-orange-400 hover:text-white rounded"
                    onClick={closeMenu}
                >
                    Gallery
                </HashLink>
                <HashLink
                    to="/adoptions"
                    className="block w-full text-center px-6 py-3 hover:bg-orange-400 hover:text-white rounded"
                    onClick={closeMenu}
                >
                    Adoptions
                </HashLink>
            </nav>
        </div>
    );
};

export default Navbar;
