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
        <Router>
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
