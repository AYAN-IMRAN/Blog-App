import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Mail } from "lucide-react";

function Profile() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
  }); // 🔹 Abhi ke liye dummy data
  const navigate = useNavigate();

  // Dummy logout handler (sirf navigate ke liye)
  const handleLogout = () => {
    console.log("User logged out");
    navigate("/login"); // logout ke baad login page par bhej do
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl p-8 text-center space-y-6">
        
        {/* Avatar */}
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
          {user.name[0]}
        </div>

        {/* Name + Email */}
        <div>
          <h1 className="text-2xl font-bold text-white">{user.name}</h1>
          <p className="flex items-center justify-center gap-2 text-neutral-400 text-sm mt-1">
            <Mail size={16} /> {user.email}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-neutral-800 rounded-xl py-3">
            <h2 className="text-lg font-semibold text-white">12</h2>
            <p className="text-xs text-neutral-400">Blogs</p>
          </div>
          <div className="bg-neutral-800 rounded-xl py-3">
            <h2 className="text-lg font-semibold text-white">230</h2>
            <p className="text-xs text-neutral-400">Likes</p>
          </div>
          <div className="bg-neutral-800 rounded-xl py-3">
            <h2 className="text-lg font-semibold text-white">580</h2>
            <p className="text-xs text-neutral-400">Views</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
