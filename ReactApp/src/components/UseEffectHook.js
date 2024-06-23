// import React  from "react";
// export default class UseEffectHook extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//     }
  
//     componentDidMount() {
//       document.title = `You clicked ${this.state.count} times`;
//       console.log("fist called");
//     }
//     componentDidUpdate() {
//       document.title = `You clicked ${this.state.count} times`;
//       console.log(document.title);
//     }
  
//     render() {
//       return (
//         <div>
//           <p>You clicked {this.state.count} times</p>
//           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//             Click me
//           </button>
//         </div>
//       );
//     }
//   }

import React, { useState, useEffect } from 'react';

export default function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(
    
    () => {
        //setCount(0);
     document.title = `You clicked ${count} times`;
    console.log(document.title);
  },[count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}