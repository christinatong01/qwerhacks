import React from "react";
import "../styles/layout.css";
import { useEffect, useState } from 'react';
import  db from "../config.js";
import firebase from 'firebase';
import axios from 'axios';

import { Nav } from "./nav.js";

export default class Reflect extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            users: [
                {rating: "5", activity: "meditation", color: "#FF5959", day: "sun"},
                {rating: "4", activity: "breathing", color: "#FF5959", day: "mon"},
                {rating: "4", activity: "journaling", color: "#FF5959", day: "tues"},
                {rating: "", activity: "", color: "#FACF5A", day: "wed"},
                {rating: "", activity: "", color: "#49BEB7", day:"thurs"},
                {rating: "", activity: "", color: "#49BEB7", day:"fri"},
                {rating: "", activity: "", color: "#49BEB7", day:"sat"},
            ]
        };
    }

    renderCards = (card, index) => {

        return(
                <div className="card" style={{backgroundColor: card.color }}>
                    <div className="title"> {card.day} </div>
                    <div style={{color: "white", fontSize:35, padding:5}}>{card.rating} </div>
                    <div style={{color: "white", fontSize:20, padding:5}}>{card.activity} </div>
                </div>
        );
    }

    render () {
        return (
            <div>
                <Nav />
                <div className="heading">
                    <p> reflect on the week </p>
                    <div className="grid">{this.state.users.map(this.renderCards)}</div>
                </div>
            </div>
        );
    }
}