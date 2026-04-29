import { useState } from "react";
import "../styles/Header.css"


export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header-container">
            <div className="header-content container">
                <div className="logo">
                    <h1>Raul Sousa</h1>
                </div>

                <button
                    aria-expanded={open}
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                    className={`hamburger ${open ? 'is-open' : ''}`}
                    onClick={() => setOpen(!open)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav>
                  <ul className={`links ${open ? 'open' : ''}`}>
                      <li>Home</li>
                      <li>Sobre mim</li>
                      <li>Minhas Stacks</li>
                  </ul>
                </nav>

            </div>
        </header>
    )
}