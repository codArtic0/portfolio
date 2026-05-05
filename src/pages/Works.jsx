import "../styles/Works.css"
import WorkCard from "../components/WorkCard"

export default function Works(){
    return(
        <div className="work-container">
            <div className="text-container">
                <h2>Meus Trabalhos</h2>
                <p>Confira alguns projetos que realizei para aprendizado na Universidade Estadual da Paraíba.</p>
            </div>
            <div className="card-container">
                <a href="https://github.com/codartic0/api-fit" target="_blank">
                    <WorkCard 
                        image="monitor.webp" 
                        title="API FIT" 
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat ab laboriosam?"
                        color="verde"
                    />
                </a>

                <a href="https://github.com/codartic0/caneco-front-end" target="_blank">
                    <WorkCard 
                        image="monitor.webp" 
                        title="CANECO - Caixa Automatizado para Negócios e Controle Operacional" 
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat ab laboriosam?"
                        color="azul"
                    />
                </a>
            </div>
        </div>
    )
}