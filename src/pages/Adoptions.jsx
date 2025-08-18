import React, { useEffect, useState, useRef } from "react";

const GITHUB_JSON_URL =
    "https://raw.githubusercontent.com/atulksingh26/json-static-hosting/main/hfa-adoptions.json";

export default function Adoptions() {
    const [adoptions, setAdoptions] = useState([]);
    const [error, setError] = useState("");
    const [selectedAdoption, setSelectedAdoption] = useState(null);
    const cardRef = useRef();

    useEffect(() => {
        async function fetchAdoptions() {
            try {
                const res = await fetch(GITHUB_JSON_URL);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                const data2 = [...data];
                setAdoptions(data2);
            } catch (err) {
                setError("Failed to load adoptions. Please try again later.");
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
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedAdoption]);

    if (error)
        return <div className="text-red-600 text-center mt-10">{error}</div>;

    return (
        <div className="pt-6 w-full mx-auto min-h-[100vh]">
            {/* Header section */}
            <div className="flex items-center justify-center gap-4 mb-8">
                <img
                    src="images/paw-print.png"
                    alt="paw1"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <h1 className="text-4xl md:text-5xl font-semibold font-rampart text-gray-700">
                    Adoptions
                </h1>
                <img
                    src="images/paw-print.png"
                    alt="paw2"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
            </div>

            {/* Grid for adoption cards */}
            <div className="flex flex-wrap gap-8 mx-6 justify-center mb-8">
                {adoptions.map((adoption, index) => {
                    const borderColor =
                        adoption.gender.toLowerCase() === "male"
                            ? "border-blue-400"
                            : "border-pink-400";
                    const genderEmoji =
                        adoption.gender.toLowerCase() === "male" ? "♂️" : "♀️";
                    const ageUnit = adoption.age > 1 ? "Years" : "Year";

                    return (
                        <div
                            key={index}
                            onClick={() => setSelectedAdoption(adoption)}
                            className={`relative cursor-pointer w-96 bg-white ${borderColor} border-4 rounded-2xl flex flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.03] shadow-lg`}
                        >
                            <img
                                src="images/watermark.png"
                                className="absolute inset-0 w-full h-full object-contain opacity-5 -z-0"
                                alt="watermark"
                            />

                            <div className="absolute top-1 left-0 text-3xl bg-white bg-opacity-70 rounded-full px-1">
                                {genderEmoji}
                            </div>

                            <div className="p-4 z-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 mb-4">
                                    <div
                                        className={`w-24 h-24 rounded-full overflow-hidden border-2 ${borderColor} flex-shrink-0`}
                                    >
                                        <img
                                            src={adoption.url}
                                            alt={adoption.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    {/* Name, Age, and Note */}
                                    <div className="font-outfit">
                                        <p className="font-bold text-gray-500">
                                            Name:
                                            <span className="font-schoolbell text-3xl ml-2 text-gray-800 capitalize">
                                                {adoption.name}
                                            </span>
                                        </p>
                                        <p className="font-bold text-gray-500 mt-1">
                                            Age:
                                            <span className="font-schoolbell text-2xl ml-2 text-gray-800">
                                                {adoption.age} {ageUnit}
                                            </span>
                                        </p>
                                        <p className="font-bold text-gray-500 mt-1">
                                            Note:
                                            <span className="font-schoolbell text-xl ml-2 text-gray-800">
                                                {adoption.note
                                                    ? adoption.note
                                                    : "Waiting for a new home"}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Section: Description */}
                                <div className="flex-grow">
                                    <p className="font-outfit font-bold text-gray-500">
                                        About:
                                        <span className="font-schoolbell text-lg ml-2 text-gray-700 font-normal block mt-1">
                                            {adoption.desc}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Modal for displaying detailed pet info */}
            {selectedAdoption && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
                    <div
                        ref={cardRef}
                        className="w-full max-w-2xl bg-white rounded-lg border-4 p-6 shadow-xl flex flex-col"
                    >
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h2 className="text-3xl font-bold font-rampart">
                                Pet Info
                            </h2>
                            <button
                                className="text-2xl font-bold text-red-600 hover:text-red-800"
                                onClick={() => setSelectedAdoption(null)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="sm:w-[35%] flex justify-center items-start">
                                <img
                                    src={selectedAdoption.url}
                                    className="w-full h-auto rounded-lg shadow-md border-2"
                                    alt="pet-photo"
                                />
                            </div>
                            <div className="sm:w-[65%] flex flex-col gap-4">
                                <p>
                                    <strong className="text-green-700 font-outfit text-lg">
                                        Name:
                                    </strong>
                                    <span className="font-schoolbell text-2xl ml-2 text-gray-800">
                                        {selectedAdoption.name}
                                    </span>
                                </p>
                                <p>
                                    <strong className="text-green-700 font-outfit text-lg">
                                        Age:
                                    </strong>
                                    <span className="font-schoolbell text-2xl ml-2 text-gray-800">
                                        {selectedAdoption.age}{" "}
                                        {selectedAdoption.age > 1
                                            ? "Years"
                                            : "Year"}
                                    </span>
                                </p>
                                <p>
                                    <strong className="text-green-700 font-outfit text-lg">
                                        Gender:
                                    </strong>
                                    <span className="font-schoolbell text-2xl ml-2 text-gray-800 capitalize">
                                        {selectedAdoption.gender}
                                    </span>
                                </p>
                                <p>
                                    <strong className="text-green-700 font-outfit text-lg">
                                        About:
                                    </strong>
                                    <span className="font-schoolbell text-xl ml-1 block mt-1 text-gray-700">
                                        {selectedAdoption.desc}
                                    </span>
                                </p>
                                <p>
                                    <strong className="text-green-700 font-outfit text-lg">
                                        Note:
                                    </strong>
                                    <span className="font-schoolbell text-xl ml-1 block mt-1 text-gray-700">
                                        {selectedAdoption.note}
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
