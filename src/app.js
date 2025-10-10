import LoginPage from "./pages/LoginPage";
import MainPage from "./admin/Main";
import PostDetailFrame from "./components/PostDetailFrame";
import PostDetailFrameEdit from "./components/PostDetailEditFrame";
import AdminManagementPage from "./pages/AdminManagementPage";
import PostRegistPage from "./pages/PostRegistPage";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage type="login" />} />

          <Route path="/" element={<MainPage />} />
          <Route path="/adminManagement" element={<AdminManagementPage />} />
          <Route path="/postDetailFrame" element={<PostDetailFrame />} />
          <Route path="/postDetailFrameEdit" element={<PostDetailFrameEdit />} />
          <Route path="/postRegist" element={<PostRegistPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;