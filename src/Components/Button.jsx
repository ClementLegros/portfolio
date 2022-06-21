import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button className="bg-cyan-900 hover:bg-cyan-800 w-52 h-16 rounded shadow-md">
      <Link to={props.link}>{props.text}</Link>
    </button>
  );
};

export default Button;
