import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

// importing pages
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
