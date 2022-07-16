import React from "react";
import Header from "../Header";
import "./HomeCss.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../style1.css";
import Quote from "./quote";
function Home()
{
    return (
        <div>
        <Header/>
        <Navbar/>
        <Quote/>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://static.businessworld.in/article/article_extra_large_image/1490175707_RblFrV_shutterstock_426709153-470.jpg" alt="parking" height={"750px"} width={"auto"}/>
          </div>
        </div>
      </div>
      
      <ul id="myUL">
                    <li><nav><Link to='/Agartala'>Slots for Booking</Link></nav></li>
      </ul>
      </div>
    )
}
export default Home;