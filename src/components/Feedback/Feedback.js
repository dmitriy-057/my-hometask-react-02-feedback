import React, {Component} from "react";
// import PropTypes from "prop-types";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad:0

    }
// метод класса
handleIncrementGood = ()=> {
    console.log("Click on button");
    this.setState(prevState => {
        return { 
            good: prevState.good + 1
        }
    })
}
handleIncrementNeutral = ()=> {
    console.log("Click on button");
    this.setState(prevState => {
        return { 
            neutral: prevState.good + 1
        }
    })
}
render() {
    return (
       <>
        <div>
            <h2>Please leave feedback</h2>
            <button type="button" onClick={this.handleIncrementGood}>Good</button>
            <button type="button" onClick={this.handleIncrement}>Neutral</button>
            <button type="button" onClick={this.handleIncrement}>Bad</button>
            <h2>Statistics</h2>
        </div>

       <ul>
            <li>Good:{this.state.good}</li>
            <li>Neutral:{this.state.value}</li>
            <li>Bad:{this.state.value}</li>
            <li>Total:<span>amount</span></li>
            <li>Possitive feedback:<span>amount</span></li>
       </ul>
       </> 
    )
}
}

export default Feedback;