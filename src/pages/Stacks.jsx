import "../styles/Stacks.css";

export default function Stacks() {
  return (
    <>
      <div className="stacks-container">
        <div className="group-all-stacks">
          <div className="card">
            <div className="group-stacks">
              <div className="group-stack-element">
                <h1 className="title-stack">REACT.JS</h1>
              </div>
            </div>
          </div>
          <div className="card">
            <h1 className="title-stack">BACK-END</h1>
            <div className="group-stacks">
              <div className="group-stack-element">
                <img src="/jsLogo.webp" alt="Logo JavaScript" />
                <h1>JAVASCRIPT</h1>
              </div>
              <div className="group-stack-element">
                <img src="/javaLogo.webp" alt="Logo JavaScript" />
                <h1>JAVA</h1>
              </div>
              <div className="group-stack-element">
                <img src="/javaLogo.webp" alt="Logo Python" />
                <h1>PYTHON</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
