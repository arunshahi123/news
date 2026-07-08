import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";

import AdminLogin from "./admin/login";
import AdminLayout from "./admin/layout/AdminLayout";

import Dashboard from "./admin/pages/Dashboard";
import AllNews from "./admin/pages/AllNews";
import AddNews from "./admin/pages/AddNews";
import Messages from "./admin/pages/Messages";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Public Website */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </>
          }
        />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Panel */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="news" element={<AllNews />} />
          <Route path="add-news" element={<AddNews />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;