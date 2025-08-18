import { useEffect, useState } from "react";

const GITHUB_JSON_URL =
    "https://raw.githubusercontent.com/atulksingh26/json-static-hosting/main/hfa-adoptions.json";

export default function Preloader() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchAdoptionImages() {
            try {
                const res = await fetch(GITHUB_JSON_URL);
                if (!res.ok) throw new Error("Failed to fetch adoption data");

                const data = await res.json();
                const urls = data.map((pet) => pet.url).filter(Boolean);
                setImages(urls);

                urls.forEach((url) => {
                    const img = new Image();
                    img.src = url;
                });
            } catch (err) {
                console.error("Image preloading failed:", err);
            }
        }

        fetchAdoptionImages();
    }, []);
}
