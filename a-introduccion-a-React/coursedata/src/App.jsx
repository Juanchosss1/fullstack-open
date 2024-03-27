import React, { useState } from 'react';

const Button = ({ handleClick, text }) => {

  return (
    <button onClick={handleClick}>{text}</button>
  );
};

const Statics = ({allReviews, good, neutral, bad})=>{
  
  let averageStatics= (good - bad) / (allReviews - neutral);
  let positive = (100 / allReviews ) * good;
  if(allReviews != 0){
     return(
        <>
          <h1>Statics</h1>
          <br/>
          <label>Good: {good}</label>
          <label>Neutral: {neutral}</label>
          <label>Bad: {bad}</label>
          <br/>                
          <label>Average: {averageStatics}</label>
          <br/>
          <label>Positive: {positive}</label>
        </>
      )
     } else{

      return (
        <>
          <h1>Statics</h1>
          <br/>
          <br/>
          <label>Good: {good}</label>
          <label>Neutral: {neutral}</label>
          <label>Bad: {bad}</label>
          <br/>      
          <label>"No feedback given." </label>
        </>
      )
    } 
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allReviews, setAllReviews] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
    setAllReviews(allReviews + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAllReviews(allReviews + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1);
    setAllReviews(allReviews + 1)
  }
  
  return (
    <div>
      <h1>Give feedback</h1>
      <br/>
      <Button  handleClick={() => handleGoodClick()} text="Good"  />
      <Button handleClick={() => handleNeutralClick()} text="Neutral"   />
      <Button handleClick={() => handleBadClick()} text="Bad" />
      
      <label>{allReviews}</label>
      <Statics allReviews={allReviews} good={good} neutral={neutral} bad={bad}/>
    </div>
  );
};

export default App;
