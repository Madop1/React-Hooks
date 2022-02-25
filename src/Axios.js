//Learning Axios
import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

function Axios() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${url}/1`);
        setPost(response.data);
      } catch (err) {
        if (err) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error ,${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  async function createPost() {
    try {
      const response = await axios.post(`${url}/1`);
      setPost(response.data);
    } catch (err) {
      console.log(`Error ,${err.message}`);
    }
  }

  async function updatePost() {
    try {
      const response = await axios.put(`${url}/2`, {
        title: "Hello World!",
        body: "This is an updated post.",
      });
      // console.log("Updated")
      setPost(response.data);
    } catch (err) {
      console.log(`Error ,${err.message}`);
    }
  }
  async function deletePost() {
    try {
      await axios.delete(`${url}/1`);
      alert("Post deleted!");
      setPost(null);
    } catch (err) {
      console.log(`Error ,${err.message}`);
    }
  }
  if (!post) return "Your post have been deleted ,please refresh the screen to see new posts";
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>updatePost</button>
      <button onClick={deletePost}>deletePost</button>
    </div>
  );
}

export default Axios;
