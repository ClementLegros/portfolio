import CenterContainer from "../Components/CenterContainer";
import Layout from "../Components/Layout";
import MainContainer from "../Components/MainContainer";
import Navbar from "../Components/Navbar";
import { VscGithubInverted } from "react-icons/vsc";

const ContactPage = () => {
  return (
    <MainContainer>
      <Navbar />
      <Layout>
        <CenterContainer>
          <div className="flex flex-row mb-4">
            <p className="text-lg font-semibold text-white">Contactez moi</p>
          </div>
          <div className="flex flex-row text-white mb-4">
            <p>
              Vous pouvez me contactez à cette adresse mail :{" "}
              <a
                className="text-cyan-500 font-semibold hover:underline"
                href="mailto:clement.legros.91220@gmail.com"
              >
                clement.legros.91220@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-row items-center text-white">
            <p className="mr-2">Vous pouvez aussi me retrouver sur</p>
            <VscGithubInverted />
            <a
              href="https://github.com/ClementLegros"
              className="text-cyan-500 font-semibold hover:underline"
            >
              ClementLegros
            </a>
          </div>
        </CenterContainer>
      </Layout>
    </MainContainer>
  );
};

export default ContactPage;
