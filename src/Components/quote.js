import React,{useState,useEffect} from "react";
import {fetchRandomQuote} from "./QuoteClient";
import "./style.css"
export default function Quote(){
    const [quote,setQuote]=useState("");
    useEffect(()=>{
        fetchRandomQuote(setQuote)
    },[])

    const handleRefreshClick=()=>{
        fetchRandomQuote(setQuote)
    }

    return <section id="quote-Wrapper">
        <section id="quote-display-wrapper">
            <h1>{quote}</h1>
        </section>
        <div id="quote-refresh" onClick={handleRefreshClick}>Refresh</div>
    </section>
}
/*section is a semantic element unlike div*/