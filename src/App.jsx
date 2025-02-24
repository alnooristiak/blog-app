import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/blog/Blog";
import AllBlogs from "./Pages/allBlogs/AllBlogs";
import BlogInfo from "./Pages/blogInfo/BlogInfo";
import AdminLogin from "./Pages/admin/adminLogin/AdminLogin";
import Dashboard from "./Pages/admin/dashboard/Dashboard";
import Nopage from "./Pages/nopage/Nopage";
import MyState from "./context/data/myState";
import CreateBlog from "./pages/admin/createBlog/CreateBlog";
import { Toaster } from "react-hot-toast";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/allblogs" element={<AllBlogs />} />
            <Route path="/bloginfo/:id" element={<BlogInfo />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createblog" element={<CreateBlog />} />
            {/* <Route path="/*" element={<NoPage />} /> */}
          </Routes>
          <Toaster />
        </Router>
      </MyState>
    </>
  );
}

export default App;
