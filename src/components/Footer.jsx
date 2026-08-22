export default function Footer() {
    return (
        <footer
            id="footer-section"
            className="bg-[#2F3E5C] flex flex-col items-center text-white w-full px-6 py-12"
        >
            <div className="w-full max-w-7xl flex flex-col md:flex-row md:flex-wrap justify-between gap-12">
                <div className="w-full md:w-[45%] lg:w-[30%]">
                    <h2 className="text-xl font-semibold mb-4 text-[#F8E9AE]">
                        Donations
                    </h2>
                    <div className="flex flex-col items-start gap-4">
                        <img
                            src="/images/qr.webp"
                            alt="Hope For Animals UPI QR Code"
                            className="h-[12rem] w-[12rem] border-2 border-white"
                        />
                        <div>
                            <p>
                                <strong>UPI ID:</strong>{" "}
                                <span className="text-[#90fb57]">
                                    7818037628@ybl
                                </span>
                            </p>
                            <p>
                                <strong>PayPal:</strong>{" "}
                                <span className="text-[#90fb57]">
                                    Mrawat7786
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[45%] lg:w-[30%]">
                    <h2 className="text-xl font-semibold mb-4 text-[#F8E9AE]">
                        Bank Details
                    </h2>
                    <div className="flex flex-col items-start gap-1 text-md">
                        <strong>Hope for Animals</strong>
                        <strong>IDFC Bank</strong>
                        <p>
                            Current Acc no.: <strong>10090218133</strong>
                        </p>
                        <p>
                            IFSC: <strong>IDFB0021233</strong>
                        </p>
                        <strong>GMS Road Branch</strong>
                    </div>
                </div>

                <div className="w-full md:w-[45%] lg:w-[30%]">
                    <h2 className="text-xl font-semibold mb-4 text-[#F8E9AE]">
                        Contact
                    </h2>
                    <div className="flex flex-col gap-2 text-md">
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

                <div className="w-full md:w-[45%] lg:w-[30%]">
                    <h2 className="text-xl font-semibold mb-4 text-[#F8E9AE]">
                        Social
                    </h2>
                    <div className="flex flex-col gap-4 text-sm">
                        <a
                            href="https://www.instagram.com/hopeforanimalsresq/"
                            target="_blank"
                            className="flex items-center gap-2"
                            rel="noreferrer"
                        >
                            <img
                                src="images/instagram.webp"
                                className="w-6 h-6 object-contain invert"
                                alt="Instagram logo"
                            />
                            <span>Instagram</span>
                        </a>
                        <a
                            href="https://www.facebook.com/hopeforanimalsresq/"
                            target="_blank"
                            className="flex items-center gap-2"
                            rel="noreferrer"
                        >
                            <img
                                src="images/facebook.webp"
                                className="w-6 h-6 object-contain invert"
                                alt="Facebook logo"
                            />
                            <span>Facebook</span>
                        </a>
                        <a
                            href="https://www.youtube.com/@hopeforanimalsrescue"
                            target="_blank"
                            className="flex items-center gap-2"
                            rel="noreferrer"
                        >
                            <img
                                src="images/youtube.webp"
                                className="w-6 h-6 object-contain invert"
                                alt="YouTube logo"
                            />
                            <span>YouTube</span>
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-[58%]">
                    <h2 className="text-xl font-semibold mb-4 text-[#F8E9AE]">
                        Location
                    </h2>

                    <div className="relative w-full h-[18rem] overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110155.99004721819!2d77.93332023332378!3d30.368716548962983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d50c76f1d587%3A0x1ba3c8b6dde2ea1!2sHope%20For%20Animals%20Rescue%20Shelter!5e0!3m2!1sen!2sin!4v1753774925567!5m2!1sen!2sin"
                            className="absolute top-0 left-0 w-full h-full border-none"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            onError={(e) => {
                                e.target.style.display = "none";
                                const fallback = e.target.nextElementSibling;
                                if (fallback) fallback.style.display = "flex";
                            }}
                        ></iframe>

                        <div className="hidden absolute top-0 left-0 w-full h-full bg-[#f8e9ae] text-black flex-col justify-center items-center text-center px-4">
                            <p className="font-semibold mb-2">
                                Failed to load map.
                            </p>
                            <p>Please refresh the page.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-500 mt-12 pt-6 w-full text-center text-sm text-gray-300">
                © 2025 Hope For Animals NGO. All rights reserved.
            </div>
        </footer>
    );
}
