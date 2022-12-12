import Navbar from "../components/Navbar";
import AuthNavbar from "../components/AuthNavbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(true);
  let location = useLocation();
  const verify = useSelector((state) => state.authentication.verify);
  //monitor current path if they are login or signup
  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/signup" ||
      /dashboard\/.*|dashboard/.test(location.pathname)
    )
      setShowNav(false);
    else setShowNav(true);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen relative">
      {showNav && !verify && <Navbar />}
      {showNav && verify && <AuthNavbar />}
      {children}
    </div>
  );
};

export default Layout;
