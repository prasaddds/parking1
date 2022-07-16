

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Navbar from "./Navbar";
const Book = ({ pending, setPending }) => {
  const [name, setName] = useState("");
  const [numberr, setNumber] = useState("");
  const navigate = useNavigate();//for previous/history

  const submitHandler = (e) => {
    e.preventDefault();
    const newBlog = {
    name,
    numberr
    };
    fetch("http://localhost:8002/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      setPending(!pending);
      navigate("/");
    });
  };

  return (
    <div>
      <Header/>
      <Navbar/>
      <form
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "column"}}
      >
        <label>Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Number</label>
        <input
          type="text"
          required
          value={numberr}
          onChange={(e) => setNumber(e.target.value)}
        />


        <input
          type="submit"
          style={{
            cursor: "pointer",
            backgroundColor: "red",
            color: "white",
          }}
        />
      </form>
    </div>
  );
};

export default Book;

