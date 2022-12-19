import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
const NewPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [postImage, setPostImage] = useState("");
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    const url = URL.createObjectURL(data.image[0]);
    setPostImage(url);

    const form_data = new FormData();
    form_data.append("image", data.image[0]);
    form_data.append("title", data.title);
    form_data.append("description", data.desc);

    axios
      .post("posts/new", form_data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "JWT " + localStorage.getItem("token"),
        },
      })
      .then((response) => toast.success("post published successfully"))
      .catch((error) => toast.error("An error occurred"));
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const selectedImage = value.image[0];
      if (selectedImage) {
        const url = URL.createObjectURL(selectedImage);
        setPostImage(url);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <section className="flex-1 p-5 md:p-10">
      <div className="my-8 p-6 shadow">
        <img src={postImage} className="rounded" />
        <h1 className="font-bold text-2xl my-6">{watch("title")}</h1>
        <p className="my-4">{watch("desc")}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your post image
        </label>
        <input
          {...register("image", {
            required: "An image is required for create New post",
          })}
          name="image"
          id="image"
          type="file"
          accept="image/*"
          placeholder="upload your image here..."
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
          border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.image && (
          <p className="py-2 text-red-500">{errors.image.message}</p>
        )}

        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your title
        </label>
        <input
          {...register("title", {
            required: "Title is required",
            maxLength: {
              value: 150,
              message: "too long title",
            },
          })}
          name="title"
          id="title"
          type="text"
          placeholder="Write your title here..."
          className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
          border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.title && (
          <p className="py-2 text-red-500">{errors.title.message}</p>
        )}

        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          {...register("desc", {
            required: "Title is required",
            minLength: {
              value: 20,
              message: "description should be at least 20 character",
            },
          })}
          name="desc"
          id="message"
          rows="4"
          className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
          border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your description here..."
        ></textarea>
        {errors.desc && (
          <p className="py-2 text-red-500">{errors.desc.message}</p>
        )}

        <button
          type="submit"
          className="inline-block rounded border border-green-600 bg-green-600 
          px-12 py-3 my-4 text-sm font-medium text-white hover:bg-transparent 
          hover:text-green-600 focus:outline-none focus:ring active:text-green-500 self-start"
        >
          Create new Post
        </button>
      </form>
    </section>
  );
};

export default NewPost;
