import React from "react";
import {Link} from "react-router-dom";
import Book from "./Components/Book";
import {useState} from "react";
function Card(props) {
  const [present,setPresent]=useState(10);
  const [present1,setPresent1]=useState(0);
  function f1(){
    if(present==0){
      present=0;
    }
    else{
    present=setPresent(present-1);
    present1=setPresent1(present1+1)
    }
  }
  function f2(){
    // if(present1==10){
    //   present1=10;
    // }
    // else{
    // present1=setPresent1(present1+1);
    // }
  }
  return (

    <div className="card" style={{ width: "18rem" }}>
      <a target="_blank" href="c1.jpg">
        <img src={props.imgURL} alt="parking" className="card-img-top" />
      </a>
      <div className="card-body">

        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          <img src={props.Cleaning} alt="parking" style={{ width: "20px", height: "20px" }} className="class5" /> {props.CleaningFacility}<br />
          <img src={props.childCareCenters} alt="parking" style={{ width: "20px", height: "20px" }} className="class5" />{props.child} <br />
          <img src={props.plots} alt="parking" style={{ width: "20px", height: "20px" }} className="class5" />Number of plots: {present} {10-present} <br />
          </p>
        <pre>
        <Link to='/Book' className="nav-link active" aria-current="page">Book a plot</Link>  <button className="btn btn-primary" onClick={f1}>Check-in</button> 
        </pre>
      </div>
    </div>
  )
}
export default Card;