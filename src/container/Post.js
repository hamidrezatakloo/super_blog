import { useLocation } from "react-router-dom";

const Post = () => {
  let location = useLocation();
  const { title, src, desc } = location.state;
  return (
    <div className="p-4 flex-1 flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl my-6">{title}</h1>
      <img alt="post" src={src} className="rounded my-8" />
      <p className="md:text-lg lg:text-xl xl:w-10/12">{desc}</p>
    </div>
  );
};

export default Post;
