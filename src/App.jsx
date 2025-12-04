import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Contents from "./routes/Contents";
import Content2 from "./routes/Content2";
import Content3 from "./routes/Content3";
import Content4 from "./routes/Content4";
import ScrollToTop from "./ScrollToTop";
import Content5 from "./routes/Content5";
import Content6 from "./routes/Content6";
import Content7 from "./routes/Content7";
import InteractiveExercise from "./routes/InteractiveExercise";
import Quiz from "./routes/Quiz";
import Key from "./routes/Key";
import Reference from "./routes/Reference";
import Reflection from "./routes/Reflection";
import Quiz2 from "./routes/Quiz2";

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
        <Route path="/content7" element={<Content7 />} />
        <Route path="/exercise" element={<InteractiveExercise />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz2" element={<Quiz2 />} />
        <Route path="/key" element={<Key />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/reflection" element={<Reflection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
