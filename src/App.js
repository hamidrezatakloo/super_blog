import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Blog from "./container/Blog";
import Layout from "./hoc/Layout";
import Signup from "./container/Signup";
import Login from "./container/Login";
import Activate from "./container/Activate";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/activate/:uid/:token" element={<Activate />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
