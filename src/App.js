import Header from "./components/Header";
import Redirects from "./components/Redirects";

import { useTranslation } from 'react-i18next'

import "./styles/main.scss"
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import SmallerProjects from "./components/SmallerProjects";

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
      {/* <Container title={t("Projects")}/>
      <Container title={t("Smaller Projects")}/> */}
    </div>
  );
}

export default App;
