import ReactDOM from 'react-dom';
import React, { useState } from "react";
import SingleSpaReact from 'single-spa-react';

const reactLifecycles = SingleSpaReact({
  React,
  ReactDOM,
  rootComponent() {
    const [counter, setCounter] = useState(0);
    const decrement = () => setCounter(counter - 1);
    const increment = () => setCounter(counter + 1);
    return (
      <div>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={increment}>Incrementar</button>
      <div>{counter}</div>
      </div>
    );
  },
});
  
export const { bootstrap, mount, unmount } = reactLifecycles;
