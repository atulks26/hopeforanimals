import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Adoptions from "./pages/Adoptions";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scoller";
import HashReset from "./components/HashReset";

function App() {
    return (
        <Router className="relative">
            <div className="fixed inset-0 -z-10 w-screen h-screen">
                <img
                    src="images/bg.png"
                    alt="background"
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
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
