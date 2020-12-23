import Header from "./components/Header";
import Redirects from "./components/Redirects";

import "./styles/main.scss"
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import SmallerProjects from "./components/SmallerProjects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="landing">
        <Header />
        <Redirects />
      </div>

      <Technologies />
      <Projects />
      <SmallerProjects />
      <Footer />
    </div>
  );
}

export default App;
