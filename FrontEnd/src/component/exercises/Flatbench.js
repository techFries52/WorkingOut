import React, { Component } from 'react';
import handleClick from "../Exercises"



export default class Flatbench extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "not selected"
        };
      }
    render() {
        return (        
            <>
                <li><span onClick={handleClick} className="plus"><i class="fa fa-plus"></i></span>Flat Bench</li>     
            </>
        )
    }       
    
};