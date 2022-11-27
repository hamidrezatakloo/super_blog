const Profile = () => {
  return (
    <div>
      <div className="flex">
        <img src="./profile.jpg" alt="profile" className="w-[350px] rounded" />
        <div className="flex flex-col">
          <span>Gabriela Richardson</span>
          <span>
            email:<span>Richardson@gmail.com</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
