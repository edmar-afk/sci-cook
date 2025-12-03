import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Contents from "./routes/Contents";
import Content2 from "./routes/Content2";
import Content3 from "./routes/Content3";

function Logout() {
  localStorage.clear();
  return <Navigate to="/" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/content2" element={<Content2 />} />
         <Route path="/content3" element={<Content3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
