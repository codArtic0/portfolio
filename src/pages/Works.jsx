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
                <a href="https://github.com/codartic0/api-fit" target="_blank" rel="noopener noreferrer">
                    <WorkCard 
                        image="monitor.webp" 
                        title="FitForge - API REST Nutricional Otimizada" 
                        description="Aplicação Full-Stack de alta performance com API RESTful robusta, com buscas otimizadas e oferecendo dashboards responsivos e processamento matemático complexo para planejamento nutricional e avaliação física."
                        color="azul"
                    />
                </a>

                <a href="https://github.com/codartic0/caneco-front-end" target="_blank" rel="noopener noreferrer">
                    <WorkCard 
                        image="cnc.png" 
                        title="CANECO - Caixa Automatizado para Negócios e Controle Operacional" 
                        description="Sistema de Frente de Caixa (PDV) Full-Stack focado em otimização operacional. Implementa integração de pagamento em tempo real, gerenciamento de estoque escalável e geração de relatórios de vendas."
                        color="azul"
                    />
                </a>

                <a href="https://github.com/codartic0/GUITripleTriad" target="_blank" rel="noopener noreferrer">
                    <WorkCard 
                        image="tt.png" 
                        title="TRIPLE TRIAD - Lógica de Jogo em Python" 
                        description="Implementação de lógica de jogo complexa e regras de interação de cartas utilizando Programação Orientada a Objetos (POO) e Padrões de Projeto (Design Patterns) em Python."
                        color="azul"
                    />
                </a>
            </div>
        </div>
    )
}