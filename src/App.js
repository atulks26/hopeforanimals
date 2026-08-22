import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scoller";
import HashReset from "./components/HashReset";
import Img from "./components/Img";

const Home = lazy(() => import("./pages/Home"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Adoptions = lazy(() => import("./pages/Adoptions"));
const News = lazy(() => import("./pages/News"));

function RouteFallback() {
    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-cyan-600 rounded-full animate-spin" />
        </div>
    );
}

function App() {
    return (
        <Router className="relative">
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
            <Suspense fallback={<RouteFallback />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/adoptions" element={<Adoptions />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </Suspense>
            <Footer />
        </Router>
    );
}

export default App;
