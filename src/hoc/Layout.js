import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
