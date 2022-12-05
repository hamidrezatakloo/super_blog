const NewPost = () => {
  return (
    <section className="col-span-10 p-10">
      <form>
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your post image
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          placeholder="upload your image here..."
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
          border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />

        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Write your title here..."
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
          border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />

        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
          border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your description here..."
        ></textarea>
      </form>
    </section>
  );
};

export default NewPost;
