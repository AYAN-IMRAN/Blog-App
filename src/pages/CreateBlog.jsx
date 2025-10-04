import { useState } from "react";
import Input from "../components/Input";
import { toast } from "sonner";
import useAuth from "../hooks/useAuth";
import { account, tableDB, ID } from "../contants";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const handlePublish = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!user) {
      toast.error("⚠️ Please login to create a blog.");
      return;
    }

    if (!title || !desc || !date || !image) {
      toast.error("Please fill required fields.");
      return;
    }

    try {
      const blog = await tableDB.createRow({
        databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
        tableId: import.meta.env.VITE_APPWRITE_TABLE_NAME,
        rowId: ID.unique(),
        data: {
          userId: user.$id,
          title,
          desc,
          date,
          image,
        },
      });
      if (blog) {
        toast.success("✅ Blog posted successfully!");

        setTitle("");
        setDesc("");
        setDate("");
        setImage("");

        setTimeout(() => {
          navigate("/")
        }, 2000); ;
      }
    } catch (error) {
      console.error("❌ Create Blog Error:", error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="h-full bg-neutral-950 flex items-start justify-center px-8 py-8 overflow-hidden">
      <div className="w-full max-w-lg bg-neutral-900 rounded-xl border border-neutral-800 shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-5 text-center">
          ✍️ Create Blog
        </h2>

        <div className="space-y-4">
          <Input
            label="Title"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="flex flex-col space-y-1 w-full">
            <label className="text-sm font-medium text-neutral-300">
              Description
            </label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Write a short description..."
              rows={3}
              className="w-full px-3 py-2 rounded-lg bg-neutral-800 text-white 
                         placeholder-neutral-500 focus:outline-none 
                         focus:ring-2 focus:ring-cyan-500 border border-neutral-700 resize-none"
            />
          </div>

          <Input
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <div className="space-y-1">
            <label className="text-sm font-medium text-neutral-300">
              Upload Image
            </label>
            <input
              type="url"
              onChange={(e) => setImage(e.target.value)}
              className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-3 py-2 text-sm text-white"
            />
          </div>

          <button
            onClick={handlePublish}
            className="w-full py-2.5 rounded-lg text-white font-semibold 
                       bg-gradient-to-r from-cyan-500 to-cyan-600 
                       hover:from-cyan-400 hover:to-cyan-500 
                       transition duration-200"
          >
            🚀 Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
