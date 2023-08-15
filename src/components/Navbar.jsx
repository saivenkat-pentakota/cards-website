import React from "react";
import {Link} from "react-router-dom";
import {UserAuth} from '../context/AuthContext';

const Navbar = () =>{
    const {user,logOut} = UserAuth();

    const handleSignOut = async() =>{
        try{
            await logOut()
        } catch(error){
            console.log(error)
        }
    }
    return(
        <div className="d-flex flex-row justify-content-between p-4" style = {{textAlign:"center"}}>
            <h1 className="app-logo">
                Fluid-Solutions
            </h1>
            {user?.displayName ? (<button onClick={handleSignOut} className="btn btn-danger" style={{width:"100px",height:"40px"}}>Logout</button>):(
            <Link to = "/signin"><button className="btn btn-primary">Sign in</button></Link>)}
        </div>
    );

}

export default Navbar;