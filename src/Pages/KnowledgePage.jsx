import CenterContainer from "../Components/CenterContainer";
import MainContainer from "../Components/MainContainer";
import Navbar from "../Components/Navbar";
import React from "react";
import Knowledge from "../Components/Knowledge";
import Layout from "../Components/Layout";

const KnowledgePage = () => {
  const [knowledges, setKnowledges] = React.useState([]);

  React.useEffect(() => {
    /*
            init all my knowledges in array
        */
    const knowledgelist = [
      {
        name: "HTML",
        percentage: "95",
      },
      {
        name: "CSS",
        percentage: "95",
      },
      {
        name: "Javascript",
        percentage: "90",
      },
      {
        name: "ReactJS",
        percentage: "60",
      },
      {
        name: "NodeJS",
        percentage: "60",
      },
      {
        name: "ExpressJS",
        percentage: "50",
      },
      {
        name: "TailwindCSS",
        percentage: "80",
      },
      {
        name: "PostgreSQL",
        percentage: "70",
      },
      {
        name: "Heroku",
        percentage: "40",
      },
      {
        name: "Git",
        percentage: "60",
      },
    ];
    setKnowledges(knowledgelist);
  }, []);

  return (
    <MainContainer>
      <Navbar />
      <Layout>
        <CenterContainer>
          <div className="flex flex-row">
            <p className="text-lg font-semibold text-white mb-4">Compétences</p>
          </div>
          {knowledges.map((knowledge, index) => (
            <Knowledge
              key={knowledge.name}
              name={knowledge.name}
              percentage={knowledge.percentage}
            />
          ))}
        </CenterContainer>
      </Layout>
    </MainContainer>
  );
};

export default KnowledgePage;
