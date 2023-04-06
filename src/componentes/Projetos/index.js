import "./Projetos.css";

const Projetos = (props) => {
  return (
    <div class="projetosContainer">
      <div className="tituloProjetos">
        <h3>Conhecimento</h3>
      </div>
      <div className="cardPai">
        <div className="card">
          <h3 className="text-skill">Designer</h3>
          <p>Desenvolvimento de prototipo no figma</p>
        </div>
        <div className="card">
          <h3 className="text-skill">NodeJS</h3>
          <p>Desenvolvimento de API com NodeJS</p>
        </div>
        <div className="card">
          <h3 className="text-skill">ReactJS</h3>
          <p>Construção de front-end com React JS</p>
        </div>
      </div>
    </div>
  );
};
export default Projetos;
