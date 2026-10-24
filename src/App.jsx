import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>My First Counter</h1>

      <p>Current count: {count}</p>
      <button
        onClick={() => {
          if (count > 0) {
            setcount(count - 1)
          } else if (count === 0) {
            setcount(0);
          }
        }}>Decreas</button>
      <button onClick={() => {
        setcount(count + 1)
      }}>Increse</button>
    </div>
  );

}

export default App;