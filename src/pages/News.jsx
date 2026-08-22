import React, { useEffect, useState, useRef } from "react";

const GITHUB_JSON_URL =
    "https://raw.githubusercontent.com/atulksingh26/json-static-hosting/main/hfa-feed.json";

export default function News() {
    const [feeds, setFeeds] = useState([]);
    const [error, setError] = useState("");
    const [selectedFeed, setSelectedFeed] = useState(null);
    const cardRef = useRef();

    useEffect(() => {
        async function fetchFeeds() {
            try {
                const res = await fetch(GITHUB_JSON_URL);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setFeeds([...data]);
            } catch (err) {
                setError("Failed to load feeds. Please try again later.");
                console.error(err);
            }
        }
        fetchFeeds();
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setSelectedFeed(null);
            }
        }
        if (selectedFeed) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedFeed]);

    if (error) {
        return <div className="text-red-600 text-center mt-10">{error}</div>;
    }

    return (
        <div className="pt-6 w-full mx-auto min-h-[100vh]">
            <div className="flex items-center justify-center gap-4 mb-12 my-4 mx-4">
                <img
                    src="images/paw-print.webp"
                    alt="Paw icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <h1 className="text-4xl md:text-5xl font-semibold font-rampart text-gray-700 text-center">
                    Latest Pet News
                </h1>
                <img
                    src="images/paw-print.webp"
                    alt="Paw icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
            </div>

            <div className="flex flex-wrap gap-8 mx-6 justify-center mb-8">
                {feeds.map((feedItem, index) => {
                    const latestUpdate =
                        feedItem.feed?.[feedItem.feed.length - 1];
                    return (
                        <div
                            key={index}
                            onClick={() => setSelectedFeed(feedItem)}
                            className="relative cursor-pointer w-96 bg-white border-4 border-green-300 rounded-2xl flex flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.03] shadow-lg"
                        >
                            {feedItem.url && (
                                <img
                                    loading="lazy"
                                    src={feedItem.url}
                                    alt={`Rescue ${feedItem.id}`}
                                    className="w-full h-56 object-cover"
                                />
                            )}
                            <div className="p-4 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold text-gray-800 font-schoolbell mb-2">
                                    Rescue #{feedItem.id}
                                </h2>
                                <p className="text-gray-600 font-outfit mb-2">
                                    Rescued on: {feedItem.rescued_on}
                                </p>
                                {latestUpdate && (
                                    <p className="text-gray-500 font-outfit italic line-clamp-2">
                                        {latestUpdate.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedFeed && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
                    <div
                        ref={cardRef}
                        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-lg border-4 p-6 shadow-xl flex flex-col"
                    >
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h2 className="text-3xl font-bold font-rampart">
                                Rescue #{selectedFeed.id}
                            </h2>
                            <button
                                className="text-2xl font-bold text-red-600 hover:text-red-800"
                                onClick={() => setSelectedFeed(null)}
                            >
                                ✕
                            </button>
                        </div>
                        {selectedFeed.url && (
                            <div className="mb-4 flex justify-center">
                                <img
                                    src={selectedFeed.url}
                                    alt={selectedFeed.id}
                                    className="w-48 h-48 object-cover rounded-lg shadow-md border"
                                />
                            </div>
                        )}

                        <p className="text-gray-700 font-outfit mb-2">
                            Rescued on: {selectedFeed.rescued_on || "Unknown"}
                        </p>
                        {selectedFeed.released_on && (
                            <p className="text-gray-700 font-outfit mb-4">
                                Released on: {selectedFeed.released_on}
                            </p>
                        )}

                        <h3 className="text-xl font-bold font-outfit mb-3">
                            Updates
                        </h3>
                        <div className="space-y-3">
                            {selectedFeed.feed?.map((update, idx) => (
                                <div key={idx} className="border-b pb-2">
                                    <p className="text-sm text-gray-500">
                                        {update.date}
                                    </p>
                                    <p className="text-gray-700">
                                        {update.message}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
