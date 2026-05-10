import { Link } from "react-router-dom";
import "../styles/Header.css"

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-content-container">
                <div className="logo-name">
                    <h1 className="name">Raul Sousa</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/works">Trabalhos</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}