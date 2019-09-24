import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  return(
    <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count+1)}>Click me</button>
    </div>
  );
}

// This is exactly same things with class
// class Count extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count:0};
//   }
//
//   render() {
//     return(
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
//       </div>
//     );
//   }
// }

export default Count;
