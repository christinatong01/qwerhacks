import './App.css';
import { HashRouter } from 'react-router-dom';
import Main from "./components/main";
import React from "react";
//import firebase from "./firebase";

function App() {
  //const firebaseApp = firebase.apps[0];
  return (
    <div className="App">
      <HashRouter>
        <Main />
      </HashRouter>
    </div>
  );
}

export default App;
