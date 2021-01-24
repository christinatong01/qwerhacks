//FOR PAIGE

import React from "react";
import "../styles/layout.css";

export default class login extends React.Component {
    
    //JS
    render ()
    {
        return (
        //JSX (HTML and JS)
            <div className = "body">
                <div className="align">
            <h1> sign up! :) </h1> 
            <div className="inputTxt">
                <p>username</p>
            </div>

            <input
            type='text'
            className="form_input"
            id='form_username'
            />
            
            <div className="inputTxt">
                <p>password</p>
            </div>

            <input
                type='password'
                className="form_input"
                id='form_password'
            />

            <div className="inputTxt">
                <p>birthday</p>
            </div>

            <input
                type='text'
                className="form_input"
                id='form_birthday'
            />

            <div className="inputTxt">
                <p>already have an account? <a href="#login" style={{color:"white"}}>log in here.</a> </p>
            </div>


            </div>
            </div>
        )
    }
}