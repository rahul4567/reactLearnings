import React, { useState, useEffect } from "react";

function UseEffectHook(props) {
  const [name, setName] = useState(props.name);
  const [data, setData] = useState(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("Called everytime");
  });

  // Empty dependency array, runs only once
  useEffect(() => {
    // Fetch data from an API
    fetch("https://my-json-server.typicode.com/typicode/demo/profile")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array, runs only once

  useEffect(() => {
    document.title = props.name;
  }, [props.name]);

  /*
  If we call functions inside the useEffect callback function, we would have to include the 
  function name in the dependency array. This will result in a bug as printName() isn’t wrapped 
  in the callback. That will lead to useEffect triggering on every render of React component! 
  Let’s take a look.

 import { useEffect } from 'react';
 
 const ExampleComponent = () => {
    const name = "Thomas"
 
const printName = (value) => {
    console.log(value);
 };
 
 
    useEffect(() => {
        printName(name);
    }, [name, printName]);
 
    return <p>UseEffect!</p>;
 };
 
 export default ExampleComponent;*/

  // cleanup function in useEffect
  useEffect(() => {
    let interval = setInterval(() => setTime(1), 1000);

    return () => {
      // setInterval cleared when component unmounts
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <b>API Call Result: </b>
      {data ? data.name.toUpperCase() : "Loading..."}
    </div>
  );
}

export default UseEffectHook;
