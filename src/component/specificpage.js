import React from "react";
import icon from "./icon.jpg";
import SearchIcon from '@mui/icons-material/Search';
import "./specificpage.css";
import sarkar from './sarkar.jpg';
import creed from './creed.jpg';
import idiots from './idiots.jpg';
import beast from './beast.jpg';
import rrr from './rrr.jpg';
import { Button } from "@mui/material";
function specific(){
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
    ]
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
            <div>
                <div className="page">
                <div className="continer"><img src={sarkar}></img></div>
                <div><h3>SARKAR</h3>
                <div>Action</div>
                <div>Duration : 1:50 hr</div>
                <div className="buttons">
                    <Button style={{backgroundColor:"rgb(25, 168, 161)"}} variant="contained">Watch Now</Button>
                    <Button style={{color:"rgb(25, 168, 161)",borderColor:"rgb(25, 168, 161)"}} variant="outlined">Watch Later</Button>
                </div>
                 </div>
                </div>
                <div className="page">
                Sarkar Review: In a scene after Sarkar’s protagonist Sundar Ramasamy announces his candidature, he addresses the residents of a colony.
                 The first question thrown at the wealthy corporate honcho is whether he knows the price of tomatoes today.
                  While he admits his ignorance, he uses it to narrate economics, explain how it affects the financial status of
                   the people and finally sways the people to his side...<br/>
                   For the large part of the movie, director AR Muragadoss tries to establish that politics is not much different from business,
                    and Sundar, played effectively by Vijay, keeps pointing out how marketing, branding and strategising would help not only win 
                    the support of the people but also change the corrupt system...
                </div>
                <div className="pages">
                    <h3 className="color">Similar movies</h3>
                    <div className="movies">
                  {
                    x.map((data)=>{
                        return(
                            <div>
                            <img className="image" src={data.image}></img>
                            <div className="name">{data.name} </div>
                            <div className="message">{data.message} </div>
                        </div>
                        )
                    })
                  }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default specific;