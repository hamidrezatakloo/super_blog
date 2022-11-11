const Home = () => {
  return (
    <section className="bg-gray-900 text-white flex-1">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1>
            Read and Write articles
            <span> Increase your knowledge </span>
          </h1>

          <p>
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
