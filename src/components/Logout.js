import { Link, useNavigate } from "react-router-dom";
const Logout = ({ dashboard }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/blog");
    navigate(0);
  };
  return (
    <Link
      className={`${
        dashboard
          ? "mt-auto mb-4 mx-auto text-center text-md w-10/12 text-md"
          : "text-sm"
      } rounded-md bg-teal-600 px-5 py-2.5 font-medium text-white shadow border-2 hover:border-teal-500 hover:bg-white hover:text-teal-500`}
      onClick={handleLogout}
    >
      Logout
    </Link>
  );
};

export default Logout;
