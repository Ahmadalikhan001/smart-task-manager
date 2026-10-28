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

// import { useState } from "react";

// function MyComponent() {
//   const [name, setName] = useState("");
//   function Change(event) {
//     setName(event.target.value);
//   }
//   return (
//     <div>
//       <input type="text" value={name} onChange={Change} />
//       <h1>Name: {name}</h1>
//     </div>
//   );
// }

// export default MyComponent;

// import { useState } from "react";
// function Component_1() {
//   const [name1, setName1] = useState("");

//   function ChangeText(event) {
//     setName1(event.target.value);
//   }
//   return (
//     <div>
//       <input type="text" value={name1} onChange={ChangeText} />
//       <h1> Typing_Value : {name1}</h1>
//     </div>
//   )

// }

// export default Component_1;

// import { useState } from "react";

// function App() {
//   const [number2, setNumber2] = useState("");
//   function changeNumber(event) {
//     setNumber2(event.target.value)
//   }
//   return (
//     <div>
//       <input type="text" value={number2} onChange={changeNumber} />
//       <h1>Input Value: {number2}</h1>
//     </div>
//   )

// }
// export default App;

import { useState } from "react";

function MyComp() {
  const [Input, setInput] = useState("");

  function NewInput(event) {
    setInput(event.target.value)
  }
  return (
    <div>
      <input type="text" value={Input} onChange={NewInput} />
      <h1>Input Value : {Input}</h1>
    </div>
  )
}

export default MyComp;