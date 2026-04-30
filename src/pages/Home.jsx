import "../styles/Home.css"
import Button from "../components/Button"

export default function Home() {
    return (
        <div className="home-container">
            <div className="disponivel">
                <p>Disponível para contratação</p>
            </div>
            <h1>Construindo soluções para sua empresa através de sites</h1>
            <p>Construo sites com alta perfomance, e com as tecnologias mais atuais do mercado. Com SEO bem definido e site focado em experiência de usuário e design</p>
            <div className="button-group">
                <Button variant="primary"> Contratar agora </Button>
                <Button variant="secondary"> Veja meus trabalhos </Button>
            </div>
        </div>
    )
}