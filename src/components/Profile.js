import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.authentication.user);
  console.log(user);

  return (
    <div className="col-span-10 p-10">
      <div className="flex">
        <img
          src={user.avatar ? user.avatar : "/profile.png"}
          alt="profile"
          className="w-[350px] rounded"
        />
        <div className="flex flex-col p-6 gap-4">
          <span className="text-4xl font-medium text-slate-800">
            Gabriela Richardson
          </span>
          <span className="text-slate-500 text-lg">
            Email:&nbsp;
            <span className="text-slate-800 text-md">Richardson@gmail.com</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-4 flex-wrap  my-8">
        <span className="text-slate-500 text-lg w-6/12">
          firstName:&nbsp;
          <span className="text-slate-800 text-md">{user.first_name}</span>
        </span>
        <span className="text-slate-500 text-lg w-6/12">
          LastName:&nbsp;
          <span className="text-slate-800 text-md">{user.last_name}</span>
        </span>
        <span className="text-slate-500 text-lg w-6/12">
          PhoneNumber:&nbsp;
          <span className="text-slate-800 text-md">{user.Phone_number}</span>
        </span>
        <span className="text-slate-500 text-lg w-6/12">
          DateOfBirth:&nbsp;
          <span className="text-slate-800 text-md">
            {user.date_of_birth ? user.date_of_birth : ""}
          </span>
        </span>
        <span className="text-slate-500 text-lg">
          About:&nbsp;
          <span className="text-slate-800 text-md">{user.about}</span>
        </span>
      </div>
      <Link
        to={"../edit"}
        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm 
      font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      >
        Edit Profile
      </Link>
    </div>
  );
};

export default Profile;
