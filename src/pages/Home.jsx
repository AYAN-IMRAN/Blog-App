import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import BlogCard from "../components/BlogCard";
import { tableDB } from "../contants";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await tableDB.listRows({
          databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
          tableId: import.meta.env.VITE_APPWRITE_TABLE_NAME,
          queries: [],
        });

        if (res?.documents) {
          setBlogs(res.documents);
        }
      } catch (err) {
        console.error("❌ Failed to load blogs:", err);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          📰 Latest Blogs
        </h1>

        <div className="mb-10 max-w-md mx-auto flex gap-2">
          <input
            placeholder="Search blogs..."
            className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <button className="px-4 bg-cyan-600 rounded-xl hover:bg-cyan-500 text-white">
            <Search size={20} />
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((singleblog) => (
            <BlogCard
              key={singleblog.$id}
              image={singleblog.image}
              title={singleblog.title}
              desc={singleblog.desc}
              date={singleblog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
