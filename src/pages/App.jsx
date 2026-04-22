import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import Stacks from "./Stacks";

function App() {
  return (
    <>
      <div className="app-container">
        <main>
          <Home />
          <About />
          <Stacks />
        </main>
      </div>
    </>
  );
}

export default App;
