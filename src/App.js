import React from 'react';
import './App.css';
import {Photoo} from "./Compenent/Profile/ProfilPhoto";
import {Nameee} from "./Compenent/Profile/FullName";
import {Adresss} from "./Compenent/Profile/Address";
import {NavigationBar} from "./Compenent/Profile/NavBar";



function App() {

  return (
    <div className="App">
    <Photoo />
    <Nameee/>
   <Adresss/>
   <NavigationBar />


    </div>
  );
}

export default App;
