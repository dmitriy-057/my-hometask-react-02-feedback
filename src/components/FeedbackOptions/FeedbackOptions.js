import React, {Component} from "react";

class FeedbackOptions extends Component {
render() {
   
return (
    <>
    <div>
        <button type="button" onClick={this.handleIncrementGood}>Good</button>
        <button type="button" onClick={this.handleIncrementNeutral}>Neutral</button>
        <button type="button" onClick={this.handleIncrementBad}>Bad</button>
    </div>
    </>
)
}
}

export default FeedbackOptions;
