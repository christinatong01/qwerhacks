import React from "react";
import "../styles/layout.css";
import Button from 'react-bootstrap/Button';

import { Nav } from "./nav.js";

export default class Me extends React.Component {
    constructor(props)
    {
        //JSX (HTML and JS)
        super(props);
        this.state = {
            cards: [{number: 1}, {number: 2}, {number:3}, {number:4}, {number:5}],
            today_rating: 5,
        }
    }

    render () {
        if (localStorage.getItem("score") != null ) {
            this.state.today_rating = localStorage.getItem("score");
            localStorage.removeItem("score");
          }

        return (
            <div>
                <Nav />
                <div className="heading">
                    <p> today, i am feeling... </p>
                    <div style={{paddingLeft: 640}}>
                        <p className="button" style={{width: "5%", paddingLeft: 30, paddingRight: 30, fontSize: 60}}>{this.state.today_rating}</p>
                    </div>
                    <p style={{paddingTop: 30}}> explore how to practice <a href="#self-care" style={{textDecoration:"none", fontWeight: "bold", color:"black"}}> self care 🤍 </a> </p>
                </div>
            </div>
        )
    }
}
