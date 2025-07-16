const CardItem = ({ image, headline, description }) => {
    return (
        <div className="p-4 w-[250px] h-[300px] flex flex-col justify-center items-center">
            <img
                src={image}
                alt={headline}
                className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-bold">{headline}</h3>
            <p className="text-sm">{description}</p>
        </div>
    );
};

export default CardItem;
