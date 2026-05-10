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
                        title="FitForge - Tracker Nutricional" 
                        description="O FitForge é uma aplicação WEB com API RESTful robusta desenvolvida em Node.js e front-end desenvolvido utilizando React.JS para auxiliar no planejamento nutricional e avaliação física. Calculando TMB e TDEE, o FitForge oferece ferramentas completas para criação de perfis nutricionais, cálculo de macronutrientes personalizados e integração com a Tabela Brasileira de Composição de Alimentos (TACO) para rastreamento preciso de refeições."
                        color="verde"
                    />
                </a>

                <a href="https://github.com/codartic0/caneco-front-end" target="_blank">
                    <WorkCard 
                        image="logoCaneco.jpg" 
                        title="CANECO - Caixa Automatizado para Negócios e Controle Operacional" 
                        description="O CANECO é sistema de frente de caixa (PDV) desenvolvido como projeto da disciplina de Laboratório de Engenharia de Software para otimizar o gerenciamento de vendas e estoque em supermercados. Este repositório contém a interface do usuário, construída com foco em performance, usabilidade e integração em tempo real com a API."
                        color="azul"
                    />
                </a>

                <a href="https://github.com/codartic0/GUITripleTriad" target="_blank">
                    <WorkCard 
                        image="tt.png" 
                        title="TRIPLE TRIAD - Jogo feito em Python" 
                        description="O projeto Triple Triad é um jogo de cartas baseado em Final Fantasy. Foi feito para a disciplina de Paradigmas de Programação, utilizando POE (Programação Orientada a Eventos). Contém um back-end robusto, design totalmente personalizado, renderização de cartas e sprites, lógica funcional, dentre outros."
                        color="vermelho"
                    />
                </a>
            </div>
        </div>
    )
}