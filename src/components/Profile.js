const Profile = () => {
  return (
    <div>
      <div className="flex">
        <img src="./profile.jpg" alt="profile" className="w-[350px] rounded" />
        <div className="flex flex-col">
          <span className="text-4xl font-medium text-slate-800">
            Gabriela Richardson
          </span>
          <span className="text-slate-400 text-lg">
            email:
            <span className="text-slate-800 text-md">Richardson@gmail.com</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
