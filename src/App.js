import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "./media.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import ModoJuego from "./ModoJuego";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modo-juego" element={<ModoJuego />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
