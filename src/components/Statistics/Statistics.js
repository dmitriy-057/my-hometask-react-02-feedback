import React, {Component} from "react";
import PropTypes from "prop-types";

class Statistics extends Component {
    static propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
        total: PropTypes.number,
    };
render() {
    const {good, neutral, bad, total, positivePercentage} = this.props;
return (
    <>
    <h2>Statistics</h2>
    <ul className="statistics__list">
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:<span>{total}</span></li>
        <li>Possitive feedback:<span>{positivePercentage} %</span></li>
    </ul>
    </>
)
}
}

export default Statistics;

