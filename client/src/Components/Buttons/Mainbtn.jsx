import { Link } from "react-router-dom";

function Mainbtn({ className = "", text, to = "#", }) {
  return (
    <Link to={to} className={`main-btn ${className}`}>
      {text}
    </Link>
  );
}

export default Mainbtn