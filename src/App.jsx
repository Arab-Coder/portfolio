import "./App.css";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/Hero";
import Mian from "./components/3-main/Mian";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { FaRegArrowAltCircleUp } from "react-icons/fa";


function App() {
  return (
    <>
      <div className="container ">
        <Header />
        <Hero />
        <div className="divider" />
        <Mian />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
        <button className="icon-keyboard_arrow_up"><FaRegArrowAltCircleUp size={"25px"}/></button>
      </div>
    </>
  );
}

export default App;
