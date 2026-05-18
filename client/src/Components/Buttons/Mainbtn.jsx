import { Link } from "react-router-dom";

function Mainbtn({ className = "", text, to,type="button" }) {

    if(to){
      return (
        <Link to={to} className={`main-btn ${className}`}>
        {text}
      </Link>
      );
    } 

    return(
      <button type={type} className={`main-btn ${className}`}>
        {text}
      </button>
    )
}

export default Mainbtn