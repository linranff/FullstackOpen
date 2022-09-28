import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Display from "./components/Display";

const App = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("effect on");
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  const results = data.filter((term) => {
    return term.name.common.toLowerCase().includes(input.toLowerCase());
  });
  console.log(results);

  return (
    <>
      <div>
        input:{" "}
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <Display results={results} input={input} />
    </>
  );
};

export default App;
