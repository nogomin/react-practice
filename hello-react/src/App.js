import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
import IterationSample from "./IterationSample";

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// class App extends Component {
//   state = {
//     color: '#000000'
//   }

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor()
//     })
//   }

//   render() {
//     return (
//         <div>
//           <button onClick={this.handleClick}>랜덤 색상</button>
//           <ErrorBoundary>
//             <LifeCycleSample color={this.state.color} />
//           </ErrorBoundary>
//         </div>
//     ) 
//   }
// }

const App = () => {
  return <IterationSample />
}

export default App;