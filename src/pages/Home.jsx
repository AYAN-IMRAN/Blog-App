import { useEffect, useState } from "react";
import { Search } from 'lucide-react';
import BlogCard from "../components/BlogCard";
import Input from "../components/Input";

function Home() {

const blogs = [
  {
    id: 0,
    title: "Blog Post 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quisquam.",
    date: "Aug 23, 2025",
    image: "https://picsum.photos/600/400?random=0",
  },
  {
    id: 1,
    title: "Blog Post 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quisquam.",
    date: "Aug 23, 2025",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    id: 2,
    title: "Blog Post 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quisquam.",
    date: "Aug 23, 2025",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    id: 3,
    title: "Blog Post 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quisquam.",
    date: "Aug 23, 2025",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    id: 4,
    title: "Blog Post 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quisquam.",
    date: "Aug 23, 2025",
    image: "https://picsum.photos/600/400?random=4",
  },
  {
    id: 5,
    title: "Blog Post 6",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quisquam.",
    date: "Aug 23, 2025",
    image: "https://picsum.photos/600/400?random=5",
  },
];



  return (
    <div className="min-h-screen bg-neutral-950 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          📰 Latest Blogs
        </h1>

        {/* Search Bar */}
        <div className="mb-10 max-w-md mx-auto flex gap-2">
          <input
            placeholder="Search blogs..."
            className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-cyan-500 transition"
            
          />
          <button
            className="px-4 bg-cyan-600 rounded-xl hover:bg-cyan-500 text-white"
          >
            <Search size={20} />
          </button>

        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
         {blogs.map((singleblog) => (
            <BlogCard
              key={singleblog.id}
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
