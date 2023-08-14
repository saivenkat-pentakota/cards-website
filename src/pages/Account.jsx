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
        <div>
            <h1 className="d-flex flex-row justify-content-center" style={{paddingTop:"12px",textAlign:"center"}}>
                Account</h1>
                <div>
                    <p className="user-name" style={{color:"orange",fontSize:"20px"}}>{"Welcome " + user?.displayName}</p>
                    {/* <p className="user-email" style={{color:'orange', fontSize:"18px"}}>{user?.email}</p> */}
                </div>
                <button className="logout-button btn bg-danger" style={{color:"white",width:"130px",fontSize:"18px"}} onClick={handleSignOut}>Logout </button>
        </div>
    );
}

export default Account;