import Navbar from "../Components/Navbar";

const ComptencePage = () => {
  const [comptence, setComptence] = useState([]);

  useEffect(() => {
    const comp = [
      {
        name: "ReactJS",
        percent: 100,
      },
      {
        name: "NodeJS",
        percent: 80,
      },
      {
        name: "HTML5",
        percent: 100,
      },
      {
        name: "CSS3",
        percent: 100,
      },
      {
        name: "JavaScript",
        percent: 100,
      },
    ];
  }, [comptence]);

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className=""></div>
    </div>
  );
};

export default ComptencePage;
