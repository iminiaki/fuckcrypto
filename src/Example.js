import React, { useState, useEffect } from "react";
import requests from "./config/request";

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(async () => {
    const result = await requests("/cryptocurrency/listings/latest")
    console.log(result);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
