import React from "react";
import Card from "./Card";
import contacts from "./Contact";
function createCard(contact)
{
    return <Card key={contact.id} name={contact.name}  imgURL={contact.imgURL}
    pool={contact.pool}
    lpool={contact.lpool}
    wifi={contact.wifi}
    lwifi={contact.lwifi}
    breakfast={contact.breakfast}
    lbreakfast={contact.lbreakfast}
    theme={contact.theme}
    ltheme={contact.ltheme}
    location={contact.location}
    llocation={contact.llocation}
    type={contact.type}
    ltype={contact.ltype}
    available={contact.available}
    lavailable={contact.lavailable}
    booked={contact.booked}
   lbooked={contact.lbooked}/>
}
function App() {
 return (
 <div>
{/* <Card
 name={contacts[0].name}
 imgURL={contacts[0].imgURL}
 pool={contacts[0].pool}
 lpool={contacts[0].lpool}
 wifi={contacts[0].wifi}
 lwifi={contacts[0].lwifi}
 breakfast={contacts[0].breakfast}
 lbreakfast={contacts[0].lbreakfast}
 theme={contacts[0].theme}
 ltheme={contacts[0].ltheme}
 location={contacts[0].location}
 llocation={contacts[0].llocation}
 type={contacts[0].type}
 ltype={contacts[0].ltype}
 available={contacts[0].available}
 lavailable={contacts[0].lavailable}
 booked={contacts[0].booked}
lbooked={contacts[0].lbooked}
 />
 <Card
 name={contacts[1].name}
 imgURL={contacts[0].imgURL}
 pool={contacts[1].pool}
 lpool={contacts[1].lpool}
 wifi={contacts[1].wifi}
 lwifi={contacts[1].lwifi}
 breakfast={contacts[1].breakfast}
 lbreakfast={contacts[1].lbreakfast}
 theme={contacts[1].theme}
 ltheme={contacts[1].ltheme}
 location={contacts[1].location}
 llocation={contacts[1].llocation}
 type={contacts[1].type}
 ltype={contacts[1].ltype}
 available={contacts[1].available}
 lavailable={contacts[1].lavailable}
 booked={contacts[1].booked}
lbooked={contacts[1].lbooked}
 />
 <Card
 name={contacts[2].name}
 imgURL={contacts[0].imgURL}
 pool={contacts[2].pool}
 lpool={contacts[2].lpool}
 wifi={contacts[2].wifi}
 lwifi={contacts[2].lwifi}
 breakfast={contacts[2].breakfast}
 lbreakfast={contacts[2].lbreakfast}
 theme={contacts[2].theme}
 ltheme={contacts[2].ltheme}
 location={contacts[2].location}
 llocation={contacts[2].llocation}
 type={contacts[2].type}
 ltype={contacts[2].ltype}
 available={contacts[2].available}
 lavailable={contacts[2].lavailable}
 booked={contacts[2].booked}
lbooked={contacts[2].lbooked}
 /> */}
 {contacts.map(createCard)}
 </div>
 );
}
export default App;