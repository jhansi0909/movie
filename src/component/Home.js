import React, { useState,useEffect } from "react";
import "./Home.css";
import firebase from "./firebase";
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
import { useNavigate,useParams } from "react-router";
import db from "./firebase";
// import {db} from "./firebase.js"
// import { doc, getDoc, getFirestore,ref,dbRef } from "firebase/firestore";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { async } from "@firebase/util";
// import { ref, set } from "firebase/firestore";
 function Home(){
    const navigate=useNavigate(); 
 

    const [movie,setMovies]=useState([]);
   
  

    useEffect(()=>{
      ;(async()=>{
        const q=collection(db,"movie")
        const snapshot=await getDocs(q)
        const docs=snapshot.docs.map(doc=>{
        const data=doc.data()
        data.id=doc.id
        return data
        })
        setMovies(docs)
        console.log(docs)
      })();
    },[]);
    
    function playnow(obj){
        navigate("/Specific/"+obj.id)
        console.log("heloo")
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
            movie.map((data)=>{
              return(
             <div>
                <div><img className="images" src={data.image}></img>
                </div>
                <div className="name">{data.name}</div>
                <div>
                  <div className="playnow" onClick={()=>{
                  playnow(data)
                }} >Playnow</div>
                </div>
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