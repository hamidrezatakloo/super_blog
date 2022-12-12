import { Fragment } from "react";
import { Link } from "react-router-dom";
const NavbarMenu = () => {
  return (
    <Fragment>
      <li className="text-gray-500 transition hover:text-gray-500/75">
        <Link to="/about">About</Link>
      </li>

      <li className="text-gray-500 transition hover:text-gray-500/75">
        <Link to="/bookmark">Bookmarks</Link>
      </li>

      <li className="text-gray-500 transition hover:text-gray-500/75">
        <Link to="/dashboard">dashboard</Link>
      </li>

      <li className="text-gray-500 transition hover:text-gray-500/75">
        <Link to="/blog">Blog</Link>
      </li>
    </Fragment>
  );
};

export default NavbarMenu;
