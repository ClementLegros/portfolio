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
            <p className="text-3xl font-semibold text-cyan-500 underline">
              Clément Legros !
            </p>
          </div>
          <div className="flex flex-row mb-2">
            <p className="text-2xl font-semibold text-white">A propos de moi:</p>
            <br />
          </div>
          <div className="flex flex-row text-justify text-white mb-3">
            <p>
              Je suis un jeune développeur de {CalculAge()}ans qui a toujours
              été passionné d'informatique depuis mon enfance. J'ai fait la
              connaissance du développement web lors de mon BTS et j'en ai
              décidé d'en faire ma vocation. Depuis je touche-à-tout ce qui est
              javascript et ses librairies.
            </p>
          </div>
          <div className="flex flex-row justify-center mb-4">
            <Link to="/works">
              <button className="text-white bg-cyan-500 hover:bg-cyan-600 h-10 w-36 rounded shadow">
                Voir mes travaux
              </button>
            </Link>
          </div>
          <div className="flex flex-row">
            <p className="text-2xl font-semibold text-white mb-2">Bio</p>
          </div>
          <div className="flex flex-row text-white mb-1">
            <p className="font-semibold text-lg mr-3">2001</p> Née à la Test De Buch
          </div>
          <div className="flex flex-row text-white mb-1">
            <p className="font-semibold text-lg mr-3">2019</p> Obtention Bac Pro SN RISC
          </div>
          <div className="flex flex-row text-white mb-1">
            <p className="font-semibold text-lg mr-3">2021</p> Obtention BTS SIO SLAM
          </div>
          <div className="flex flex-row text-white mb-1">
            <p className="font-semibold text-lg mr-3">2022</p> Obtention Licence PRISM
          </div>
        </CenterContainer>
      </Layout>
    </MainContainer>
  );
};

export default HomePage;
