import BadgeTitleWork from "../../Components/BadgeTitleWork";
import CenterContainer from "../../Components/CenterContainer";
import Layout from "../../Components/Layout";
import MainContainer from "../../Components/MainContainer";
import Navbar from "../../Components/Navbar";
import WorksNavigation from "../../Components/WorksNavigation";

const Shinomasuyoo = () => {
  return (
    <MainContainer>
      <Navbar />
      <Layout>
        <CenterContainer>
          <WorksNavigation>Shinomasuyoo</WorksNavigation>
          <div className="text-white">
            <p className="text-justify mt-2 mb-5">
              Site web permettant de visualiser des cartes et traduction du jeux
              mobile
              <a
                className="ml-2 mr-2 text-cyan-500"
                href="https://www.hpgames.jp/shinomas/"
              >
                Shinomas.
              </a>
              Une refonte complète du site est en cours.
            </p>
            <BadgeTitleWork title={"WEBSITE"}>
              <a
                className="text-cyan-500 text-sm md:text-md hover:underline"
                href="https://shinomasuyo-senran.web.app/"
              >
                https://shinomasuyo-senran.web.app/
              </a>
            </BadgeTitleWork>
            <BadgeTitleWork title={"STACK"}>
              <p className="">ReactJS, Tailwindcss, Express, Sequelize</p>
            </BadgeTitleWork>
            <BadgeTitleWork title={"Github"}>
              <a
                href="https://github.com/ClementLegros/shinomasuyooo"
                className="text-cyan-500"
              >
                Shinomasuyoo
              </a>
            </BadgeTitleWork>
          </div>
        </CenterContainer>
      </Layout>
    </MainContainer>
  );
};

export default Shinomasuyoo;
