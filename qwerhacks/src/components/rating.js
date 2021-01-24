//FOR PAIGE

import React from "react";
import "../styles/layout.css";
import { Nav } from "./nav.js";

export default class rating extends React.Component {

    //JS
    constructor(props)
    {
        //JSX (HTML and JS)
        super(props);
        this.state = {
            cards: [{number: 1}, {number: 2}, {number:3}, {number:4}, {number:5}],
            color: "#49BEB7"
        }
    }

    setColor = () =>
    {
        this.setState({color: '#FF5959'});
    }

    renderCards = (card, index)  => {
        return (
                <div className="rectangle">
                <button variant="dark" size = "lg" onClick={()=>{this.setColor()}} >{card.number}</button>
                </div>

        );
    }

        //JSX (HTML and JS)
    render () {
        return(
            <div className="body" style={{backgroundColor:"white"}}>
                <Nav />
                <div>
               <h1 style={{color:"black", paddingTop:50}}> how are you feeling today? </h1>

                    {this.state.cards.map(this.renderCards)}
                </div>

            </div>
        );
    }

}
