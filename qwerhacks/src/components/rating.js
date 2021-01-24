import React from "react";
import "../styles/layout.css";
import { useEffect, useState } from 'react';
import  db from "../config.js";
import firebase from 'firebase';
import Button from 'react-bootstrap/Button';

import { Nav } from "./nav.js";

export default class rating extends React.Component {

    //JS
    constructor(props)
    {
        //JSX (HTML and JS)
        super(props);
        this.state = {
            cards: [{number: 1}, {number: 2}, {number:3}, {number:4}, {number:5}],
        }
    }

    whenClicked(str){
        this.setState({curr_club: str});
        localStorage.setItem("score", str);
      }

    renderCards = (card, index)  => {
        return(
            <div>
                <Button className="button" onClick={() => {this.whenClicked(card.number)}}> <a href="#me" style={{color:"white", textDecoration:"none"}}>{card.number}</a> </Button>{' '}
            </div>
    );
    }

        //JSX (HTML and JS)
    render () {
        return (
            <div>
                <Nav />
                <div className="heading">
                    <p> how am i feeling today? </p>
                    <div className="rating_grid">{this.state.cards.map(this.renderCards)}</div>
                </div>
            </div>
        );
    }

}
