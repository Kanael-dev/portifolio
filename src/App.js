import NavBar from "./componentes/NavBar";
import Projetos from "./componentes/Projetos";
import Skill from "./componentes/Skill";
import Sobre from "./componentes/Sobre";
import Footer from "./componentes/Footer";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Skill />
      <Sobre />
      <Projetos />
      <Footer />
    </div>
  );
}
