import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 h-full">
      <Sidebar />
      <Profile />
    </div>
  );
};

export default Dashboard;
