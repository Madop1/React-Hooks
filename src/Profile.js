import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let {username} = useParams();
  return (
    <div>
      THIS IS PROFILE PAGE FOR {username}...!
      <button onClick={() => navigate("/")}>Click to go Home page</button>
    </div>
  );
}

export default Profile;
