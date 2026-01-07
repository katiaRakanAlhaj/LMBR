import { Link } from "react-router-dom";

const NavLink = ({ title, path }) => {
  return (
    <Link
      to={path}
      className="text-white text-nowrap text-[1.1rem] cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default NavLink;
