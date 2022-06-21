import { Link } from "react-router-dom";
import Button from "../Components/Button";
import CenterContainer from "../Components/CenterContainer";
import Layout from "../Components/Layout";
import MainContainer from "../Components/MainContainer";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  /* Function to calculate my age because i don't want to change my year with my hand every year */
  const CalculAge = () => {
    let age = (bdate, now = new Date(), then = new Date(bdate)) =>
      now.getFullYear() -
      then.getFullYear() -
      (now < new Date(now.getFullYear(), then.getMonth(), then.getDate()));
    return age("2001-04-17");
  };

  return (
    <MainContainer>
      <Navbar />
      <Layout>
        <CenterContainer>
          <div className="flex flex-row mb-3">
            <p className="text-2xl font-semibold text-cyan-500 underline">
              Clément Legros !
            </p>
          </div>
          <div className="flex flex-row mb-2">
            <p className="text-xl font-semibold text-white">A propos de moi:</p>
            <br />
          </div>
          <div className="flex flex-row text-justify text-white mb-2">
            <p>
              Je suis un jeune développeur de {CalculAge()}ans qui à toujours
              été passioné d'informatique depuis mon enfance. J'ai fais la
              connaisance du développement web lors de mon BTS et j'en ai décidé
              de faire ma vocation. Depuis je touche à tout ce qui est
              javascript et ses librairies.
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <Link to="/work">
              <button className="text-white bg-cyan-500 hover:bg-cyan-600 h-10 w-36 rounded shadow">
                Voir mes travaux
              </button>
            </Link>
          </div>
        </CenterContainer>
      </Layout>
    </MainContainer>
  );
};

export default HomePage;
