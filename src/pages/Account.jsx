import React from "react";
import {UserAuth} from "../context/AuthContext";

const Account = () =>{
    const {logOut,user} = UserAuth();
    const handleSignOut = async() =>{
        try{
            await logOut();
        } catch (error){
            console.log(error);
        }
    }

    return(
        <div className="d-flex flex-column justify-content-center" style={{textAlign:"center"}}>
            <h1>
                Account</h1>
                
                    <p className="user-name" style={{color:"blue",fontSize:"20px"}}>{"Welcome " + user?.displayName}</p>
                    {/* <p className="user-email" style={{color:'orange', fontSize:"18px"}}>{user?.email}</p> */}
                {/* <button className="logout-button btn bg-danger" style={{color:"white",width:"130px",fontSize:"18px"}} onClick={handleSignOut}>Logout </button> */}
        </div>
    );
}

export default Account;