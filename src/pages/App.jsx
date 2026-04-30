import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./Home";

export default function App() {
  return (
    <div id="home" className="app-container">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}
