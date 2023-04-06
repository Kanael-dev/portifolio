import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="containerFooter">
        <div className="callAction">
          <div className="meChama">
            <button className="btn">Realizar contato</button>
          </div>
          <div className="meuBanner">
            <img className="fotoApresentacao" src="/bannerPessoal.png" alt="banner" />
          </div>
        </div>
      </div>
      <div className="footerPrincipal">
        <h3>Projeto desenvolvido por Kanael Kenny de Aquino</h3>
      </div>
    </div>
  );
};

export default Footer;
