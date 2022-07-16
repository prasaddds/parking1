import React from "react";
import Card from "../Card";
import contacts from "../Contact1";
import Header from "../Header";
import Navbar from "./Navbar";
function createCard(contact)
{
    return <Card key={contact.id} name={contact.name}  imgURL={contact.imgURL}
    pool={contact.pool}
    CleaningFacility={contact.CleaningFacility}
    Cleaning={contact.Cleaning}
    childCareCenters={contact.childCareCenters}
    child={contact.child}
    plots={contact.plots}
    Numberr={contact.Numberr}
    />
}
function Agartala() {
 return (
 <div>
 <Header/>
 <Navbar/>
 {contacts.map(createCard)}
 </div>
 );
}
export default Agartala;