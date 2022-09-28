import React from "react";

const Display = ({ results, input }) => {
  if (input === "") {
    return <div>Input the name of country</div>;
  } else {
    if (results.length > 10) {
      return <div>To much</div>;
    } else if (results.length > 1) {
      return (
        <ul>
          {results.map((i) => (
            <li key={i.name.common}>{i.name.official}</li>
          ))}
        </ul>
      );
    } else if (results.length === 1) {
      return (
        <>
          <h1>{results[0].name.common}</h1>
          <div>capital: {results[0].capital}</div>
          <div>area: {results[0].area}</div>
          <div>
            <h3>languages:</h3>
            {
              <ul>
                {Object.values(results[0].languages).map((i) => {
                  return <li>{i}</li>;
                })}
              </ul>
            }
          </div>
          <img src={results[0].flags.png} alt="flag" />
        </>
      );
    }
  }
};

export default Display;
