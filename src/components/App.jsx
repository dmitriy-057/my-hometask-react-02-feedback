import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
// import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
// <FeedbackOptions options={} onLeaveFeedback={} /> 
//<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} /> 
export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad:0

}

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
          neutral: prevState.neutral + 1
      }
  })
}
handleIncrementBad = ()=> {
  console.log("Click on button");
  this.setState(prevState => {
      return { 
          bad: prevState.bad + 1
      }
  })
}

countTotalFeedback() {
  return this.state.good + this.state.neutral + this.state.bad;
}

countPositiveFeedbackPercentage() {
  let possitiveFeedbackCounter;
  const totalFeedback = this.countTotalFeedback();
  const possitiveFeedback = this.state.good;

  if(totalFeedback === 0) {
      return possitiveFeedbackCounter = 0;
  }
  possitiveFeedbackCounter = (possitiveFeedback / totalFeedback) * 100;
  return possitiveFeedbackCounter.toFixed(0);
}

render() {
  const {good,neutral,bad} = this.state;
  const countTotalFeedback = this.countTotalFeedback();
  const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
  return (
     <div className="container">
      <h2>Please leave feedback</h2>

    <div>
        <button type="button" onClick={this.handleIncrementGood}>Good</button>
        <button type="button" onClick={this.handleIncrementNeutral}>Neutral</button>
        <button type="button" onClick={this.handleIncrementBad}>Bad</button>
    </div>

    {/* <h2>Statistics</h2>
    <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:<span>{countTotalFeedback}</span></li>
        <li>Possitive feedback:<span>{countPositiveFeedbackPercentage}%</span></li>
    </ul> */}
    <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} /> 
     </div> 
  )
}
};

