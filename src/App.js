import Home from "./Pages/Home";
import ChooseHostel from "./Pages/ChooseHostel";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import ChooseHostelByType from "./Pages/ChooseHostelByType";
import ChooseFloor from "./Pages/ChooseFloor";
import React from "react";
import {useState} from "react";

let userContext = React.createContext([]);

export default function App () {
  let [appUser, setAppUser] = useState([]);
  console.log(appUser);

  return(
    <userContext.Provider value={{
          appUser: appUser,
          setAppUser : setAppUser
      }}>
        <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user/choose">
          <ChooseHostel />
        </Route>
        <Route exact path="/user/choose-hostel/:type">
          <ChooseHostelByType />
        </Route>
        <Route exact path="/user/choose/:hostelno">
          <ChooseFloor />
        </Route>
      </Switch>
      </BrowserRouter>
      
    </userContext.Provider>
  )
  
}
export {userContext};