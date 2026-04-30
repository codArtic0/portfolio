import "../styles/Footer.css"

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-content-container">
                <div className="logo-name">
                    <h1 className="name">Raul Sousa</h1>
                </div>
                <div className="direitos">
                    <p>© 2024 Raul Sousa. Todos os direitos reservados.</p>
                </div>
                <div className="menu">
                    <ul>
                        <li>Github</li>
                        <li>Linkedin</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}