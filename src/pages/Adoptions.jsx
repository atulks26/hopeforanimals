import React, { useEffect, useState, useRef } from "react";

const GITHUB_JSON_URL =
    "https://raw.githubusercontent.com/atulks26/json-static-hosting/main/hfa-adoptions.json";

export default function Adoptions() {
    const [adoptions, setAdoptions] = useState([]);
    const [error, setError] = useState("");
    const [selectedAdoption, setSelectedAdoption] = useState(null);
    const cardRef = useRef();

    useEffect(() => {
        async function fetchAdoptions() {
            try {
                const res = await fetch(GITHUB_JSON_URL);
                const data = await res.json();
                setAdoptions(data);
            } catch (err) {
                setError("Failed to load adoptions.");
                console.error(err);
            }
        }
        fetchAdoptions();
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setSelectedAdoption(null);
            }
        }

        if (selectedAdoption) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedAdoption]);

    if (error)
        return <div className="text-red-600 text-center mt-10">{error}</div>;

    const borderColors = [
        "border-pink-300",
        "border-purple-300",
        "border-blue-300",
        "border-teal-300",
        "border-green-300",
        "border-yellow-300",
        "border-rose-300",
        "border-cyan-300",
        "border-lime-300",
        "border-fuchsia-300",
        "border-violet-300",
        "border-amber-300",
    ];

    const bgColors = [
        "bg-pink-100",
        "bg-purple-100",
        "bg-blue-100",
        "bg-teal-100",
        "bg-green-100",
        "bg-yellow-100",
        "bg-rose-100",
        "bg-cyan-100",
        "bg-lime-100",
        "bg-fuchsia-100",
        "bg-violet-100",
        "bg-amber-100",
    ];

    return (
        <div className="w-full flex flex-col">
            <div className="my-8 flex items-center justify-center">
                <p className="text-4xl">Adoptions</p>
            </div>

            <div className="flex flex-wrap gap-4 mx-6 justify-center">
                {adoptions.map((adoption, index) => {
                    const border = borderColors[index % borderColors.length];
                    const bg = bgColors[index % bgColors.length];

                    return (
                        <div
                            key={index}
                            onClick={() => setSelectedAdoption(adoption)}
                            className={`cursor-pointer w-[19%] h-[16rem] ${border} border-4 rounded-2xl flex flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.02]`}
                        >
                            <div
                                className={`w-full h-[16%] ${bg} flex justify-center items-center gap-2 ${border} border-b-2 border-dashed`}
                            >
                                <img
                                    src="images/paw-print.png"
                                    alt="paw1"
                                    className="h-[86%]"
                                />
                                <p className="font-rampart text-2xl">PET ID</p>
                                <img
                                    src="images/paw-print.png"
                                    alt="paw2"
                                    className="h-[86%]"
                                />
                            </div>
                            <div className="relative w-full h-[76%] flex items-center bg-orange-100">
                                <img
                                    src="images/watermark.png"
                                    className="absolute left-[36%] opacity-10"
                                />
                                <div className="flex w-[40%] h-full justify-center items-center">
                                    <div
                                        className={`w-full mx-[1rem] h-[80%] ${border} border-2 overflow-hidden`}
                                    >
                                        <img
                                            src="images/dog-sit.jpg"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="w-[60%] h-[80%] mr-[1rem] font-outfit font-light">
                                    <div className="w-full h-[20%]">
                                        <p className="font-outfit">
                                            Name:{" "}
                                            <span className="font-schoolbell text-xl ml-1">
                                                {adoption.name}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-[20%]">
                                        <p className="">
                                            Age:{" "}
                                            <span className="font-schoolbell text-xl ml-1">
                                                {adoption.age}{" "}
                                                {adoption.age >= 1
                                                    ? "yo"
                                                    : "mo"}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-[60%] flex">
                                        <p className="font-outfit">
                                            About:{" "}
                                            <span className="font-schoolbell text-xl ml-1 line-clamp-2">
                                                A really long description about
                                                the dog to test the text wrap of
                                                the adoption card
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`w-full h-[8%] ${bg} flex justify-center items-center gap-2 ${border} border-t-2 border-dashed`}
                            ></div>
                        </div>
                    );
                })}
            </div>

            {selectedAdoption && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div
                        ref={cardRef}
                        className="w-[40rem] bg-white rounded-lg border-4 p-4 shadow-xl flex flex-col"
                    >
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h2 className="text-2xl font-bold">
                                Adoption Details
                            </h2>
                            <button
                                className="text-xl font-bold text-red-600"
                                onClick={() => setSelectedAdoption(null)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="flex">
                            <img
                                src="images/dog-sit.jpg"
                                className="h-60 w-60 object-cover border mr-4"
                                alt="dog"
                            />
                            <div className="flex flex-col gap-2">
                                <p>
                                    <strong className="text-green-600">
                                        Name:
                                    </strong>{" "}
                                    <span className="font-schoolbell text-xl ml-1">
                                        {selectedAdoption.name}
                                    </span>
                                </p>
                                <p>
                                    <strong className="text-green-600">
                                        Age:
                                    </strong>{" "}
                                    <span className="font-schoolbell text-xl ml-1">
                                        {selectedAdoption.age}{" "}
                                        {selectedAdoption.age >= 1
                                            ? "yo"
                                            : "mo"}
                                    </span>
                                </p>
                                <p>
                                    <strong className="text-green-600">
                                        About:
                                    </strong>{" "}
                                    <span className="font-schoolbell text-xl ml-1">
                                        Full description goes here for the
                                        selected dog. You can extend this
                                        content as needed.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
