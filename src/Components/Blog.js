

import { useState, useEffect } from "react";
import Header from "../Header";
import Navbar from "./Navbar";
function Blog({ pending }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8002/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [pending]);
  return (
    <div>
    <Header/>
    <Navbar/>
      {blogs.map((blog) => {
        return (
              <>
              <h2>{blog.name}</h2>
              <p>{blog.numberr}</p>
              </>        
        );
      })}
    </div>
  );
}

export default Blog;