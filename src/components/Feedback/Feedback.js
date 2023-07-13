import React, {Component} from "react";
// import PropTypes from "prop-types";

class Feedback extends Component {
    state = {
        value: 0
    }
// метод класса
handleIncrement = ()=> {
    console.log("Click on button");
    this.setState(prevState => {
        value: prevState +1
    })
}
render() {
    return (
       <>
        <div>
            <h2>Please leave feedback</h2>
            <button type="button" onClick={this.handleIncrement}>Good</button>
            <button type="button" onClick={this.handleIncrement}>Neutral</button>
            <button type="button" onClick={this.handleIncrement}>Bad</button>
            <h2>Statistics</h2>
        </div>

       <ul>
            <li>Good:{this.state.value}</li>
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