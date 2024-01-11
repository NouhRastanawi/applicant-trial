import { Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

// importing pages
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProjectsPage from "./pages/ProjectsPage";
// import Login from "./components/login/Login";
// import ProjectsList from "./components/projectsList/ProjectsList";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Login /> */}
      {/* <ProjectsList /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/produkte" element={<ProjectsPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
