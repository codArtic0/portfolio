import "../styles/Stacks.css";

export default function Stacks() {
  return (
    <>
      <div className="stacks-container">
        <div className="group-all-stacks">
          <div className="card">
            <div className="group-stacks">
              <h1 className="title-stack">FRONT-END</h1>
              <div className="group-stack-element">
                <img  className="logo-js-icon" src="stackIcons/jsLogo.webp" alt="Logo JavaScript" />
                <h1>REACT.JS</h1>
              </div>
              <div className="group-stack-element">
                <img  className="logo-js-icon" src="stackIcons/jsLogo.webp" alt="Logo JavaScript" />
                <h1>VITE</h1>
              </div>
            </div>
          </div>
          <div className="card">
            <h1 className="title-stack">BACK-END</h1>
            <div className="group-stacks">
              <div className="group-stack-element">
                <img className="logo-js-icon" src="stackIcons/jsLogo.webp" alt="Logo JavaScript" />
                <h1>JAVASCRIPT</h1>
              </div>
              <div className="group-stack-element">
                <img className="logo-java-icon" src="stackIcons/javaLogo.webp" alt="Logo JavaScript" />
                <h1>JAVA</h1>
              </div>
              <div className="group-stack-element">
                <img className="logo-java-icon" src="stackIcons/javaLogo.webp" alt="Logo Python" />
                <h1>PYTHON</h1>
              </div>
              <div className="group-stack-element">
                <img className="logo-java-icon" src="stackIcons/javaLogo.webp" alt="Logo Python" />
                <h1>NODE.JS</h1>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="group-stacks">
              <h1 className="title-stack">BANCO DE DADOS</h1>
              <div className="group-stack-element">
                <img className="logo-js-icon" src="stackIcons/jsLogo.webp" alt="Logo JavaScript" />
                <h1>POSTGRESQL</h1>
              </div>
              <div className="group-stack-element">
                <img className="logo-js-icon" src="stackIcons/jsLogo.webp" alt="Logo JavaScript" />
                <h1>MYSQL</h1>
              </div>
              <div className="group-stack-element">
                <img className="logo-js-icon" src="stackIcons/jsLogo.webp" alt="Logo JavaScript" />
                <h1>PRISMA</h1>
              </div>
              <div className="group-stack-element">
                <img className="logo-js-icon" src="stackIcons/jsLogo.webp" alt="Logo JavaScript" />
                <h1>MONGO.DB</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
