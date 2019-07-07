import React from "react";
import { Consumer } from "./Context";

function Child() {
  return (
    <Consumer>
      {context => (
        <div>
          <h1>Granchild Component</h1>
          {context.people.map(person => {
            return (
              <p key={person.id}>
                Hi, I am {person.name} and I am {person.age} years old.
              </p>
            );
          })}
        </div>
      )}
    </Consumer>
  );
}

export default Child;
