const Blog = () => {
  return (
    <section className="p-2 sm:p-8">
      <div>
        <h1 className="font-bold text-2xl my-4">Hot Article</h1>
        <div>
          <img src="./webpack.png" alt="hotArticle" />
          <h2>Why we need webpack in frontend development</h2>
          <p>
            Webpack is a tool that lets you compile JavaScript modules. It is
            also known as a module bundler. Given a large number of files, it
            generates a single file (or a few files) that run your app.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
