import "../styles/Skills.css"

export default function Skills(){
    return (
        <div className="skills-container">
            <div className="head-page">
                <h2>Minhas Skills</h2>
                <p className="description-skills">Confira todas as tecnologias que eu domino para melhor lhe atender.</p>
            </div>
            <div className="cards">
                <div className="card-principal">
                    <img src="aquarela.png" alt="Icone Aquarela" className="icon"/>
                    <h3>Tecnologias Front-end</h3>
                    <div className="p-container-principal">
                        <p>Possuo expertise em React.JS + Vite, permitindo criar sites otimizados, estéticos e interativos.</p>
                    </div>
                    <ul>
                        <li>React.JS</li>
                        <li>Vite</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="card-secundario">
                    <img src="html.png" alt="Icone Aquarela" className="icon"/>
                    <h3>Tecnologias Back-end</h3>
                    <div className="p-container-secundario">
                        <p>Tenho conhecimentos técnicos em diversas linguagens de programação, destacando-se linguagens atuais e linguagens para web, como JavaScript e Python</p>
                    </div>
                    <ul>
                        <li>JavaScript</li>
                        <li>Node.JS</li>
                        <li>Python</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div className="card-secundario">
                    <img src="bd.png" alt="Icone Aquarela" className="icon"/>
                    <h3>Banco de Dados</h3>
                    <div className="p-container-secundario">
                        <p>Domino diversos estilos de Bancos de Dados (sejam eles relacionais ou não), bem como linguagens de manipulação dos mesmos.</p>
                    </div>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>Prisma</li>
                        <li>Mongo.DB</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}