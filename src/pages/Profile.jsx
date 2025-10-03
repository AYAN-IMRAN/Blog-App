import { useNavigate } from "react-router-dom";
import { LogOut, Mail, CheckCircle } from "lucide-react";
import useAuth from "../hooks/useAuth";
import { account } from "../contants";
import ProfileSkeleton from "../components/ProfileSkeleton";

function Profile() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (!user) {
    return (
      <div className="text-center text-red-500 mt-10">
        Please login first.
      </div>
    );
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-full w-full bg-neutral-950 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl p-6 sm:p-8 text-center space-y-6">
          
          {/* Avatar */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-xl sm:text-2xl font-bold text-white shadow-lg">
            {user.name[0]}
            {user.emailVerification && (
              <span className="absolute bottom-0 right-0 bg-neutral-900 rounded-full p-1 shadow-lg">
                <CheckCircle className="text-cyan-400" size={18} />
              </span>
            )}
          </div>

          {/* Name + Email */}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">{user.name}</h1>
            <p className="flex items-center justify-center gap-1.5 sm:gap-2 text-neutral-400 text-xs sm:text-sm mt-1">
              <Mail size={14} /> {user.email}
            </p>
          </div>

          {/* Logout */}
          <button
            onClick={async () => {
              await account.deleteSession("current");
              navigate("/login");
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
