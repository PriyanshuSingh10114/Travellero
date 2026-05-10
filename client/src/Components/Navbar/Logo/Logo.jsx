import { Link } from "react-router-dom";

function Logo({ className = "" }) {
  return (
    <>
      <Link
        to="/"
        className={`logo cursor-pointer text-2xl md:text-4xl text-white font-medium font-kaushan ${className}`}
      >
        <i>Travelo</i>
        <span className="text-prim"><i>r.</i></span>
      </Link>
    </>
  );
}

export default Logo;