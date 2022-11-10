import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Blogs from "./container/Blogs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Blogs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
