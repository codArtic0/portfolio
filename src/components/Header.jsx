import { NavLink } from "react-router-dom";
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
                        <li><NavLink to="/">Início</NavLink></li>
                        <li><NavLink to="/skills">Skills</NavLink></li>
                        <li><NavLink to="/works">Trabalhos</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}