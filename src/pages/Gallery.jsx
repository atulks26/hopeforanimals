import React, { useEffect, useState } from "react";
import Seo from "../components/Seo";

const GITHUB_JSON_URL =
    "https://raw.githubusercontent.com/atulksingh26/json-static-hosting/main/hfa-images.json";

const FALLBACK_RATIO = "4 / 5";

function GalleryTile({ img, index, onSelect }) {
    const [loaded, setLoaded] = useState(false);

    const ratio =
        img.width && img.height ? `${img.width} / ${img.height}` : FALLBACK_RATIO;

    return (
        <div
            className={`break-inside-avoid overflow-hidden rounded-lg shadow-md cursor-pointer bg-gray-200 ${
                loaded ? "" : "animate-pulse"
            }`}
            style={{ aspectRatio: ratio }}
            onClick={() => onSelect(img.url)}
        >
            <img
                src={img.url}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(true)}
                className={`w-full h-full object-cover rounded-lg border-4 border-white transition-[opacity,transform] duration-300 ease-out hover:scale-105 ${
                    loaded ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
}

export default function Gallery() {
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch(GITHUB_JSON_URL);
                const data = await res.json();

                const list = Array.isArray(data) ? data : data.gallery;
                setImages([...list].reverse());
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

    return (
        <div className="p-6 md:max-w-[94%] mx-auto min-h-[100vh] ">
            <Seo
                title="Photo Gallery | Hope For Animals"
                description="Photos from our rescue work — the animals we care for and treat, and the ones who have found loving homes."
            />
            <div className="flex items-center justify-center gap-4 mb-6">
                <img
                    src="images/paw-print.webp"
                    alt="Paw icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <p className="text-4xl text-center md:text-5xl font-semibold font-rampart text-gray-700">
                    Pawfect Photos
                </p>
                <img
                    src="images/paw-print.webp"
                    alt="Paw icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
            </div>

            {error && (
                <div className="text-red-600 text-center mt-10">{error}</div>
            )}

            {loading && (
                <div className="flex justify-center items-center py-24">
                    <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-cyan-600 rounded-full animate-spin"></div>
                </div>
            )}

            <div className="space-y-2 gap-2 columns-2 md:columns-4 lg:columns-6 xl:columns-8 md:gap-4 md:space-y-4">
                {images.map((img, index) => (
                    <GalleryTile
                        key={img.url || index}
                        img={img}
                        index={index}
                        onSelect={setSelectedImage}
                    />
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
