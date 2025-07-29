import React from "react";

export default function Footer() {
    return (
        <footer
            id="footer-section"
            className="bg-neutral-900 flex flex-col items-center text-white w-full px-8 py-12"
        >
            <div className="w-[80%] flex justify-center">
                <div className="w-full">
                    <h2 className="text-xl font-semibold mb-4 text-emerald-400">
                        Donations
                    </h2>
                    <div className="flex flex-col items-start gap-4">
                        <img
                            src="/images/qr.png"
                            alt="QR Code"
                            className="h-48 w-48 border-white border-2"
                        />
                        <div>
                            <p>
                                UPI ID:{" "}
                                <span className="text-emerald-300">
                                    7818037628@ybl
                                </span>
                            </p>
                            <p>
                                PayPal:{" "}
                                <span className="text-emerald-300">
                                    Mrawat7786
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="text-xl font-semibold mb-4 text-emerald-400">
                        Bank Details
                    </h2>
                    <div className="flex flex-col items-start gap-1">
                        <strong>Hope for Animals</strong>
                        <strong>IDFC Bank</strong>
                        <p>
                            Acc no.: <strong>10090218133</strong>
                        </p>
                        <p>
                            IFSC: <strong>IDFB0021233</strong>
                        </p>
                        <strong>GMS Road Branch</strong>
                    </div>
                </div>

                <div className="w-full mr-10">
                    <h2 className="text-xl font-semibold mb-4 text-emerald-400">
                        Contact
                    </h2>
                    <div className="flex flex-col gap-2">
                        <p>
                            <strong>Email:</strong>{" "}
                            hopeforanimalsrescue@gmail.com
                        </p>
                        <p>
                            <strong>Phone:</strong> +91 7818037628
                        </p>
                        <p>
                            <strong>Office:</strong> Mangla Enclave, Prem Nagar,
                            Sudhowala, Dehradun, 248007
                        </p>
                        <p>
                            <strong>Site:</strong> Khasra No. 405, Sudhowala,
                            Dehradun, 248007
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="text-xl font-semibold mb-4 text-emerald-400">
                        Social
                    </h2>
                    <div className="flex flex-col gap-4">
                        <a
                            href="https://www.instagram.com/hopeforanimalsresq/"
                            target="_blank"
                            className="flex gap-2"
                        >
                            <img
                                src="images/instagram.png"
                                className="w-[1.6rem] aspect-square object-cover invert"
                            />
                            <p>Instagram</p>
                        </a>
                        <a
                            href="https://www.facebook.com/hopeforanimalsresq/"
                            target="_blank"
                            className="flex gap-2"
                        >
                            <img
                                src="images/facebook.png"
                                className="w-[1.6rem] aspect-square object-cover invert"
                            />
                            <p>Facebook</p>
                        </a>
                        <a
                            href="https://www.youtube.com/@hopeforanimalsrescue"
                            target="_blank"
                            className="flex gap-2"
                        >
                            <img
                                src="images/youtube.png"
                                className="w-[1.6rem] aspect-square object-cover invert"
                            />
                            <p>YouTube</p>
                        </a>
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="text-xl font-semibold mb-4 text-emerald-400">
                        Location
                    </h2>
                    <div className="w-full h-64 overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110155.99004721819!2d77.93332023332378!3d30.368716548962983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d50c76f1d587%3A0x1ba3c8b6dde2ea1!2sHope%20For%20Animals%20Rescue%20Shelter!5e0!3m2!1sen!2sin!4v1753774925567!5m2!1sen!2sin"
                            width="500"
                            height="450"
                            className="border-none"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-6 w-full text-center text-sm text-gray-400">
                © 2025 HopeForAnimals. All rights reserved.
            </div>
        </footer>
    );
}
