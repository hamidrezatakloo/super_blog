const Home = () => {
  return (
    <section className="bg-gray-900 text-white flex-1">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl sm:py-2">
            Read and Write articles
            <span className="sm:block"> Increase your knowledge </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl">
            Discover stories, thinking, and expertise from writers on any topic
            start reading or write an article now
          </p>

          <div>
            <a href="/get-started">Get Started</a>

            <a href="/about">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
