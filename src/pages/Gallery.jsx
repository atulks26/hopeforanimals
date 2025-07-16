import React, { useEffect, useState } from "react";

export default function Gallery() {
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");

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
            }
        }

        fetchImages();
    }, []);

    console.log(images);

    if (error)
        return <div className="text-red-600 text-center mt-10">{error}</div>;

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6 text-center">Gallery</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img, key) => (
                    <div
                        key={key}
                        className="overflow-hidden rounded-lg shadow"
                    >
                        <img
                            src={img.url}
                            alt={`Uploaded ${key}`}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
