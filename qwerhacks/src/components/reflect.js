import React from "react";
import "../styles/layout.css";
import { useEffect, useState } from 'react';
import  db from "../config.js";



import { Nav } from "./nav.js";

export default class Reflect extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            users: [
                {rating: "5", activity: "meditate and let go", color: "#FF5959", day: "sun"},
                {rating: "4", activity: "take deep breaths", color: "#FF5959", day: "mon"},
                {rating: "4", activity: "journal and doodle", color: "#FF5959", day: "tues"},
                {rating: "5", activity: "", color: "#FACF5A", day: "wed"},
                {rating: "", activity: "", color: "#49BEB7", day:"thurs"},
                {rating: "", activity: "", color: "#49BEB7", day:"fri"},
                {rating: "", activity: "", color: "#49BEB7", day:"sat"},
            ],
            activity: "",
        };
    }

    renderCards = (card, index) => {
        if (localStorage.getItem("score") != null ) {
            this.state.activity = localStorage.getItem("score");
            localStorage.removeItem("score");
          }

        if (card.day === "wed") {
            card.activity = this.state.activity;
        }

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
                    <p> reflect on the week 🤍</p>
                    <div className="grid">{this.state.users.map(this.renderCards)}</div>
                </div>
            </div>
        );
    }
}