import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Adoptions from "./pages/Adoptions";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scoller";
import HashReset from "./components/HashReset";
import Preloader from "./components/Preloader";
import News from "./pages/News";
import Img from "./components/Img";

function App() {
    return (
        <Router className="relative">
            <Preloader />
            <div className="fixed inset-0 -z-10 w-screen h-screen">
                <Img
                    sizes="100vw"
                    src="images/bg.webp"
                    alt="Website background"
                    className="w-full h-full object-cover"
                />
            </div>

            <ScrollToTop />
            <HashReset />
            <Navbar />
            <div className="w-full h-[6rem]"></div>
            <Routes>
                <Route path="/" element={[<Home />]} />
                <Route path="/gallery" element={[<Gallery />]} />
                <Route path="/adoptions" element={[<Adoptions />]} />
                <Route path="/news" element={[<News />]} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
