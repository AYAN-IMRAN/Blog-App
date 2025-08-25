import Input from "../components/Input";

function CreateBlog() {
  return (
    <div className="h-[calc(100vh-80px)] bg-neutral-950 flex items-center justify-center mt-8 px-6 md:px-10">
      <div className="w-full max-w-2xl bg-neutral-900 rounded-2xl border border-neutral-800 shadow-xl p-6 md:p-8">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
          ✍️ Create a New Blog
        </h2>

        <div className="space-y-6">
          {/* Title */}
          <Input label="Title" placeholder="Enter blog title" />

          {/* Description */}
          <div className="flex flex-col space-y-1 w-full">
            <label className="text-sm font-medium text-neutral-300">Description</label>
            <textarea
              placeholder="Write a short description..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-neutral-700 resize-none"
            />
          </div>

          {/* Date */}
          <Input label="Date" type="date" />

          {/* Upload Image */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-neutral-300">Upload Image</label>
            <input
              type="file"
              className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-600 file:text-white hover:file:bg-cyan-500"
            />
          </div>

          {/* Button */}
          <button className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition duration-200">
            🚀 Publish Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog