import React, { useEffect, useState } from "react";

export default function Gallery() {
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const GITHUB_JSON_URL =
        "https://raw.githubusercontent.com/atulks26/json-static-hosting/main/hfa-images.json";

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch(GITHUB_JSON_URL);
                const data = await res.json();
                setImages(data.reverse());
            } catch (err) {
                setError("Failed to load gallery.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchImages();
    }, []);

    useEffect(() => {
        const handlePopState = () => {
            setSelectedImage(null);
        };

        if (selectedImage) {
            window.history.pushState({ preview: true }, "");
            window.addEventListener("popstate", handlePopState);
        }

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [selectedImage]);

    if (error)
        return <div className="text-red-600 text-center mt-10">{error}</div>;

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[100vh]">
                <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-cyan-600 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="p-6 md:max-w-[94%] mx-auto min-h-[100vh] ">
            <div className="flex items-center justify-center gap-4 mb-6">
                <img
                    src="images/paw-print.png"
                    alt="paw1"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <p className="text-4xl text-center md:text-5xl font-semibold font-rampart text-gray-700">
                    Pawfect Photos
                </p>
                <img
                    src="images/paw-print.png"
                    alt="paw2"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
            </div>

            <div className="space-y-2 gap-2 columns-2 md:columns-4 lg:columns-6 xl:columns-8 md:gap-4 md:space-y-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid overflow-hidden rounded-lg shadow-md cursor-pointer"
                        onClick={() => setSelectedImage(img.url)}
                    >
                        <img
                            src={img.url}
                            alt={`Image ${index}`}
                            className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105 border-4 border-white"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Preview"
                        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}
