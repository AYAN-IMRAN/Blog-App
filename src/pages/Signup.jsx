import { NavLink, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import { account } from "../contants"; 
import { ID } from "appwrite";
import { toast } from "sonner";



function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] px-4 bg-neutral-950">
      <div className="w-full max-w-md bg-neutral-900 rounded-2xl border border-neutral-800 p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Create an Account
        </h2>

        <div className="w-full space-y-4">
          <Input
            label="Name"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
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
              if (!email || !password || !name) {
                toast.error("⚠️ Please fill all required fields", {
                  description: "Name, email & password can’t be empty",
                });
              } else {
                try {
                  let user = await account.create(
                    ID.unique(),
                    email,
                    password, 
                    name
                  );

                  if (user) {
                    toast.success("🎉 Account Created!", {
                      description: "You can now login with your credentials.",
                    });
                    console.log(user);
                    navigate("/login");
                  }
                } catch (error) {
                  toast.error("❌ Something went wrong", {
                    description: error.message || "Please try again later.",
                  });
                }
              }
            }}
          >
            Sign Up
          </button>
        </div>

        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-neutral-700" />
          <span className="text-neutral-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-neutral-700" />
        </div>

        <p className="text-sm text-center text-neutral-400 mt-6">
          Already have an account?{" "}
          <NavLink to="/login" className="text-cyan-400 hover:underline">
            Log In
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;
