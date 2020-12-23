import Header from "./components/Header";
import Redirects from "./components/Redirects";

import { useTranslation } from 'react-i18next'

import "./styles/main.scss"
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import SmallerProjects from "./components/SmallerProjects";
import Footer from "./components/Footer";

function App() {
  const { t, i18n } = useTranslation()
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
