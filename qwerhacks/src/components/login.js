import React from "react";
import "../styles/layout.css";

let username = "paigebrown";
let password = "hello";

let entered_user = "";
let entered_password = "";



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
                   value1="form_input"
        
                />

                <div className="inputTxt">
                    <p>password</p>
                </div>

                <input
                    type='password'
                    className="form_input"
                    id='form_password'
                    value2= "form_input"
                />
                <br></br>

                <div style={{paddingTop: 20}}>
                <a href="#" style={{color:"white"}}>Log In</a>
                </div>
        
                
                <div className="inputTxt">
                    <p>don't have an account? <a href="#signup" style={{color:"white"}}>sign up.</a> </p>
                </div>


            </div>
            </div>

        )

    }
}