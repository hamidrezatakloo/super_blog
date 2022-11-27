import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 h-full">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
