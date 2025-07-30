import React, { useEffect, useState } from "react";

export default function Gallery() {
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const GITHUB_JSON_URL =
        "https://raw.githubusercontent.com/atulks26/json-static-hosting/main/hfa-images.jso";

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch(GITHUB_JSON_URL);
                const data = await res.json();
                setImages(data.reverse());
            } catch (err) {
                setError("Failed to load gallery.");
                console.error(err);
            }
        }

        fetchImages();
    }, []);

    if (error)
        return <div className="text-red-600 text-center mt-10">{error}</div>;

    return (
        <div className="p-6 max-w-[90%] mx-auto min-h-[100vh] ">
            <div className="flex items-center justify-center gap-4 mb-6">
                <img
                    src="images/flower.png"
                    alt="flower1"
                    className="w-12 h-12 object-contain"
                />
                <h1 className="text-5xl font-semibold font-rampart">Gallery</h1>
                <img
                    src="images/flower.png"
                    alt="flower2"
                    className="w-12 h-12 object-contain"
                />
            </div>

            <div className="columns-2 md:columns-4 lg:columns-6 xl:columns-8 gap-4 space-y-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid overflow-hidden rounded-lg shadow-md cursor-pointer"
                        onClick={() => setSelectedImage(img.url)}
                    >
                        <img
                            src={img.url}
                            alt={`Image ${index}`}
                            className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
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
