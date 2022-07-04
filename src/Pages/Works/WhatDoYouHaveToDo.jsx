import BadgeTitleWork from "../../Components/BadgeTitleWork";
import CenterContainer from "../../Components/CenterContainer";
import Layout from "../../Components/Layout";
import MainContainer from "../../Components/MainContainer";
import Navbar from "../../Components/Navbar";
import WorksNavigation from "../../Components/WorksNavigation";

const WhatDoYouHaveToDo = () => {
    return (
        <MainContainer>
            <Navbar />
            <Layout>
                <CenterContainer>
                    <WorksNavigation>WhatDoYouHaveToDo?</WorksNavigation>
                    <div className="text-white">
                        <p className="text-justify mt-2 mb-5">
                            Une application to-do minimaliste avec une gestion
                            de compte pour sauvegarder ses différentes notes
                        </p>
                        <BadgeTitleWork title={"WEBSITE"}>
                            <a
                                className="text-cyan-500 text-sm md:text-md hover:underline"
                                href="https://wdyhtd.web.app/"
                            >
                                https://wdyhtd.web.app/
                            </a>
                        </BadgeTitleWork>
                        <BadgeTitleWork title={"STACK"}>
                            <p className="">ReactJS, ChakraUI, Express, Sequelize</p>
                        </BadgeTitleWork>
                        <BadgeTitleWork title={"Github"}>
                            <a
                                href="https://github.com/ClementLegros/wdyhtd-front"
                                className="text-cyan-500"
                            >
                                WhatDoYouHaveToDo
                            </a>
                        </BadgeTitleWork>
                    </div>
                </CenterContainer>
            </Layout>
        </MainContainer>
    );
};

export default WhatDoYouHaveToDo;
