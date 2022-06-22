import CenterContainer from "../Components/CenterContainer";
import Layout from "../Components/Layout";
import MainContainer from "../Components/MainContainer";
import Navbar from "../Components/Navbar";
import React from "react";
import Work from "../Components/Work";

const WorkPage = () => {
  const [works, setWorks] = React.useState([]);

  React.useEffect(() => {
    /*
            init all my works in array
        */
    const worklist = [
      {
        name: "doggo-viewer",
        description:
          "Site web permettant de générer d'afficher des images de chien avec un click",
        image: "../dogo-viewer.png",
        linkWebsite: "https://dogoviewer.web.app/",
        linkGithub: "https://github.com/ClementLegros/doggo-viewer",
      },
      {
        name: "shinomasuyoo",
        description: "Site web de traduction de carte d'un jeux mobile",
        image: "../dogo-viewer.png",
        linkWebsite: "https://shinomasuyo-senran.web.app/",
        linkGithub: "https://github.com/ClementLegros/shinomasuyooo",
      },
      {
        name: "test",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique vitae nulla tempor or",
        image: "../dogo-viewer.png",
        linkWebsite: "https://dogoviewer.web.app/",
        linkGithub: "https://github.com/ClementLegros/doggo-viewer",
      },
      {
        name: "test",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed faucibus libero, non laoreet turpis. Sed pretium feugiat risus eu faucibus",
        image: "../dogo-viewer.png",
        linkWebsite: "https://shinomasuyo-senran.web.app/",
        linkGithub: "https://github.com/ClementLegros/shinomasuyooo",
      },
    ];
    setWorks(worklist);
  }, []);

  return (
    <MainContainer>
      <Navbar />
      <Layout>
        <CenterContainer>
          <div className="flex flex-row mb-4">
            <p className="text-lg font-semibold text-white">Travaux</p>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-3 w-full">
            {works.map((work, index) => (
              <Work
                key={work.name}
                name={work.name}
                description={work.description}
                image={work.image}
              />
            ))}
          </div>
        </CenterContainer>
      </Layout>
    </MainContainer>
  );
};

export default WorkPage;
