import "../styles/Home.css"
import Button from "../components/Button"
import { Link } from "react-router-dom"


export default function Home() {
    return (
        <div className="home-container">
            <div className="txt-container">
                <div className="disponivel">
                    <p>Disponível para contratação</p>
                </div>
                <h1>Desenvolvendo aplicações Full-Stack escaláveis com foco em performance e experiência do usuário</h1>
                <div className="paragraph-description">
                    <p>Unindo 6 anos de Design Gráfico + Formação em Ciência da Computação, construo sites com alta perfomance, e com as tecnologias mais atuais do mercado. Com SEO bem definido e site focado em experiência de usuário e design.</p>
                </div>
                <div className="button-group">
                    <a href="https://wa.me/5587999967672?text=Ol%C3%A1!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20comprar%20um%20site!" target="_blank" rel="noopener noreferrer"><Button variant="primary"> Ver orçamento </Button></a>
                    <Link to="/works"><Button variant="secondary"> Veja Meus Trabalhos</Button></Link>
                </div>
            </div>
            <div className="img-container">
                    <img src="monitor.webp" alt="Monitor Apple"/>
                </div>
        </div>
    )
}