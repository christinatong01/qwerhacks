import React from "react";
import "../styles/layout.css";
import { useEffect, useState } from 'react';
import  db from "../config.js";
import firebase from 'firebase';

import { Nav } from "./nav.js";

export default class Reflect extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            activity: [
                {name: "meditate and let go"},
                {name: "take deep breaths"},
                {name: "journal and doodle"},
                {name: "yoga time and work on you"},
                {name: "get some fresh air and walk"},
                {name: "catch up with a friend"},
                {name: "spa night and pamper"},
                {name: "spend time with the fam"}
            ]
        };
    }

    renderCards = (card, index) => {

        return(
                <div className="card" style={{backgroundColor: "#49BEB7", width: 300, height: 250}}>
                    <div style={{color: "white", fontSize:40, padding:20}}>{card.name} </div>
                    <div className="did"> i did it! </div>
                </div>
        );
    }

    render () {
        return (
            <div>
                <Nav />
                <div className="heading">
                    <p> how to self care 🤍 </p>
                    <div className="activity_grid">{this.state.activity.map(this.renderCards)}</div>
                    <a href="https://www.purewow.com/wellness/free-ways-to-practice-self-care" style={{textDecoration: "none", color:"black", fontSize:30}}> more? </a>
                </div>
            </div>
        );
    }
}

