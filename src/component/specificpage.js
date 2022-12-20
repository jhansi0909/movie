import React, { useState,useEffect } from "react";
import icon from "./icon.jpg";
import SearchIcon from '@mui/icons-material/Search';
import "./specificpage.css";
import { useParams} from "react-router-dom";
import creed from './creed.jpg';
import idiots from './idiots.jpg';
import beast from './beast.jpg';
import rrr from './rrr.jpg';
import { Button } from "@mui/material";
import { collection, query, where, getDoc,getDocs,getDocFromCache, doc } from "firebase/firestore";
import db from "./firebase";
import { async } from "@firebase/util";

function Specific(){
    const [movie,setMovies]=useState([]);
    const [data,setData]=useState([])
    const router=useParams();
    const Name=router.Specificid; 
   console.log(router.Specificid)
   console.log(Name)
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

useEffect(()=>{
    const docRef=doc(db,"movie", Name)
    getDoc(docRef)
    .then((doc)=>{
        console.log(doc.data(),doc.id)
       const data=doc.data()
       setMovies(data)
    })  
    console.log(movie)
  
},[])

useEffect(()=>{
    ;(async()=>{
      const q=collection(db,"movie")
      const snapshot=await getDocs(q)
      const docs=snapshot.docs.map(doc=>{
      const data=doc.data()
      data.id=doc.id
      return data
      })
      setData(docs)
      console.log(docs)
    })();
  },[]);

    return(
        // <div>helloo</div>
        <div>
            <div className="navbar1">
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
            {/* <hr size="2" width="auto" color="rgb(37 211 102)" />  */}
            </div>
            <br/>


            <div className="main">
                {
                            <div>
                            <div className="page">
                <div className="continer"><img className="images" src={movie.image}></img></div>
                <div>
                    <h3>{movie.name}</h3>
                <div>Action</div>
                <div>Duration : 1:50 hr</div>
                <div className="buttons">
                    <Button style={{backgroundColor:"rgb(25, 168, 161)"}} variant="contained">Watch Now</Button>
                    <Button style={{color:"rgb(25, 168, 161)",borderColor:"rgb(25, 168, 161)"}} variant="outlined">Watch Later</Button>
                </div>
                 </div>
                </div>
                <div className="page">
               {movie.description}
                </div>
                </div>
                }
               <div className="pages">Similar movies</div>
               <div className="movies">
                {
                    data.map((x)=>{

                       return(
                        <div >
                        <div><img className="image" src={x.image}></img> </div>
                        <div className="name">{x.name} </div>
                        <div className="playnow">Playnow</div>
                        </div>
                       )
                    })
                }
               </div>
            </div>
        </div>
    )
}
export default Specific;