import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(true);
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup")
      setShowNav(false);
    else setShowNav(true);
  }, [location]);
  return (
    <div className="flex flex-col h-screen">
      {showNav && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
