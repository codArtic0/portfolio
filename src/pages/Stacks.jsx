import "../styles/Stacks.css";

export default function Stacks() {
  return (
    <>
      <div className="stacks-container">
        <h1 className="title-page">Minhas Stacks</h1>
        <div className="group-all-stacks">
          <div className="card">
            <div className="group-stacks">
              <h1 className="title-stack">FRONT-END</h1>
              <div className="group-stack-element">
                <img  className="logo-react-icon" src="stackIcons/reactLogo.webp" alt="Logo React" />
                <h1>REACT.JS</h1>
              </div>
              <div className="group-stack-element">
                <img  className="logo-vite-icon" src="stackIcons/viteLogo.webp" alt="Logo Vite" />
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
                <img className="logo-java-icon" src="stackIcons/javaLogo.webp" alt="Logo Java" />
                <h1>JAVA</h1>
              </div>
              <div className="group-stack-element">
                <img className="logo-python-icon" src="stackIcons/pythonLogo.webp" alt="Logo Python" />
                <h1>PYTHON</h1>
              </div>
              <div className="group-stack-element">
                <img className="logo-node-icon" src="stackIcons/nodeLogo.webp" alt="Logo Node.JS" />
                <h1>NODE.JS</h1>
              </div>
            </div>
          </div>
          <div className="card">
            <h1 className="title-stack">BANCO DE DADOS</h1>
            <div className="group-stacks">
              
              <div className="group-stack-element">
                <img className="logo-postgres-icon" src="stackIcons/postgresLogo.webp" alt="Logo PostgreSQL" />
                <h1>POSTGRESQL</h1>
              </div>
              <div className="group-stack-element">
                <img className="logo-mysql-icon" src="stackIcons/mysqlLogo.webp" alt="Logo MySQL" />
                <h1>MYSQL</h1>
              </div>
              <div className="group-stack-element">
                <img className="logo-prisma-icon" src="stackIcons/prismaLogo.webp" alt="Logo Prisma ORM" />
                <h1>PRISMA</h1>
              </div>
              <div className="group-stack-element">
                <img className="logo-mongo-icon" src="stackIcons/mongoLogo.webp" alt="Logo Mongo.DB" />
                <h1>MONGO.DB</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
