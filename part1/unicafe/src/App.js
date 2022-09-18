import { useState } from "react";

const Button = ({ handler, text }) => {
  return <button onClick={handler}>{text}</button>;
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);
const Statistics = ({ good, neutral, bad }) => {
  if (good + bad + neutral === 0) {
    return <h5>No Feedback given</h5>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good:" value={good} />
        <StatisticLine text="neutral:" value={neutral} />
        <StatisticLine text="bad:" value={bad} />
        <StatisticLine text="all:" value={bad + neutral + good} />
        <StatisticLine
          text="average:"
          value={(good - bad) / (bad + neutral + good)}
        />
        <StatisticLine
          text="positive:"
          value={(100 * good) / (bad + neutral + good) + "%"}
        />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedbacks </h1>
      <Button handler={() => setGood(good + 1)} text="good" />
      <Button handler={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handler={() => setBad(bad + 1)} text="bad" />
      <h1> Statistics </h1>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
