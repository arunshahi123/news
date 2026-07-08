import React from "react";
import {
  LayoutDashboard,
  Newspaper,
  PlusCircle,
  Mail,
  LogOut,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar({ onClose, setOpen }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/", { replace: true });
  };

  const closeMenu = () => {
    if (onClose) onClose();
    if (setOpen) setOpen(false);
  };

  const menu = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path: "/admin/dashboard",
    },
    {
      title: "Add News",
      icon: <PlusCircle size={18} />,
      path: "/admin/add-news",
    },
    {
      title: "All News",
      icon: <Newspaper size={18} />,
      path: "/admin/news",
    },
    {
      title: "Messages",
      icon: <Mail size={18} />,
      path: "/admin/messages",
    },
  ];

  return (
    <div className="h-full flex flex-col bg-slate-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-slate-700">
        <div>
          <h1 className="text-xl font-bold">Admin</h1>
          <p className="text-sm text-gray-400">Admin Panel</p>
        </div>

        <button
          className="md:hidden"
          onClick={closeMenu}
          aria-label="Close sidebar"
        >
          <X />
        </button>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-2 flex-1 overflow-auto">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-red-600 text-white"
                  : "hover:bg-slate-800 text-gray-200"
              }`
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 rounded-lg transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}