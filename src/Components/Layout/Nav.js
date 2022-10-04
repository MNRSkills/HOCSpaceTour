import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/destinations">Destinations</Link>
      <Link to="/crew">Crew</Link>
    </div>
  );
};

export default Nav;
