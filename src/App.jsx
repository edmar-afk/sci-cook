import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Contents from "./routes/Contents";
import Content2 from "./routes/Content2";
import Content3 from "./routes/Content3";
import Content4 from "./routes/Content4";
import ScrollToTop from "./ScrollToTop";
import Content5 from "./routes/Content5";
import Content6 from "./routes/Content6";

function Logout() {
  localStorage.clear();
  return <Navigate to="/" />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/content2" element={<Content2 />} />
        <Route path="/content3" element={<Content3 />} />
        <Route path="/content4" element={<Content4 />} />
        <Route path="/content5" element={<Content5 />} />
        <Route path="/content6" element={<Content6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
