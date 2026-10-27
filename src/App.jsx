// // import { useState } from "react";

// // function App() {
// //   const [count, setcount] = useState(0);

// //   return (
// //     <div>
// //       <h1>My First Counter</h1>

// //       <p>Current count: {count}</p>
// //       <button
// //         onClick={() => {
// //           if (count > 0) {
// //             setcount(count - 1)
// //           } else if (count === 0) {
// //             setcount(0);
// //           }
// //         }}>Decreas</button>
// //       <button onClick={() => {
// //         setcount(count + 1)
// //       }}>Increse</button>
// //     </div>
// //   );

// // }

// // export default App;


// // import { useState } from "react";

// // function counter() {
// //   const [count, setcount] = useState(7)
// //   return (
// //     <div>
// //       <h2>Counter: {count} </h2>
// //       <button onClick={() => {
// //         if (count > 0) {
// //           setcount(count - 1);
// //         } else if (count === 0) {
// //           setcount(0);
// //         }
// //       }
// //       }>Decreas</button>

// //       <button onClick={() => {
// //         setcount(count + 1)
// //       }}>Increas</button>

// //       <button onClick={() => {
// //         setcount(7)
// //       }}>Reset</button>
// //     </div>
// //   )
// // }
// // export default counter;

// import { useState } from "react";

// function counter() {
//   const [count, setcount] = useState(0);
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={() => {
//         setcount(count + 2)
//       }
//       }>Increas + 2</button>

//       <button onClick={() => {
//         if (count > 0) {
//           setcount(count - 1)
//         } else if (count === 0) {
//           setcount(0);
//         }
//       }}>Decreas - 1</button>

//       <button onClick={() => {
//         setcount(0);
//       }}>Reset</button>

//       function myfun() {
//         console.log("Hellow!")
//       }
//       function CallBack(callback) {
//         callback()
//       }

//       <button onClick={Callback}>CallBack</button>

//     </div>
//   )
// }
// export default counter;

import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  function Change(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={Change} />
      <h1>Name: {name}</h1>
    </div>
  );
}

export default MyComponent;