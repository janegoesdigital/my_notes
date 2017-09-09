import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from '../dev/components/nav.js';
import { Hello } from "../dev/components/hello.js"


var destination = document.querySelector("#container");

class SayHello extends React.Component {
  render() {
    return (
				console.log("Hello!"),
        <p>
          Hello Jane and Betty -you're here!  I am coming from the index.js
        </p>
    );
  }
};


ReactDOM.render(
	<div>
		<NavBar />
		<SayHello />
		<Hello name="Janie Dear"/>
	</div>,
	destination
);
