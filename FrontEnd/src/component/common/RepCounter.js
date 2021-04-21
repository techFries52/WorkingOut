import React, { Component} from "react";


export default class RepCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reps: ""
        };
      }
    
    handleRepChange = (event) => {
        this.setState(state => ({
            reps: [...state.reps, event.target.value]
        }))
    }

    render() {
        return (
            <input className="inputRep" type="number" min="2" max="100" onChange={this.handleRepChange}></input>
        )
    }
}