import { Link } from "react-router-dom";
import CenterContainer from "../../Components/CenterContainer";
import Layout from "../../Components/Layout";
import MainContainer from "../../Components/MainContainer";
import Navbar from "../../Components/Navbar";
import WorkingOnIt from "../../Components/WorkingOnIt";
import WorksNavigation from "../../Components/WorksNavigation";

const DoggoViewer = () => {
  return (
    <MainContainer>
      <Navbar />
      <Layout>
        <CenterContainer>
          <WorksNavigation>Doggo Viewer</WorksNavigation>
          <WorkingOnIt />
        </CenterContainer>
      </Layout>
    </MainContainer>
  );
};

export default DoggoViewer;
