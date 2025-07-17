import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Adoptions from "./pages/Adoptions";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={[<Home />]} />
                <Route path="/gallery" element={[<Gallery />]} />
                <Route path="/adoptions" element={[<Adoptions />]} />
            </Routes>
        </Router>
    );
}

export default App;
