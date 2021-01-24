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
                <h1> log in! :) </h1> 
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
                    <p>don't have an account? <a href="#signup" style={{color:"white"}}>sign up.</a> </p>
                </div>
    

            </div>
            </div>

        )

    }
}