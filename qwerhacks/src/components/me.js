import React from "react";
import "../styles/layout.css";

import { Nav } from "./nav.js";

export default class Me extends React.Component {

    render () {
        return (
            <div>
                <Nav />
                <div className="heading">
                    <p> today, i am feeling... </p>
                    <p style={{paddingTop: 190}}> explore how to practice <a href="#self-care" style={{textDecoration:"none", fontWeight: "bold", color:"black"}}> self care </a> </p>
                </div>
            </div>
        )
    }
}
