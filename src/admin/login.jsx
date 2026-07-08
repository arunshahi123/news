import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (password === "admin123") {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Wrong Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={login}
        className="bg-white shadow-xl rounded-xl p-8 w-96"
      >

        <h1 className="text-3xl font-bold text-center mb-6 text-red-600">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border rounded-lg p-3 mb-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
        >
          Login
        </button>

      </form>

    </div>
  );
}