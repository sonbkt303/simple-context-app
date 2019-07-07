import React, { Component } from "react";
import { Provider } from "./Context";
import ChildOne from "./Child";
class Parent extends Component {
  state = {
    people: [
      { id: 0, name: "Bob", age: 24 },
      { id: 1, name: "Jack", age: 22 },
      { id: 2, name: "Jill", age: 26 }
    ]
  };

  render() {
    return (
      <Provider value={this.state}>
        <ChildOne />
        {/* <ChildTwo /> */}
      </Provider>
    );
  }
}

export default Parent;
