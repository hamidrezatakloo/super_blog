import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Blogs from "./container/Blogs";
import Layout from "./hoc/Layout";
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Blogs />}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
