import React, {Component} from "react";
// import PropTypes from "prop-types";

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    handleClick = () => {
        console.log("click");
        this.setState(prevState=> ({
            good: prevState.value +1
        }))
    }
render() {
    return (
       <>
       <h2>Please leave feedback</h2>
       <button onClick={this.handleClick}>Good</button>
       <button onClick={this.handleClick}>Neutral</button>
       <button onClick={this.handleClick}>Bad</button>
       <h2>Statistics</h2>
       <ul>
        <li>Good:<span>{this.state.good}</span></li>
        <li>Neutral: {this.state.neutral}</li>
        <li>Bad:<span>{this.state.bad}</span></li>
        <li>Total:<span>amount</span></li>
        <li>Possitive feedback:<span>amount</span></li>
       </ul>
       </> 
    )
}
}

export default Feedback;