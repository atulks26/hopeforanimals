import React, { useEffect, useState } from "react";

const GITHUB_JSON_URL =
    "https://raw.githubusercontent.com/atulks26/json-static-hosting/main/hfa-adoptions.json";

export default function Adoptions() {
    const [adoptions, setAdoptions] = useState([]);
    const [error, setError] = useState("");
    const [selectedAdoption, setSelectedAdoption] = useState(null);

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

    function shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    const shuffledColors = shuffleArray(borderColors);

    const getBorderColor = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        return shuffledColors[Math.abs(hash) % borderColors.length];
    };

    return (
        <div className="w-full flex flex-col">
            <div className="my-8 flex items-center justify-center">
                <p className="text-4xl">Adoptions</p>
            </div>

            {selectedAdoption && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
                    onClick={() => setSelectedAdoption(null)}
                >
                    <div
                        className={`bg-white p-6 shadow-xl w-[90%] max-w-md border-4 ${selectedAdoption.borderColorClass}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedAdoption.url}
                            alt={selectedAdoption.name}
                            className="h-60 w-full object-cover"
                        />
                        <h2 className="mt-4 text-2xl font-bold text-black">
                            {selectedAdoption.name
                                .split(" ")
                                .map(
                                    (word) =>
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                                )
                                .join(" ")}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            {selectedAdoption.age}{" "}
                            {selectedAdoption.age > 1
                                ? "years old"
                                : "year old"}
                        </p>
                        <p className="text-sm text-gray-700 mt-3">
                            {selectedAdoption.desc}
                        </p>
                    </div>
                </div>
            )}

            <div className="m-auto w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6">
                {adoptions.map((adoption, key) => {
                    const borderColorClass = getBorderColor(adoption.url);

                    return (
                        <div
                            key={key}
                            className={`bg-white shadow-md overflow-hidden flex flex-col cursor-pointer border-4 ${borderColorClass}`}
                            onClick={() =>
                                setSelectedAdoption({
                                    ...adoption,
                                    borderColorClass,
                                })
                            }
                        >
                            <img
                                src={adoption.url}
                                alt={adoption.name}
                                className="h-40 w-full object-cover"
                            />
                            <div className="p-3 text-left">
                                <h2 className="text-lg font-semibold text-black">
                                    {adoption.name
                                        .split(" ")
                                        .map(
                                            (word) =>
                                                word.charAt(0).toUpperCase() +
                                                word.slice(1)
                                        )
                                        .join(" ")}
                                </h2>

                                <p className="text-sm text-gray-500">
                                    {adoption.age}{" "}
                                    {adoption.age > 1
                                        ? "years old"
                                        : "year old"}
                                </p>

                                <p className="text-sm text-gray-700 line-clamp-2">
                                    {adoption.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
