import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function List({ pending }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8002/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [pending]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "2rem",
        maxWidth: "48%",
      }}
    >
      {blogs.map((blog) => {
        return (
          <Link
            key={blog.id}
            to={`/${blog.id}`}
            style={{
              display: "flex",
              alignItems: "flex-start",
              borderBottom: `1px solid white`,
              color: "red",
              textDecoration: "none",
            }}
          >
            <div
              className="imgBox"
              style={{
                display: "flex",
                alignItems: "center",
                width: "400px",
                height: "150px",
                backgroundImage: `url("${blog.img}")`,
                backgroundSize: "cover",
                marginBottom: "2rem",
                overflow: "hidden",
                marginRight: "1rem",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "2rem",
                justifyContent: "center",
              }}
            >
              <h2>{blog.name}</h2>
              <p>{blog.numberr}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default List;