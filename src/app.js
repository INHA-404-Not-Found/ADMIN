import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PostDetailFrame from "./components/PostDetailFrame";
import PostDetailFrameEdit from "./components/PostDetailEditFrame";
import AdminManagementPage from "./pages/AdminManagementPage";
import PostRegistPage from "./pages/PostRegistPage";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FontTest from "./fonts/FontTest";
import ItemCategoryPage from "./pages/ItemCategoryPage";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage type="login" />} />

          <Route path="/" element={<MainPage />} />
          {/* <Route path="/adminManagement" element={<AdminManagementPage />} /> */}
          <Route path="/itemCategory" element={<ItemCategoryPage />} />
          <Route path="/postDetailFrame" element={<PostDetailFrame />} />
          <Route path="/postDetailFrameEdit" element={<PostDetailFrameEdit />} />
          <Route path="/postRegist" element={<PostRegistPage />} />
          <Route path="/fontTest" element={<FontTest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;