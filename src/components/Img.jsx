import manifest from "../image-manifest.json";

const SIZE_BOOST = 1.5;

function boostSizes(sizes) {
    if (!sizes || SIZE_BOOST === 1) return sizes;

    return sizes
        .split(",")
        .map((part) => {
            const entry = part.trim();
            const m = entry.match(/^(.*\))?\s*(\d*\.?\d+)(vw|px|em|rem)$/);
            if (!m) return entry;

            const [, condition, value, unit] = m;
            let scaled = parseFloat(value) * SIZE_BOOST;

            if (unit === "vw") scaled = Math.min(scaled, 100);

            scaled = Math.round(scaled * 10) / 10;
            return condition ? `${condition} ${scaled}${unit}` : `${scaled}${unit}`;
        })
        .join(", ");
}

export default function Img({ src, sizes, ...rest }) {
    const key = src.replace(/^\//, "");
    const entry = manifest[key];

    if (!entry) {
        // eslint-disable-next-line
        return <img src={`/${key}`} {...rest} />;
    }

    const stem = key.replace(/\.webp$/, "");
    const srcSet = [
        ...entry.widths.map((w) => `/${stem}-${w}w.webp ${w}w`),
        `/${key} ${entry.base}w`,
    ].join(", ");

    return (
        // eslint-disable-next-line
        <img src={`/${key}`} srcSet={srcSet} sizes={boostSizes(sizes)} {...rest} />
    );
}
