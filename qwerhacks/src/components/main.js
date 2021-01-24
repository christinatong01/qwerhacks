import React from "react";
import "../styles/layout.css";
import SignUp from "./signup";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./login";
import Me from "./me";
import Reflect from "./reflect";
import Rating from "./rating";
import Self from "./self-care";

const Main = () => {
    return (
        <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/me" component={Me}></Route>
          <Route exact path="/reflect" component={Reflect}></Route>
          <Route exact path="/self-care" component={Self}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/" component={Rating}></Route>
        </Switch>
    )
}

export default Main;