import Input from "../components/Input";

function CreateBlog() {
  return (
    <div className="h-full bg-neutral-950 flex items-start justify-center px-8 py-8 overflow-hidden">
      <div className="w-full max-w-lg bg-neutral-900 rounded-xl border border-neutral-800 shadow-lg p-8">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-white mb-5 text-center">
          ✍️ Create Blog
        </h2>

        <div className="space-y-4">
          {/* Title */}
          <Input label="Title" placeholder="Enter blog title" />

          {/* Description */}
          <div className="flex flex-col space-y-1 w-full">
            <label className="text-sm font-medium text-neutral-300">
              Description
            </label>
            <textarea
              placeholder="Write a short description..."
              rows={3}
              className="w-full px-3 py-2 rounded-lg bg-neutral-800 text-white 
                         placeholder-neutral-500 focus:outline-none 
                         focus:ring-2 focus:ring-cyan-500 border border-neutral-700 resize-none"
            />
          </div>

          {/* Date */}
          <Input label="Date" type="date" />

          {/* Upload Image */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-neutral-300">
              Upload Image
            </label>
            <input
              type="file"
              className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-3 py-2 text-sm text-white
                         file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 
                         file:text-sm file:font-semibold file:bg-cyan-600 file:text-white 
                         hover:file:bg-cyan-500"
            />
          </div>

          {/* Button */}
          <button className="w-full py-2.5 rounded-lg text-white font-semibold 
                             bg-gradient-to-r from-cyan-500 to-cyan-600 
                             hover:from-cyan-400 hover:to-cyan-500 
                             transition duration-200">
            🚀 Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
