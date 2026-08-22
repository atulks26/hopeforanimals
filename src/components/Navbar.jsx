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
            <div className="w-full bg-[#2F3E5C] overflow-x-auto">
                <div className="flex flex-nowrap justify-between items-center gap-4 w-full max-w-[1440px] px-2 mx-auto text-sm text-white">
                    <div className="flex flex-nowrap items-center gap-4 sm:gap-6 min-w-0 overflow-hidden">
                        <div className="flex items-center shrink-0 whitespace-nowrap">
                            <img
                                src="images/phone.webp"
                                className="h-4 mr-1 shrink-0"
                                alt="Phone icon"
                            />
                            <p className="whitespace-nowrap">+91 7818037628</p>
                        </div>

                        <div className="flex items-center shrink-0 whitespace-nowrap min-w-0 max-[520px]:hidden">
                            <img
                                src="images/mail.webp"
                                className="h-4 mr-1 shrink-0"
                                alt="Email icon"

                            />
                            <p className="whitespace-nowrap">
                                hopeforanimalsrescue@gmail.com
                            </p>
                        </div>

                        <div className="hidden sm:flex items-center shrink-0 whitespace-nowrap">
                            <img
                                src="images/location.webp"
                                className="h-4 mr-1 shrink-0"
                                alt="Location icon"
                            />
                            <p className="hidden md:flex whitespace-nowrap">
                                Dehradun, Uttarakhand, India
                            </p>
                            <p className="hidden sm:flex md:hidden whitespace-nowrap">
                                Dehradun, UK, India
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center ml-auto shrink-0">
                        <div className="hidden lg:flex gap-2 items-center">
                            <a
                                href="https://www.instagram.com/hopeforanimalsresq/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/instagram.webp"
                                    alt="Instagram icon"
                                    className="w-4 h-4 invert"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/hopeforanimalsresq/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/facebook.webp"
                                    alt="Facebook icon"
                                    className="w-5 h-5 invert"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/@hopeforanimalsrescue"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/youtube.webp"
                                    alt="YouTube icon"
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

            <div className="w-full flex items-center justify-between px-4 py-2 max-w-[1440px] mx-auto">
                <div
                    className="h-14 w-24 flex items-center cursor-pointer"
                    onClick={handleHome}
                >
                    <img
                        src="images/logo2.webp"
                        alt="Hope For Animals Logo Cropped"
                        className="w-full h-full object-contain"
                    />
                </div>

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

                <nav className="hidden md:flex flex-wrap justify-end items-center gap-4 md:gap-6 text-base md:text-lg flex-grow overflow-hidden">
                    {[
                        { label: "About Us", to: "/#about-us-section" },
                        { label: "News", to: "/news" },
                        {
                            label: "Sponsor a meal",
                            to: "/#donate-meals",
                        },
                        { label: "Gallery", to: "/gallery" },
                        { label: "Adoptions", to: "/adoptions" },
                    ].map(({ label, to }) => (
                        <HashLink
                            key={label}
                            smooth
                            to={to}
                            className="relative px-3 py-2 transition-all active:duration-0 duration-200 rounded-sm text-zinc-800 active:text-white hover:bg-[#B0D0E8] hover:shadow-md active:scale-95 whitespace-nowrap"
                        >
                            {label}
                        </HashLink>
                    ))}
                </nav>
            </div>

            <div
                className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out ${
                    menuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={closeMenu}
            />

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
                    to="/news"
                    className="block w-full text-center px-6 py-3 hover:bg-orange-400 hover:text-white rounded"
                    onClick={closeMenu}
                >
                    News
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
