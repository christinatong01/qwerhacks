import React from "react";
import "../styles/layout.css";
import Login from "./login";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const Main = () => {
      return (
        <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      );
    };
    
export default Main;