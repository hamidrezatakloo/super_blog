const EditProfile = () => {
  return (
    <form className="col-span-10 flex flex-col gap-16 p-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img src="/profile.png" accept="image/*" className="w-[200px]" />
        <label
          htmlFor="avatar"
          className="w-[200px] h-full border-2 border-gray-200 flex items-center justify-center text-gray-700 text-sm font-medium hover:bg-gray-100 cursor-pointer"
        >
          Change Profile image
        </label>
        <input id="avatar" name="avatar" type="file" className="hidden" />
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
            type="text"
            id="first_name"
            name="first_name"
            className="h-8 mt-1 w-full rounded border-2 border-gray-200 shadow-sm sm:text-sm outline-none focus:border-cyan-500"
          />
        </div>

        <div className="w-8/12 md:w-4/12">
          <label
            for="last_name"
            class="block text-xs font-medium text-gray-700"
          >
            LastName
          </label>

          <input
            type="text"
            id="last_name"
            name="last_name"
            className="h-8 mt-1 w-full rounded border-2 border-gray-200 shadow-sm sm:text-sm outline-none focus:border-cyan-500"
          />
        </div>
        <div className="w-8/12 md:w-4/12">
          <label for="about" class="block text-xs font-medium text-gray-700">
            About
          </label>

          <input
            type="text"
            id="about"
            name="about"
            className="h-8 mt-1 w-full rounded border-2 border-gray-200 shadow-sm sm:text-sm outline-none focus:border-cyan-500"
          />
        </div>
        <div className="w-8/12 md:w-4/12">
          <label
            for="phone_number"
            class="block text-xs font-medium text-gray-700"
          >
            PhoneNumber
          </label>

          <input
            type="text"
            id="phone_number"
            name="phone_number"
            className="h-8 mt-1 w-full rounded border-2 border-gray-200 shadow-sm sm:text-sm outline-none focus:border-cyan-500"
          />
        </div>

        <div className="w-8/12 md:w-4/12">
          <label
            for="date_of_birth"
            class="block text-xs font-medium text-gray-700"
          >
            dataOfBirth
          </label>

          <input
            type="date"
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
