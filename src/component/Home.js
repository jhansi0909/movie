import React, { useState,useEffect } from "react";
import "./Home.css";
// import icon from "./icon.jpg";
import icon from "./icon.jpg";
import SearchIcon from '@mui/icons-material/Search';
import creed from './creed.jpg';
import beast from './beast.jpg';
import idiots from './idiots.jpg';
import rrr from './rrr.jpg';
import wilddog from './wilddog.jpg';
import bhahubali from './bhahubali.jpg';
import sarkar from './sarkar.jpg';
import dracula from './dracula.jpg';
import transformers from './transformers.jpg';
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
function Home(){
    const navigate=useNavigate()
    const x=[
        {
            id:"a",
            image:creed,
            name:"Assasin's Creed",
            message:"Play now"
        },
        {
            id:"a",
            image:beast,
            name:"BEAST",
            message:"Play now"
        },
        {
            id:"b",
            image:idiots,
            name:"3IDIOTS",
            message:"Play now"
        },
        {
            id:"c",
            image:rrr,
            name:"RRR",
            message:"Play now"
        },
        {
            id:"d",
            image:wilddog,
            name:"Wild DOg",
            message:"Play now"
        },
        {
            id:"e",
            image:bhahubali,
            name:"Bahubali",
            message:"Play now"
        },
        {
            id:"f",
            image:sarkar,
            name:"Sarkar",
            message:"Play now"
        },
        {

            id:"g",
            image:dracula,
            name:"Dracula",
            message:"Play now"
        },
        {
            id:"h",
            image:transformers,
            name:"Transformers",
            message:"Play now"
        },
    ]
    function playnow(){
        navigate("/Specific")
    }
    return(
        <div>
            <div className="navbar">
            <img className="icon" src={icon}></img>
           <div className="rightsidenames">
            <div className="home">Home</div>
            <div className="language">Language</div>
            <div className="language">Genre</div>
            <div className="language">Account</div>
            <div> <SearchIcon></SearchIcon> </div>
           </div>
            </div>
            <hr size="2" width="auto" color=" green" /> 
            <hr size="2" width="auto" color="rgb(37 211 102)" /> 
            <div className="mainone">
          {
            x.map((data)=>{
              return(
             <div>
                <div><img className="images" src={data.image}></img>
                </div>
                <div className="name">{data.name}</div>
                <div onClick={playnow} className="message">{data.message} </div>
             </div>
              )
            })
          }
           </div>
           <div className="button">
            <Button  style={{backgroundColor:"rgb(25, 168, 161)"}} variant="contained">See more</Button>
           </div>
        </div>
    )
}
export default Home;