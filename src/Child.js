import React from "react";
import { Consumer } from "./Context";
import ChildTwo from "./GrandChild";

function GrandChild() {
  return (
    <Consumer>
      {context => (
        <div>
          <h1>Child Component</h1>
          {context.people.map(person => {
            return (
              <p key={person.id}>
                Hi, I am {person.name} and I am {person.age} years old.
              </p>
            );
          })}

          <ChildTwo />
        </div>
      )}
    </Consumer>
  );
}

export default GrandChild;
