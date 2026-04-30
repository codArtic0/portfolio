import "../styles/Footer.css"

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-content-container">
                <div className="logo-name">
                    <h1 className="name">Raul Sousa</h1>
                </div>
                <div className="direitos">
                    <p>© 2026 Raul Sousa. Todos os direitos reservados.</p>
                </div>
                <div className="menu">
                    <ul>
                        <a href="https://github.com/codartic0" target="_blank"> <li>Github</li> </a>
                        <a href="https://linkedin.com/in/raulsousapv" target="_blank"> <li>Linkedin</li> </a>
                        <a href="https://instagram.com/raulsousapv" target="_blank"> <li>Instagram</li> </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}