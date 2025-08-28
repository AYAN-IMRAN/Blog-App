import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateBlog from "./pages/CreateBlog";
import { Toaster, toast } from 'sonner';


function App() {
  return (
    <BrowserRouter>
      {/* Global Layout */}
      <div className="min-h-screen bg-neutral-950 text-white">
        <Navbar />
         <Toaster 
        position="top-center"
        richColors
        closeButton
        expand
      />
        
        {/* Routes */}
        <main className="pt-6"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create" element={<CreateBlog />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App