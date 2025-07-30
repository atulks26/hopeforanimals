import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const GITHUB_JSON_URL =
    "https://raw.githubusercontent.com/atulks26/json-static-hosting/main/hfa-images.jso";

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
            <div className="h-16 text-4xl flex items-center font-bold text-emerald-500 w-[70%] mb-10">
                <div className="w-[50%]">
                    <p className="w-[36rem] border-l-4 border-orange-400 px-4 py-3">
                        Photo Gallery
                        <a
                            href="/gallery"
                            className="text-xl text-orange-400 m-10"
                        >
                            View Full Gallery &rarr;
                        </a>
                    </p>
                </div>
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
                            className="h-8 w-auto object-cover flex-shrink-0"
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
                            className="h-[28rem] mx-1 object-cover flex-shrink-0"
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
                            className="h-8 w-auto object-cover flex-shrink-0"
                        />
                    ))}
                </Marquee>
            </div>

            {/* <div className="bg-black">
                <Marquee
                    speed={60}
                    gradient={false}
                    pauseOnHover={false}
                    direction="right"
                >
                    {[...Array(repeatCount)].map((_, i) => (
                        <img
                            key={"top-" + i}
                            src="images/film.png"
                            alt="Film roll strip top"
                            className="h-8 w-auto object-cover flex-shrink-0"
                        />
                    ))}
                </Marquee>

                <Marquee
                    speed={60}
                    gradient={false}
                    pauseOnHover={false}
                    direction="right"
                >
                    {images2.map((image, i) => (
                        <img
                            key={i}
                            src={image.url}
                            alt={`Gallery image ${i + 1}`}
                            className="h-[16rem] mx-1 object-cover flex-shrink-0"
                        />
                    ))}
                </Marquee>

                <Marquee
                    speed={60}
                    gradient={false}
                    pauseOnHover={false}
                    direction="right"
                >
                    {[...Array(repeatCount)].map((_, i) => (
                        <img
                            key={"bottom-" + i}
                            src="images/film.png"
                            alt="Film roll strip bottom"
                            className="h-8 w-auto object-cover flex-shrink-0"
                        />
                    ))}
                </Marquee>
            </div> */}
        </div>
    );
};

export default GalleryPreview;
