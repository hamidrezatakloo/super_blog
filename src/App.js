import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Blog from "./container/Blog";
import Layout from "./hoc/Layout";
import Signup from "./container/Signup";
import Login from "./container/Login";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
