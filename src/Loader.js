import React from "react";
import "./App.css"

function Loader() {
 
  return (
    <div className="loader">
      <p>Please wait untill your data loading....</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        // src={logo}
        alt="this slowpoke moves"       
      />
    </div>
  );
}

export default Loader;
