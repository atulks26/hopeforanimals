const AdoptionCamp = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[90%] md:w-[70%] h-full flex items-center">
                <div className="w-full h-full flex flex-col">
                    <p className="text-2xl md:text-3xl font-semibold mb-10 text-[#346E8F] uppercase">
                        Adoption Camps
                    </p>
                    <div className="h-[50%] md:hidden flex flex-col items-center justify-center">
                        <div className="flex justify-center">
                            <div className="h-full w-[45%] flex aspect-[2/3]">
                                <img
                                    src="images/adoption-camps/1.jpg"
                                    alt="1"
                                    className="h-full w-full object-cover border-[#7A9EBA] border-4 -rotate-6"
                                />
                            </div>
                            <div className="h-full w-[45%] flex aspect-[2/3]">
                                <img
                                    src="images/adoption-camps/2.jpg"
                                    alt="2"
                                    className="h-full w-full object-cover border-[#8CAAC9] border-4 rotate-6"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="h-full w-[35%] flex aspect-[2/3]">
                                <img
                                    src="images/adoption-camps/3.jpg"
                                    alt="3"
                                    className="h-full w-full object-cover border-[#A4BFD6] border-4 -rotate-6"
                                />
                            </div>
                            <div className="h-full w-[35%] flex aspect-[2/3]">
                                <img
                                    src="images/adoption-camps/4.jpg"
                                    alt="4"
                                    className="h-full w-full object-cover border-[#7A9EBA] border-4 rotate-6"
                                />
                            </div>
                            <div className="h-full w-[35%] flex aspect-[2/3]">
                                <img
                                    src="images/adoption-camps/5.jpg"
                                    alt="5"
                                    className="h-full w-full object-cover border-[#A4BFD6] border-4 -rotate-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-[50%] hidden md:flex justify-center">
                        <div className="h-full w-[18%] flex aspect-[2/3]">
                            <img
                                src="images/adoption-camps/1.jpg"
                                alt="1"
                                className="h-full w-full object-cover border-[#7A9EBA] border-4 -rotate-6"
                            />
                        </div>
                        <div className="h-full w-[18%] flex aspect-[2/3]">
                            <img
                                src="images/adoption-camps/2.jpg"
                                alt="2"
                                className="h-full w-full object-cover border-[#8CAAC9] border-4 rotate-6"
                            />
                        </div>
                        <div className="h-full w-[18%] flex aspect-[2/3]">
                            <img
                                src="images/adoption-camps/3.jpg"
                                alt="3"
                                className="h-full w-full object-cover border-[#A4BFD6] border-4 -rotate-6"
                            />
                        </div>
                        <div className="h-full w-[18%] flex aspect-[2/3]">
                            <img
                                src="images/adoption-camps/4.jpg"
                                alt="4"
                                className="h-full w-full object-cover border-[#7A9EBA] border-4 rotate-6"
                            />
                        </div>
                        <div className="h-full w-[18%] flex aspect-[2/3]">
                            <img
                                src="images/adoption-camps/5.jpg"
                                alt="5"
                                className="h-full w-full object-cover border-[#A4BFD6] border-4 -rotate-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full mt-10 text-md md:text-xl text-gray-500">
                        <p>
                            Adoption camps are hosted regularly to encourage
                            adoptions, raise awareness, collect donations and
                            most importantly, help animals and humans find their
                            forever friends. These adoption camps have helped
                            over <strong>350 animals</strong> find loving homes.
                        </p>
                        <br />
                        <div className="flex gap-2 md:gap-4 items-center justify-between mb-4">
                            <p>
                                Check out our socials to get info on the next
                                adoption camp
                            </p>
                            <a
                                href="https://www.instagram.com/hopeforanimalsresq/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/images/instagram.png"
                                    alt="instagram"
                                    className="w-7 sm:w-6 sm:h-6"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdoptionCamp;
