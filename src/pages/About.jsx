import "../styles/About.css";

export default function About() {
  return (
    <div id="about" className="about-container">
      <div className="txt-container">
        <h1>SOBRE MIM</h1>
        <div className="txt-aboutme">
          <p>
            {" "}
            Me chamo Raul Sousa, sou Desenvolvedor Full-Stack em formação pela
            Universidade Estadual da Paraíba (UEPB) Campus VII em Patos - PB.
            Trabalho há + de 8 anos com Design Gráfico e há + de 5 anos com Motion
            Design.
          </p>
          <p>
            {" "}
            Atualmente, estou em busca de vagas de <strong>Entrada</strong> no
            mundo de Desenvolvimento Web.
          </p>
        </div>
      </div>
      <div className="img-container">
        <img src="/ft.png" alt="" />
      </div>
    </div>
  );
}
