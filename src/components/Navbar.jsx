import React from "react";
import {Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="d-flex flex-row justify-content-between p-4" style = {{backgroundColor:"lightgrey" ,textAlign:"center"}}>
            <h1 className="app-logo">
                Fluid-Solutions
            </h1>
            
            <Link to = "/signin">Sign in</Link>
        </div>
    );

}

export default Navbar;