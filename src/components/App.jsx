import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad:0
}

buttons = ["Good", "Neutral", "Bad"];

// use if
handleIncrement = (type)=> {
  if(type === this.buttons[0]) {
    return this.setState(prevState => ({
      good: prevState.good + 1
    }));
  }
  if(type === this.buttons[1]) {
    return this.setState(prevState => ({
      neutral: prevState.neutral + 1
    }));
  }
  else {
    return this.setState(prevState => ({
      bad: prevState.bad + 1
    }));
  }
}

countTotalFeedback() {
  const {good,neutral,bad} = this.state;
  return good + neutral + bad;
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
    <FeedbackOptions options={this.buttons} onLeaveFeedback={this.handleIncrement} />
    <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} /> 
    
   
     </div> 
  )
}
};

