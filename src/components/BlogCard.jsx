function BlogCard({ image, title, desc, date }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-200">
      {/* Blog Image */}
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      {/* Blog Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-lg font-semibold text-white line-clamp-1">
          {title}
        </h2>
        <p className="text-sm text-neutral-400 line-clamp-2">
          {desc}
        </p>
       <p className="text-neutral-500 text-xs mt-3">
          {new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>

        {/* Read More Button */}
        <button className="mt-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition">
          Read More →
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
