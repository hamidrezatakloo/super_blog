import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./container/Home";
import Blog from "./container/Blog";
import Layout from "./hoc/Layout";
import Signup from "./container/Signup";
import Login from "./container/Login";
import Activate from "./container/Activate";
import { Toaster } from "react-hot-toast";
import Dashboard from "./container/Dashboard";
import { useSelector } from "react-redux";
function App() {
  const token = useSelector((state) => state.authentication.token);
  return (
    <BrowserRouter>
      <Layout>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route
            path="/login"
            element={token ? <Navigate to="/dashboard" /> : <Login />}
          ></Route>
          <Route
            path="/signup"
            element={token ? <Navigate to="dashboard" /> : <Signup />}
          ></Route>
          <Route path="/activate/:uid/:token" element={<Activate />}></Route>
          <Route
            path="/dashboard"
            element={token ? <Dashboard /> : <Navigate to="/login" />}
          ></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
