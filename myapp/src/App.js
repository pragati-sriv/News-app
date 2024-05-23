import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Welcome from "./Components/Welcome";
import Register from "./Page/Register";
import Login from "./Page/Login";
import Home from "./Page/Home";
import AddNews from "./Page/AddNews";
import { NewsProvider } from "./Components/NewsContext";
import Sidebar from "./Components/Sidebar";
import PostedNews from "./Page/PostedNews";

import "./App.css";

const AppLayout = () => {
  const location = useLocation();
  const noSidebarRoutes = ["/", "/logout"];

  return (
    <div className="App">
      {!noSidebarRoutes.includes(location.pathname) && <Sidebar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/posted-news" element={<PostedNews />} />
        <Route path="/logout" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <NewsProvider>
      <Router>
        <AppLayout />
      </Router>
    </NewsProvider>
  );
}

export default App;
