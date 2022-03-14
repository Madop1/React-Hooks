import React from "react";
import { useNavigate } from "react-router";

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <>
        <div>ERROR ! PAGE NOT FOUND ...</div>
      <button onClick={() => navigate("/")}>Redirect</button> to Home page
    </>
  );
}

export default ErrorPage;
