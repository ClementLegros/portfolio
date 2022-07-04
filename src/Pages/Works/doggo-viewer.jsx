import BadgeTitleWork from "../../Components/BadgeTitleWork";
import CenterContainer from "../../Components/CenterContainer";
import Layout from "../../Components/Layout";
import MainContainer from "../../Components/MainContainer";
import Navbar from "../../Components/Navbar";
import WorksNavigation from "../../Components/WorksNavigation";

const DoggoViewer = () => {
  return (
    <MainContainer>
      <Navbar />
      <Layout>
        <CenterContainer>
          <WorksNavigation>Doggo Viewer</WorksNavigation>
          <div className="text-white">
            <p className="text-justify mt-2 mb-5">
              Une simple application qui permet de visualiser une image de chien
              aléatoirement et d'en géréner à l'infis
            </p>
            <BadgeTitleWork title={"WEBSITE"}>
              <a
                className="text-cyan-500 hover:underline"
                href="https://dogoviewer.web.app/"
              >
                https://dogoviewer.web.app/
              </a>
            </BadgeTitleWork>
            <BadgeTitleWork title={"STACK"}>
              <p>ReactJS, Tailwindcss</p>
            </BadgeTitleWork>
            <BadgeTitleWork title={"Github"}>
              <a
                href="https://github.com/ClementLegros/doggo-viewer"
                className="text-cyan-500"
              >
                doggo-viewer
              </a>
            </BadgeTitleWork>
          </div>
        </CenterContainer>
      </Layout>
    </MainContainer>
  );
};

export default DoggoViewer;
