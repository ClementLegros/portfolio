import { Link } from "react-router-dom";

const WorksNavigation = ({ children }) => {
  return (
    <div className="flex flex-row items-center text-white">
      <Link to="/works" className="text-sm text-cyan-500 hover:underline">
        Travaux
      </Link>
      <p className="ml-1">{" >"}</p>
      <p className="text-lg font-semibold ml-1">{children}</p>
    </div>
  );
};

export default WorksNavigation;
