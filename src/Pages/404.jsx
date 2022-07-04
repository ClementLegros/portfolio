import { Link } from "react-router-dom";
import CenterContainer from "../Components/CenterContainer";
import Layout from "../Components/Layout";
import MainContainer from "../Components/MainContainer";
import Navbar from "../Components/Navbar";

const NotFound = () => {
  return (
    <MainContainer>
      <Navbar />
      <Layout>
        <CenterContainer>
          <div className="flex flex-col items-center">
            <img
              className="mb-5"
              src="https://c.tenor.com/T_CaDwUNsjMAAAAC/floppa-exfloppa.gif"
              alt="Erreur 404"
            />
            <p className="text-center text-white font-semibold text-2xl mb-5">
              Vous n'êtes pas censé être ici :{"("}
            </p>
            <Link
              className="text-center w-32 bg-cyan-500 hover:bg-cyan-600"
              to="/"
            >
              Revenez en lieu sur !
            </Link>
          </div>
        </CenterContainer>
      </Layout>
    </MainContainer>
  );
};

export default NotFound;
