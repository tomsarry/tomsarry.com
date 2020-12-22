import Header from "./components/Header";
import Redirects from "./components/Redirects";
import Container from "./components/Container";

import { useTranslation } from 'react-i18next'

import "./styles/main.scss"
import Technologies from "./components/Technologies";

function App() {
  const { t, i18n } = useTranslation()
  return (
    <div className="App">
      <div className="landing">
        <Header />
        <Redirects />
      </div>

      <Technologies />
      {/* <Container title={t("Projects")}/>
      <Container title={t("Smaller Projects")}/> */}
    </div>
  );
}

export default App;
