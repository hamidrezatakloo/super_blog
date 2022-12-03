import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../slices/AuthenticationSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
const EditProfile = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [date, setDate] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    data["avatar"] = selectedFile;
    data["date_of_birth"] = date;

    //change data to formData object for sending image file to server
    let form_data = new FormData();
    if (selectedFile) form_data.append("avatar", selectedFile);
    if (date) form_data.append("date_of_birth", date);
    form_data.append("first_name", data.first_name);
    form_data.append("last_name", data.last_name);
    form_data.append("about", data.about);
    form_data.append("phone_number", data.phone_number);

    //update user with sending patch request
    const promise = axios
      .patch("http://127.0.0.1:8000/auth/users/me/", form_data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "JWT " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(SetUser(response.data));
        console.log(response);
      })
      .catch((error) => console.log(error));

    toast.promise(promise, {
      loading: "loading",
      success: "profile updated successfully",
      error: "failed to update profile",
    });
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleImage = (e) => {
    if (!e.target.files || e.target.files.length === 0)
      setSelectedFile(undefined);
    else setSelectedFile(e.target.files[0]);
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <form
      className="col-span-10 flex flex-col gap-16 p-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={selectedFile ? preview : user.avatar}
          accept="image/*"
          className="w-[200px]"
        />
        <label
          htmlFor="avatar"
          className="w-[200px] h-full border-2 border-gray-200 flex items-center justify-center text-gray-700 text-sm font-medium hover:bg-gray-100 cursor-pointer"
        >
          Change Profile image
        </label>
        <input
          {...register("avatar")}
          id="avatar"
          name="avatar"
          type="file"
          onChangeCapture={handleImage}
          className="hidden"
        />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center">
        <div className="w-8/12 md:w-4/12">
          <label
            for="first_name"
            class="block text-xs font-medium text-gray-700"
          >
            FirstName
          </label>

          <input
            {...register("first_name", {
              required: "This field should not be empty",
              maxLength: {
                value: 150,
                message: "too long!",
              },
            })}
            type="text"
            defaultValue={user.first_name}
            id="first_name"
            name="first_name"
            className="h-8 mt-1 w-full rounded border-2 border-gray-200 shadow-sm sm:text-sm outline-none focus:border-cyan-500"
          />
          {errors.first_name && (
            <p className="py-2 text-red-500">{errors.first_name.message}</p>
          )}
        </div>

        <div className="w-8/12 md:w-4/12">
          <label
            for="last_name"
            class="block text-xs font-medium text-gray-700"
          >
            LastName
          </label>

          <input
            {...register("last_name", {
              required: "This field should not be empty",
              maxLength: {
                value: 150,
                message: "too long!",
              },
            })}
            type="text"
            defaultValue={user.last_name}
            id="last_name"
            name="last_name"
            className="h-8 mt-1 w-full rounded border-2 border-gray-200 shadow-sm sm:text-sm outline-none focus:border-cyan-500"
          />
          {errors.last_name && (
            <p className="py-2 text-red-500">{errors.last_name.message}</p>
          )}
        </div>
        <div className="w-8/12 md:w-4/12">
          <label for="about" class="block text-xs font-medium text-gray-700">
            About
          </label>

          <input
            {...register("about", {
              maxLength: {
                value: 200,
                message: "too long!",
              },
            })}
            type="text"
            defaultValue={user.about}
            id="about"
            name="about"
            className="h-8 mt-1 w-full rounded border-2 border-gray-200 shadow-sm sm:text-sm outline-none focus:border-cyan-500"
          />
          {errors.about && (
            <p className="py-2 text-red-500">{errors.about.message}</p>
          )}
        </div>
        <div className="w-8/12 md:w-4/12">
          <label
            for="phone_number"
            class="block text-xs font-medium text-gray-700"
          >
            PhoneNumber
          </label>

          <input
            {...register("phone_number", {
              maxLength: {
                value: 16,
                message: "too long!",
              },
            })}
            type="tel"
            defaultValue={user.phone_number}
            id="phone_number"
            name="phone_number"
            className="h-8 mt-1 w-full rounded border-2 border-gray-200 shadow-sm sm:text-sm outline-none focus:border-cyan-500"
          />
          {errors.phone_number && (
            <p className="py-2 text-red-500">{errors.phone_number.message}</p>
          )}
        </div>

        <div className="w-8/12 md:w-4/12">
          <label
            for="date_of_birth"
            class="block text-xs font-medium text-gray-700"
          >
            dataOfBirth
          </label>

          <input
            onChange={handleDate}
            type="date"
            defaultValue={user.date_of_birth}
            id="date_of_birth"
            name="date_of_birth"
            className="h-8 mt-1 w-full rounded border-2 border-gray-200 shadow-sm sm:text-sm outline-none focus:border-cyan-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600
       focus:outline-none focus:ring active:text-indigo-500 self-start"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfile;
