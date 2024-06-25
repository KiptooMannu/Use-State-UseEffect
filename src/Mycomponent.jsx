import React, { useState, useEffect } from 'react';


function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code runs after the component mounts
    document.title = `You clicked ${count} times`;

    // Optionally, return a cleanup function if needed
    return () => {
      // Clean up if needed
    };
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;
