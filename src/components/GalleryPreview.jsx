import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const GITHUB_JSON_URL =
    "https://raw.githubusercontent.com/atulksingh26/json-static-hosting/main/hfa-images.json";

const GalleryPreview = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch(GITHUB_JSON_URL);
                if (!res.ok)
                    throw new Error(`HTTP error! status: ${res.status}`);
                const data = await res.json();
                setImages(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    if (loading)
        return <div className="gallery-message">Loading gallery...</div>;
    if (error)
        return (
            <div className="gallery-message error">Error: {error.message}</div>
        );

    const repeatCount = 40;

    let images1 = [];
    let images2 = [];

    for (let i = 0; i < images.length; i++) {
        if (i % 2) {
            images1.push(images[i]);
        } else {
            images2.push(images[i]);
        }
    }

    return (
        <div className="w-full mx-auto my-10 overflow-hidden flex flex-col items-center">
            <div className="flex flex-col sm:flex-row md:items-center md:gap-8 text-5xl md:text-6xl font-lucky w-full max-w-[90%] xl:max-w-[70%] mt-4 mb-8 py-2">
                <p className="w-fit">
                    <span className="text-[#4A4A4A]">P</span>
                    <span className="text-[#2F3E5C]">h</span>
                    <span className="text-[#5E4B56]">o</span>
                    <span className="text-[#2F3E5C]">to </span>
                    <span className="text-[#4A4A4A]">G</span>
                    <span className="text-[#2F3E5C]">a</span>
                    <span className="text-[#2F3E5C]">l</span>
                    <span className="text-[#5E4B56]">l</span>
                    <span className="text-[#4A4A4A]">e</span>
                    <span className="text-[#5E4B56]">r</span>
                    <span className="text-[#2F3E5C]">y</span>
                </p>

                <Link
                    to="/gallery"
                    className="flex items-start sm:pl-2 pt-2 sm:pt-0 w-fit"
                >
                    <button className="button-cute2 font-sans font-semibold text-[0.9rem]">
                        Check out full gallery &rarr;
                    </button>
                </Link>
            </div>

            <div className="bg-black mb-2">
                <Marquee
                    speed={60}
                    gradient={false}
                    pauseOnHover={false}
                    direction="left"
                >
                    {[...Array(repeatCount)].map((_, i) => (
                        <img
                            key={"top-" + i}
                            src="images/film.png"
                            alt="Film roll strip top"
                            className="h-4 w-auto object-cover flex-shrink-0"
                        />
                    ))}
                </Marquee>

                <Marquee
                    speed={60}
                    gradient={false}
                    pauseOnHover={false}
                    direction="left"
                >
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image.url}
                            alt={`Gallery image ${i + 1}`}
                            className="h-[12rem] sm:h-[16rem] md:h-[28rem] mx-1 object-cover flex-shrink-0"
                        />
                    ))}
                </Marquee>

                <Marquee
                    speed={60}
                    gradient={false}
                    pauseOnHover={false}
                    direction="left"
                >
                    {[...Array(repeatCount)].map((_, i) => (
                        <img
                            key={"bottom-" + i}
                            src="images/film.png"
                            alt="Film roll strip bottom"
                            className="h-4 w-auto object-cover flex-shrink-0"
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default GalleryPreview;
