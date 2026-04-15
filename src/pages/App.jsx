import "../styles/App.css"
import Home from "./Home"
import About from "./About"

function App() {

  return (
    <>
      <div className='app-container'>
        <main>
          <Home />
          <About/>
        </main>
      </div>
    </>
  )
}

export default App
