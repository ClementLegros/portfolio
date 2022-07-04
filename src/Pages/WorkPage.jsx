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
        name: "WhatDoYouHaveToDo?",
        description: "Aplication de gestion de tâches",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59a79cb6-b988-4bb1-a714-2c7957f253c7/df8k2cn-414f94fe-5587-496a-a351-87adaf65873f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5YTc5Y2I2LWI5ODgtNGJiMS1hNzE0LTJjNzk1N2YyNTNjN1wvZGY4azJjbi00MTRmOTRmZS01NTg3LTQ5NmEtYTM1MS04N2FkYWY2NTg3M2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cLvvQDFCTYlwtwqSEUYX7NEu9rFlFr6axme1Ah9ZIxI",
        linkWebsite: "https://whatdoyouhavetodo.herokuapp.com/",
        linkGithub: "https://github.com/ClementLegros/wdyhtd-front",
      },
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
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59a79cb6-b988-4bb1-a714-2c7957f253c7/df8k2f1-0996189d-0717-494d-bce3-8f350693dfe6.png/v1/fill/w_1280,h_364,q_80,strp/wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww_by_kaowou_df8k2f1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzY0IiwicGF0aCI6IlwvZlwvNTlhNzljYjYtYjk4OC00YmIxLWE3MTQtMmM3OTU3ZjI1M2M3XC9kZjhrMmYxLTA5OTYxODlkLTA3MTctNDk0ZC1iY2UzLThmMzUwNjkzZGZlNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Hn8EyLMWs-TRt8ZAF5SAlsr4Xx0PPv1U9t_p72mTxQ4",
        linkWebsite: "https://shinomasuyo-senran.web.app/",
        linkGithub: "https://github.com/ClementLegros/shinomasuyooo",
      },
      {
        name: "test faux lien",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique vitae nulla tempor or",
        image: "../dogo-viewer.png",
        linkWebsite: "https://dogoviewer.web.app/",
        linkGithub: "https://github.com/ClementLegros/doggo-viewer",
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
