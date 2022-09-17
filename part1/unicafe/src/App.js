import { useState } from "react";

const Button = ({ handler, text }) => {
  return <button onClick={handler}>{text}</button>;
};

const Display = ({ text, num }) => (
  <div>
    {text} {num}
  </div>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Fedeback </h1>
      <Button handler={() => setGood(good + 1)} text="good" />
      <Button handler={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handler={() => setBad(bad + 1)} text="bad" />
      <h1> Statistics </h1>
      <Display text="good : " num={good} />
      <Display text="neutral: " num={neutral} />
      <Display text="bad: " num={bad} />
    </div>
  );
};

export default App;
