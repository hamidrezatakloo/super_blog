import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex-1 flex overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
