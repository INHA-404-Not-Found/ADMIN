import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/MainPage";
import ItemCategoryPage from "./pages/itemCategory/ItemCategoryPage";
import FontTest from "./fonts/FontTest";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage type="login" />} />

          <Route path="/" element={<MainPage />} />
          <Route path="/itemCategory" element={<ItemCategoryPage />} />
          <Route path="/fontTest" element={<FontTest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;