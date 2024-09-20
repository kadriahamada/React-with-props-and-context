import "./App.css";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import ComorosPage from "./components/ComorosPage";
import UgandaPage from "./components/UgandaPage";
import LoginPage from "./components/LoginPage";
import SigninPage from "./components/SigninPage";
import NoPageFound from "./components/NoPageFound";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/comores" element={<ComorosPage />} />
        <Route path="/uganda" element={<UgandaPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
