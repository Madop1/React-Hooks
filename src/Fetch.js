//learning async await and fetch
import React, { useState, useEffect } from "react";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // if (!response.ok) {
        //   throw Error("can't fetch the data");
        // }
        return response.json();
      })
      .then((receivedData) => setData(receivedData))
      .catch((err) => {
        console.log(err.message);
      });
  }
  console.log("data",data)
  return (
    <div
      style={{ textAlign: "center", color: "red", fontStyle: "italic" }}
    >
      <h3> Fetching User from json</h3>
      {data.map((e) => (
        <li key={e.id}>
          {e.name} , {e.username}
        </li>
      ))}
    </div>
  );
}

export default Fetch;
