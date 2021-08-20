import React from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {Redirect} from "react-router-dom";
import {userContext} from "../App";
import {useContext, useState, useEffect} from "react";
import DisplayRoom from "../Components/DisplayRoom";


export default function Home(){

    const [isSignedIn, setIsSignedIn] = useState(false);
    const {appUser} = useContext(userContext);
    const [newUser , setNewUser] = useState(true);

    let uiConfig = {
        signInFlow: "popup",
        signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
        signInSuccess: () => false
        }
    }
  

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user );
            if(appUser.filter((u)=>u.id !== firebase.auth().currentUser.uid)){
                setNewUser(false);
            }
            console.log("user", user);
        })

    },[appUser]);


    if(!newUser){
        <DisplayRoom roomNo={appUser.roomNo} hostelno={appUser.hostelno}/>
    }

    return (
        <div className="App">
                <h2>Hostel Allocation</h2>
                <p>Please sign-in :</p>
            
            {isSignedIn ? (
                <Redirect to="/user/choose" />
            
            ) : (
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
            )}
        </div>)
        
}