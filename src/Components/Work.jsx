import { Link } from "react-router-dom";

const Work = (props) => {
  return (
    <div className="w-full flex flex-col mb-8 text-white items-center text-center">
      <Link to={"/work/" + props.name}>
        <img className="h-36" src={props.image} alt={props.description} />
      </Link>
      <p className="text-xl font-semibold">{props.name}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Work;