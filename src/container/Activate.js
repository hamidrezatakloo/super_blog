import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//Post {uid} and {token} to active account
const Activate = () => {
  const [message, setMessage] = useState("");
  const [status, SetStatus] = useState(false);
  let params = useParams();
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/auth/users/activation/", params)
      .then((response) => {
        SetStatus(true);
        setMessage("your account activated successfully");
      })
      .catch((err) => {
        SetStatus(false);
        setMessage("expired token");
      });
  }, []);
  return (
    <div className="w-10/12 mx-auto flex-1 flex items-center justify-center">
      <p
        className={` ${
          status
            ? "border-green-400 text-green-400"
            : "border-red-400 text-red-400"
        }  shadow border-t-8  h-[200px] w-full text-center text-4xl capitalize flex justify-center items-center`}
      >
        {message}
      </p>
    </div>
  );
};

export default Activate;
