import * as React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Login />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
