import React from "react";
import axios from "axios";
const Random_Quote_URL="https://api.quotable.io/random";

function fetchRandomQuote(setQuote)
{
    axios.get(Random_Quote_URL)
    .then((value)=>{
        console.log(value)
        setQuote(value.data.content)

    }).catch((error)=>{
        console.log(error)
    })
}
export {fetchRandomQuote}
