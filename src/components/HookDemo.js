import React, { useState, useEffect } from "react";

/**
 * Hook allows developer use state and other react construct without writing a class.
 */

export function Example() {
  const [count, setCount] = useState(0);
  
  //React runs the effects after every render
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}


