import { NavLink, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import { account } from "../contants"; 
import { ID } from "appwrite";
import { toast } from "sonner";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] px-4 bg-neutral-950">
      <div className="w-full max-w-md bg-neutral-900 rounded-2xl border border-neutral-800 p-8 shadow-xl">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Welcome Back
        </h2>

        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button
            className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition duration-200"
            onClick={async () => {
              if (!email || !password) {
                // custom error toast
                toast.custom((t) => (
                  <div
                    className={`${
                      t.visible ? "animate-enter" : "animate-leave"
                    } max-w-sm w-full bg-neutral-900 text-white border border-red-500/40 shadow-xl rounded-xl p-4 flex items-start gap-3`}
                  >
                    <div className="bg-red-500 text-black w-8 h-8 flex items-center justify-center rounded-full font-bold">
                      ⚠️
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Missing Fields</p>
                      <p className="text-sm text-neutral-400">
                        Email & password can’t be empty.
                      </p>
                    </div>
                    <button
                      onClick={() => toast.dismiss(t)}
                      className="text-neutral-400 hover:text-white transition"
                    >
                      ✖
                    </button>
                  </div>
                ));
              } else {
                try {
                  // yahan normally login call hota hai, tum account.create ki jagah
                  // account.createEmailSession use karoge login ke liye
                  let user = await account.createEmailPasswordSession(email, password);

                  if (user) {
  // custom success toast
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-sm w-full bg-neutral-900 text-white border border-cyan-500/40 shadow-xl rounded-xl p-4 flex items-start gap-3`}
    >
      <div className="bg-cyan-500 text-black w-8 h-8 flex items-center justify-center rounded-full font-bold">
        ✅
      </div>
      <div className="flex-1">
        <p className="font-semibold">Login Successful</p>
        <p className="text-sm text-neutral-400">
          Welcome back! Redirecting you...
        </p>
      </div>
      <button
        onClick={() => toast.dismiss(t)}
        className="text-neutral-400 hover:text-white transition"
      >
        ✖
      </button>
    </div>
  ));

  console.log(user);

  // ⏳ 3 sec delay before redirect
  setTimeout(() => {
    navigate("/");
  }, 3000);
}

                } catch (error) {
                  toast.custom((t) => (
                    <div
                      className={`${
                        t.visible ? "animate-enter" : "animate-leave"
                      } max-w-sm w-full bg-neutral-900 text-white border border-red-500/40 shadow-xl rounded-xl p-4 flex items-start gap-3`}
                    >
                      <div className="bg-red-500 text-black w-8 h-8 flex items-center justify-center rounded-full font-bold">
                        ❌
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Login Failed</p>
                        <p className="text-sm text-neutral-400">
                          {error.message || "Please try again later."}
                        </p>
                      </div>
                      <button
                        onClick={() => toast.dismiss(t)}
                        className="text-neutral-400 hover:text-white transition"
                      >
                        ✖
                      </button>
                    </div>
                  ));
                }
              }
            }}
          >
            Login
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-neutral-700" />
          <span className="text-neutral-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-neutral-700" />
        </div>

        {/* Footer */}
        <p className="text-sm text-center text-neutral-400 mt-6">
          Don’t have an account?{" "}
          <NavLink to="/signup" className="text-cyan-400 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
