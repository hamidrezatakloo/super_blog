import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//Post {uid} and {token} to active account
const Activate = () => {
  const [message, setMessage] = useState("");
  let params = useParams();
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/auth/users/activation/", params)
      .then((response) =>
        console.log(setMessage("your account activated successfully"))
      )
      .catch((err) => setMessage("invalid token"));
  }, []);
  return <div>{message}</div>;
};

export default Activate;
