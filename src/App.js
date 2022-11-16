import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Blog from "./container/Blog";
import Layout from "./hoc/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
