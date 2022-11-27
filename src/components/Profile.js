const Profile = () => {
  return (
    <div className="col-span-10">
      <div className="flex">
        <img src="./profile.jpg" alt="profile" className="w-[350px] rounded" />
        <div className="flex flex-col p-6 gap-4">
          <span className="text-4xl font-medium text-slate-800">
            Gabriela Richardson
          </span>
          <span className="text-slate-400 text-lg">
            Email&nbsp;:
            <span className="text-slate-800 text-md">Richardson@gmail.com</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
