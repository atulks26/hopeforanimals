import React, { useEffect, useState } from "react";

export default function Preloader() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            if (current >= images.length) {
                clearInterval(interval);
                return;
            }
            const img = new Image();
            img.src = images[current].url;
            current++;
        }, 200);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div style={{ display: "none" }} aria-hidden="true">
            {images.map((img, i) => (
                <img key={i} src={img.url} alt="" />
            ))}
        </div>
    );
}
