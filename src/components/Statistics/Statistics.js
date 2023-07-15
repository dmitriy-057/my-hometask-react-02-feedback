import React, {Component} from "react";
import PropTypes from "prop-types";

class Statistics extends Component {
    
render() {
return(
    <>
    <h2>Statistics</h2>
    <ul>
        <li>Good:{this.good}</li>
        <li>Neutral:{this.neutral}</li>
        <li>Bad:{this.bad}</li>
        <li>Total:<span>{this.countTotalFeedback}</span></li>
        <li>Possitive feedback:<span>{this.countPositiveFeedbackPercentage}%</span></li>
    </ul>
    </>
)
}
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}

export default Statistics;

