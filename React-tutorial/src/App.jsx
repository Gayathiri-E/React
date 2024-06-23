// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// props
// import User from './User'
// function App() {
// //js object
//   const userData = {
//     name : "gayu",
//     age : 20,
//     phone : "9500796600",
//   };

//   return (
//     <div>
//       <h1>HELLO</h1>
//       <User 
//       // name={userData.name}
//       // age={userData.age}
//       // phone = {userData.phone}  //this is the tradional method
      

//      {...userData} // -- Spread Operator
//       /> 
//     </div>
//   );
// }
// export default App

//-------------------------------------------------------------------------------------------------------------------------------------

// //Hooks - useState

// import React,{useState} from "react"; //import usestate hook

// const App = () => {
//   const [num, setNum]= useState(1); //syntax for usestate & number 100 will be passed and assign in variable

//   let x = 1;

//   const handleadd = ()=>{
//     // x = x+1;
//     // console.log(x);
//    // setNum(2); direct pass the number and update or we can use call back function
//    setNum((currvalue) => {
//     return currvalue + 1; // callback function 
//    });
//   };

//  console.log(num);

//   return (
//     <div>
//         <h1>{num}</h1>
//         <button onClick={handleadd}>Add</button> 
//     </div>
//   );
// };

// export default App;

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//hooks - useeffect
// import React,{useState} from 'react'
// import { useEffect } from 'react';

// const App =() => {
//   const [num1,setNum1] =useState(100);
//   const [num2,setNum2] =useState(1000);

//   useEffect (() =>{
//    // setNum1(200); // when we run this...first num1=200 , then it update 201 in console and then num1 set as 200..so react understand same value will be set to num1 --> so , useeffect cannot run 
//     console.log("from use effect")

//     return () =>{
//       setNum1(100); //we set num1 as 100..this first run before the above statement
//       console.log("memory leak")
//     }
    
//   },[num1,num2]); //we are updating only num1 value...so num2 re-render nut not  call the useeffect hook . if we need to run the useeffect for both num1, num2 - simply add num1 and num2 in the array

//   // console.log(num1)

//   return (
//     <div>
//       <h1>{num1}</h1>
//       <button onClick={() =>  setNum1((curr) => curr+1)}>Add</button>
//       <h1>{num2}</h1>
//       <button onClick={() =>  setNum2((curr) => curr+1)}>Add</button>
//     </div>
//   );
// }

// export default App


//----------------------------------------------------------------------------------------------------------

//useref Hook

import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

const App = () => {
  const [num,setNum] = useState("");

  const xyz =useRef();

  console.log("rendered");

  // useEffect(() => {
  //   xyz.current = num;
  // },[num])
  
  const display =()=>{
    console.log(xyz.current)
    xyz.current.focus();  //if i click the show input button automayically the input field gets focused

  }
  return (
    <div>
      <h1>num</h1>
      <input
      ref={xyz}
      type="text"
      value={num}
       onChange={(event) => setNum(event.target.value)} />
       <p>my name is {num}</p>
       <p>my name is{xyz.current}</p>
      <button onClick={display}>Show Input</button>
    </div>
  );
};

export default App;