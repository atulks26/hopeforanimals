import React from "react";
import Cards from "./StoryCard";

const About = () => {
    return (
        <section>
            <div className="vision flex">
                <div className="flex flex-col w-[65%]">
                    <div className="border-2 h-16 font-sourgummy text-5xl flex items-center font-bold text-emerald-500 px-10">
                        Who are we?
                    </div>
                    <div className="border-2 px-10 py-8">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit voluptas impedit fuga consectetur.
                        Doloribus dolore voluptas omnis nulla eaque similique
                        laboriosam ut odio. Placeat quidem officia nesciunt non,
                        eaque autem. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Architecto dolore eos aspernatur
                        inventore dolores asperiores? Dolor amet obcaecati
                        consequuntur illum earum aperiam harum, ex architecto,
                        voluptatum unde, corporis mollitia iste? Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Sunt
                        aliquid sit cupiditate. Unde doloremque similique neque
                        ut impedit aspernatur vel officiis minus, cum dolores
                        explicabo blanditiis suscipit voluptatibus, alias nulla.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto porro nostrum qui, saepe explicabo ipsa
                        commodi dignissimos excepturi beatae voluptatem, cum
                        dolorem, natus similique eius facilis illum nemo ratione
                        dolor! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. In dolores quis ab debitis alias
                        reiciendis vitae illo obcaecati? Tempore rerum ullam
                        repudiandae? Hic ipsum corporis, animi ratione
                        consequuntur minus unde. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Delectus temporibus fugiat
                        ut veritatis culpa at iusto molestiae quaerat quidem
                        doloremque voluptas, vitae numquam ex, enim ducimus
                        tempore explicabo rem perferendis!
                    </div>
                </div>
                <div className="flex h-auto w-[35%] border-2 justify-center items-center">
                    <img src="" alt="dogImage" />
                </div>
            </div>

            <div className="mission flex">
                <div className="flex h-auto w-[35%] border-2 justify-center items-center">
                    <img src="" alt="dogImage" />
                </div>
                <div className="flex flex-col w-[65%]">
                    <div className="border-2 h-16 font-sourgummy text-5xl flex items-center font-bold text-emerald-500 px-10">
                        What we do
                    </div>
                    <div className="border-2 px-10 py-8">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit voluptas impedit fuga consectetur.
                        Doloribus dolore voluptas omnis nulla eaque similique
                        laboriosam ut odio. Placeat quidem officia nesciunt non,
                        eaque autem. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Architecto dolore eos aspernatur
                        inventore dolores asperiores? Dolor amet obcaecati
                        consequuntur illum earum aperiam harum, ex architecto,
                        voluptatum unde, corporis mollitia iste? Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Sunt
                        aliquid sit cupiditate. Unde doloremque similique neque
                        ut impedit aspernatur vel officiis minus, cum dolores
                        explicabo blanditiis suscipit voluptatibus, alias nulla.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto porro nostrum qui, saepe explicabo ipsa
                        commodi dignissimos excepturi beatae voluptatem, cum
                        dolorem, natus similique eius facilis illum nemo ratione
                        dolor! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. In dolores quis ab debitis alias
                        reiciendis vitae illo obcaecati? Tempore rerum ullam
                        repudiandae? Hic ipsum corporis, animi ratione
                        consequuntur minus unde. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Delectus temporibus fugiat
                        ut veritatis culpa at iusto molestiae quaerat quidem
                        doloremque voluptas, vitae numquam ex, enim ducimus
                        tempore explicabo rem perferendis!
                    </div>
                </div>
            </div>

            <div className="start flex">
                <div className="flex flex-col w-[65%]">
                    <div className="border-2 h-16 font-sourgummy text-5xl flex items-center font-bold text-emerald-500 px-10">
                        How it started
                    </div>
                    <div className="border-2 px-10 py-8">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Reprehenderit voluptas impedit fuga consectetur.
                        Doloribus dolore voluptas omnis nulla eaque similique
                        laboriosam ut odio. Placeat quidem officia nesciunt non,
                        eaque autem. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Architecto dolore eos aspernatur
                        inventore dolores asperiores? Dolor amet obcaecati
                        consequuntur illum earum aperiam harum, ex architecto,
                        voluptatum unde, corporis mollitia iste? Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Sunt
                        aliquid sit cupiditate. Unde doloremque similique neque
                        ut impedit aspernatur vel officiis minus, cum dolores
                        explicabo blanditiis suscipit voluptatibus, alias nulla.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto porro nostrum qui, saepe explicabo ipsa
                        commodi dignissimos excepturi beatae voluptatem, cum
                        dolorem, natus similique eius facilis illum nemo ratione
                        dolor! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. In dolores quis ab debitis alias
                        reiciendis vitae illo obcaecati? Tempore rerum ullam
                        repudiandae? Hic ipsum corporis, animi ratione
                        consequuntur minus unde. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Delectus temporibus fugiat
                        ut veritatis culpa at iusto molestiae quaerat quidem
                        doloremque voluptas, vitae numquam ex, enim ducimus
                        tempore explicabo rem perferendis!
                    </div>
                </div>
                <div className="flex h-auto w-[35%] border-2 justify-center items-center">
                    <img src="" alt="dogImage" />
                </div>
            </div>

            <div className="w-full h-20vh">
                <div className="border-2 h-16 font-sourgummy text-5xl flex items-center font-bold text-emerald-500 px-10">
                    Success Stories
                </div>
                <div className="w-full h-20vh">
                    <Cards />
                </div>
            </div>

            <div className="w-100 h-[50vh] border-2 flex flex-col m-auto justify-center items-center bg-gray-100">
                <div className="h-16 w-100 text-6xl font-bold font-sourgummy">
                    OUR IMPACT
                </div>
                <div className="h-[50%] w-full flex justify-evenly items-center">
                    <div className="flex flex-col items-center font-smooch font-bold">
                        <p className="text-9xl text-emerald-600">800+</p>
                        <p className="text-4xl">Rescues</p>
                        <p className="text-xl"></p>
                    </div>
                    <div className="flex flex-col items-center font-smooch font-bold">
                        <p className="text-9xl text-emerald-600">350+</p>
                        <p className="text-4xl">Adoptions</p>
                        <p className="text-xl">
                            Furry friends meet loving parents
                        </p>
                    </div>
                    <div className="flex flex-col items-center font-smooch font-bold">
                        <p className="text-9xl text-emerald-600">150+</p>
                        <p className="text-4xl">Releases</p>
                        <p className="text-xl"></p>
                    </div>
                    <div className="flex flex-col items-center font-smooch font-bold">
                        <p className="text-9xl text-emerald-600">10+</p>
                        <p className="text-4xl">Adoption Camps</p>
                        <p className="text-xl">
                            Where pups find their new homes
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
