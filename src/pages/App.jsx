import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./Home";
import Skills from "./Skills";

export default function App() {
  return (
    <div id="home" className="app-container">
      <Header/>
      <Home/>
      <Skills/>
      <Footer/>
    </div>
  );
}
