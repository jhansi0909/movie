import React from "react";
import TextField  from '@mui/material/TextField';   
import "./Login.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
function Login(){
    const navigate = useNavigate();
    function loginbutton(){
        console.log("heloo")
        navigate("./Home")
    }
    return(
    <div className="main">
    <div className="container">
    <div className="heading">
    <h3>Sign in to your account</h3></div>
    <form className="textfield">
    <div>
   <div><TextField style={{"width":"100%","height":50}} type="text" label="Email/Phone number" variant="outlined"></TextField></div> <br/>
   <div><TextField type="password" label="Password" variant="outlined"></TextField></div> <br/>
   <div className="loginbutton" >
   <Button style={{"backgroundColor":" rgb(25, 168, 161) ","width":"120%"}} onClick={loginbutton} variant="contained">Login</Button>
   </div>
    </div>
    </form>
    </div>
    </div>
    )
}
export default Login;