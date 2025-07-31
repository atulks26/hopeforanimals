const TreePlantation = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[90%] md:w-[70%] h-full flex items-center">
                <div className="w-full h-full flex flex-col">
                    <p className="text-2xl md:text-3xl font-semibold mb-10 text-[#346E8F] uppercase">
                        Tree Plantation Drive
                    </p>
                    <div className="h-[50%] md:hidden flex flex-col items-center justify-center">
                        <div className="flex justify-center">
                            <div className="h-full w-[35%] flex aspect-[2/3]">
                                <img
                                    src="images/tree-plantation/1.jpg"
                                    alt="1"
                                    className="h-full w-full object-cover border-[#7A9EBA] border-4 -rotate-6"
                                />
                            </div>
                            <div className="h-full w-[35%] flex aspect-[2/3]">
                                <img
                                    src="images/tree-plantation/2.jpg"
                                    alt="2"
                                    className="h-full w-full object-cover border-[#8CAAC9] border-4 rotate-6"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="h-full w-[25%] flex aspect-[2/3]">
                                <img
                                    src="images/tree-plantation/3.jpg"
                                    alt="3"
                                    className="h-full w-full object-cover border-[#A4BFD6] border-4 rotate-6"
                                />
                            </div>
                            <div className="h-full w-[25%] flex aspect-[2/3]">
                                <img
                                    src="images/tree-plantation/4.jpg"
                                    alt="4"
                                    className="h-full w-full object-cover border-[#7A9EBA] border-4 -rotate-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-[50%] hidden md:flex justify-center">
                        <div className="h-full w-[18%] flex aspect-[2/3]">
                            <img
                                src="images/tree-plantation/1.jpg"
                                alt="1"
                                className="h-full w-full object-cover border-[#7A9EBA] border-4 -rotate-6"
                            />
                        </div>
                        <div className="h-full w-[18%] flex aspect-[2/3]">
                            <img
                                src="images/tree-plantation/2.jpg"
                                alt="2"
                                className="h-full w-full object-cover border-[#8CAAC9] border-4 rotate-6"
                            />
                        </div>
                        <div className="h-full w-[18%] flex aspect-[2/3]">
                            <img
                                src="images/tree-plantation/3.jpg"
                                alt="3"
                                className="h-full w-full object-cover border-[#A4BFD6] border-4 -rotate-6"
                            />
                        </div>
                        <div className="h-full w-[18%] flex aspect-[2/3]">
                            <img
                                src="images/tree-plantation/4.jpg"
                                alt="4"
                                className="h-full w-full object-cover border-[#7A9EBA] border-4 rotate-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full mt-10 text-md md:text-xl text-gray-500 mb-4">
                        <p>
                            Volunteers helped in planting over{" "}
                            <strong>100 saplings</strong> during a dedicated
                            plantation drive organized to promote environmental
                            sustainability. The event not only contributed to
                            increasing the green cover but also encouraged
                            community participation in preserving nature for
                            future generations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreePlantation;
