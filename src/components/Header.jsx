import "../styles/Header.css"


export default function Header() {

    return (
        <header className="header-container">
            <div className="header-content">
                <div className="logo">
                    <h1>Raul Sousa</h1>
                </div>
                <ul className="links">
                    <li>Home</li>
                    <li>Sobre mim</li>
                    <li>Minhas Stacks</li>
                </ul>

            </div>
        </header>
    )
}