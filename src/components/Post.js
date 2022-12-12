const Post = ({ src, title, desc, author, create_date, col }) => {
  return (
    <div
      className={`${
        col
          ? "flex flex-col col-span-12 md:col-span-4 px-2 py-6 first:pt-0 md:first:pt-2 md:py-2 border-b-2 border-gray-200 last:border-0 md:border-0 my-4"
          : "first:pt-0 py-8  border-b-2 border-gray-200 last:border-0"
      }  `}
    >
      <div className={`${col ? "md:flex-col" : ""} flex-1 flex gap-2`}>
        <img
          src={src}
          className={`${
            col
              ? "object-cover w-[150px] sm:w-[250px] md:w-auto md:h-[200px] xl:h-[250px]"
              : "w-[300px] object-contain"
          }  rounded hover:opacity-80 transition-all`}
        />
        <div className="flex flex-1 flex-col justify-start sm:justify-between pl-2 pt-2">
          <h3 className="font-bold text-sm sm:text-xl mb-2">{title}</h3>
          <p className="hidden sm:line-clamp-3 text-gray-500 font-medium">
            {desc}
          </p>
        </div>
      </div>
      <div className="text-green-700 flex gap-x-2 pl-2 my-2 text-sm mt-8">
        <p>{create_date}</p>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default Post;
