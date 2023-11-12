import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
        <div>
          <ScrollBox ref={(ref) => this.scrollBox = ref}/>
          <button onClick={() => {
            this.scrollBox.scrollToBottom()
          }}>맨밑으로</button>
        </div>
    ) 
  }
}

export default App;