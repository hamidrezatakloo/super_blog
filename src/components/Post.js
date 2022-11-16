const Post = ({ src, title, desc, col }) => {
  return (
    <div
      className={`${
        col
          ? "md:flex-col col-span-12 md:col-span-4 px-2 py-6 first:pt-0 md:first:pt-2 md:py-2 border-b-2 border-gray-200 last:border-0 md:border-0"
          : "first:pt-0 py-8  border-b-2 border-gray-200 last:border-0"
      }  flex gap-2`}
    ></div>
  );
};

export default Post;
