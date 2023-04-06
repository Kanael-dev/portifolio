import "./Skill.css";

const Skill = () => {
  return (
    <div id="home" className="divisaoPortifolio">
      <div className="habilidades">
        <p className="skill">
          DESIGNER . DESENVOLVEDOR . AUTOMAÇÃO DE PROCESSOS
        </p>
        <p className="introducao">Conheça o meu portifolio</p>
        <p className="impacto">Aqui vira um texto de impacto</p>
        <button className="btn">Conheça o meu GitHUB</button>
      </div>
      <div className="banner">
        <img src="/Banner.png" alt="Apresentação" />
      </div>
    </div>
  );
};

export default Skill;
