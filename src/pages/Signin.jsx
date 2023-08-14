import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () =>{
    const {googleSignIn,user} = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () =>{
        try{
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() =>{
        if(user != null){
            navigate('/account');
        }
    },[user]);
    return(
        <div className="d-flex flex-column justify-content-center p-2 m-2">
            <h1>Sign In</h1>
            <div className="d-flex flex-row justify-content-center p-4 m-4" style={{margin: "auto",}}>
                <GoogleButton onClick={handleGoogleSignIn}/> </div>
        </div>
    );
}

export default Signin;