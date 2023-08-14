import { useContext,createContext, useState, useEffect } from "react";
import { GoogleAuthProvider,signInWithRedirect,
signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [user,setUser] = useState({});

    // googleSignIn
    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider)
    };

    // logout

    const logOut = () =>{
        signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
            console.log('User',currentUser);
        });
        return () =>{
            unsubscribe();
        };

    },[]);

    return(
        <AuthContext.Provider value = {{googleSignIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    );
}
 
export const UserAuth =() =>{
    return useContext(AuthContext);
};