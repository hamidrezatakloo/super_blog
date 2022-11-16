import data from "../data.json";
import Post from "../components/Post";
import Pagination from "../components/pagination";
const Blog = () => {
  return (
    <section className="p-2 sm:p-8">
      <div className="border-y-2 border-black max-w-screen-xl 2xl:max-w-screen-2xl mx-auto pb-[50px]">
        <h1 className="font-bold text-2xl my-4">Hot Article</h1>
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-6 flex justify-center flex-col xl:mr-16">
            <img
              src="./webpack.png"
              alt="hotArticle"
              className="rounded object-contain"
            />
            <h2 className="font-medium text-2xl my-4">
              Why we need webpack in frontend development
            </h2>
            <p className="text-gray-500 font-medium">
              Webpack is a tool that lets you compile JavaScript modules. It is
              also known as a module bundler. Given a large number of files, it
              generates a single file (or a few files) that run your app.
            </p>
          </div>
          <div className="col-span-6 hidden xl:block">
            {data.slice(0, 3).map((post, index) => (
              <Post
                src={post.src}
                key={index}
                title={post.title}
                desc={post.desc}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl  2xl:max-w-screen-2xl mx-auto my-4">
        <h1 className="font-bold text-2xl my-4">Last Articles</h1>
        <div className="grid grid-cols-12">
          {data.map((post, index) => (
            <Post
              col
              src={post.src}
              key={index}
              title={post.title}
              desc={post.desc}
            />
          ))}
        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default Blog;
