import React from "react";
import "../styles/layout.css";
import { Link } from "react-router-dom";

export class Nav extends React.Component {
    logOut() {
        // log out; reset the token and usernamed cached and return to login page
        localStorage.setItem("token", "");
        localStorage.setItem("username", "");
        window.location.href="#login";
    }

    render () {
        return (
            <div className="header">
                <a href="#me" className="tabs"x> me </a>
                <a href="#self-care" className="tabs"> self care </a>
                <a href="#reflect" className="tabs"> reflect </a>
                <a className="tabs" onClick={() => {this.logOut()}}> log out </a>
            </div>
        )
    }
}