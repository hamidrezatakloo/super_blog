import Post from "../components/Post";
import Pagination from "../components/pagination";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { SetPageNumbers } from "../slices/PaginationSlice";
import { useDispatch, useSelector } from "react-redux";
const Blog = () => {
  const [data, setData] = useState([]);
  const [mainData, setMainData] = useState([]);
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.pagination.activePage);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/posts/list?page_size=4")
      .then((response) => {
        setMainData(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/posts/list?p=${activePage}`)
      .then((response) => {
        const pageNumbers = Math.ceil(response.data.count / 6);
        dispatch(SetPageNumbers(pageNumbers));
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => console.log(error));
  }, [activePage]);

  return (
    <section className="p-2 sm:p-8">
      <div className="border-y-2 border-black max-w-screen-xl 2xl:max-w-screen-2xl mx-auto pb-[50px]">
        <h1 className="font-bold text-2xl my-4">Hot Article</h1>
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-6 flex justify-center flex-col xl:mr-16">
            <img
              src={mainData[0] && mainData[0].image}
              alt="hotArticle"
              className="rounded object-contain"
            />
            <h2 className="font-medium text-2xl my-4">
              {mainData[0] && mainData[0].title}
            </h2>
            <p className="text-gray-500 font-medium">
              {mainData[0] && mainData[0].description}
            </p>
          </div>
          <div className="col-span-6 hidden xl:block">
            {mainData.slice(1, 4).map((post, index) => (
              <Post
                src={post.image}
                key={index}
                title={post.title}
                desc={post.description}
                author={post.author}
                create_date={post.create_date}
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
              src={post.image}
              key={index}
              title={post.title}
              desc={post.description}
              author={post.author}
              create_date={post.create_date}
            />
          ))}
        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default Blog;
