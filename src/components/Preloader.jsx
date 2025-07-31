import React, { useEffect, useState } from "react";

export default function Preloader() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch(
                    "https://raw.githubusercontent.com/atulks26/json-static-hosting/main/hfa-images.json"
                );
                const data = await res.json();
                setImages(data);
            } catch (err) {
                // Fail silently, no need to block anything
                console.error("GalleryPreloader fetch error:", err);
            }
        }

        fetchImages();
    }, []);

    return (
        <div style={{ display: "none" }} aria-hidden="true">
            {images.map((img, i) => (
                <img key={i} src={img.url} alt="" />
            ))}
        </div>
    );
}
