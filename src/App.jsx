import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>My First Counter</h1>

      <p>Current count: {count}</p>

      <button onClick={() => {
        setcount(count + 1)
      }}>Increse</button>

    </div>
  );

}

export default App;