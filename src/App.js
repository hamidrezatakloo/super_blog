import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./container/Home";
import Blog from "./container/Blog";
import Layout from "./hoc/Layout";
import Signup from "./container/Signup";
import Login from "./container/Login";
import Activate from "./container/Activate";
import { Toaster } from "react-hot-toast";
import Dashboard from "./container/Dashboard";
import { useSelector, useDispatch } from "react-redux";
import { SetToken, SetUser, SetVerify } from "./slices/AuthenticationSlice";
import Profile from "./components/Profile";
import NewPost from "./components/NewPost";
import EditProfile from "./components/Editprofile";
import { useEffect } from "react";
import axios from "axios";
import NotFound from "./container/NotFound";
function App() {
  const dispatch = useDispatch();
  const verify = useSelector((state) => state.authentication.verify);
  useEffect(() => {
    if (localStorage.hasOwnProperty("token")) {
      const token = localStorage.getItem("token");
      axios
        .post("http://127.0.0.1:8000/auth/jwt/verify/", { token: token })
        .then((response) => {
          dispatch(SetVerify(true));
          dispatch(SetToken(token));
          dispatch(SetUser(JSON.parse(localStorage.getItem("user"))));
          console.log(response);
        })
        .catch((error) => {
          dispatch(SetVerify(false));
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          console.log(error);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Toaster />
        <Routes>
          <Route path="/super_blog" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route
            path="/login"
            element={verify ? <Navigate to="/dashboard" /> : <Login />}
          ></Route>
          <Route
            path="/signup"
            element={verify ? <Navigate to="dashboard" /> : <Signup />}
          ></Route>
          <Route path="/activate/:uid/:token" element={<Activate />}></Route>
          <Route
            path="/dashboard"
            element={verify ? <Dashboard /> : <Navigate to="/login" />}
          >
            <Route path="profile" element={<Profile />}></Route>
            <Route path="newPost" element={<NewPost />}></Route>
            <Route path="edit" element={<EditProfile />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
