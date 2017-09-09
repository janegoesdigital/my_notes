import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});


var Navigation = React.createClass({
		render: function(){
			var navStyle = {
        padding: 0,
        marginBottom: 60,
        backgroundColor: "#5e2269",
        color: "#ffffff",
        fontFamily: "monospace",
        fontSize: "32",
				width: "80%",
				position: "fixed"
			};
			//
			var navUl = {
				listStyle: "none"
			}

			var navLi = {
				display: "inline",
				marginRight: 20,
			}

			return (
				<div style={navStyle}>
					<ul style = {navUl}>
					 <li style = { navLi }>About</li>
					 <li style = { navLi }>Gigs</li>
					 <li style = { navLi }>Party with the Princess</li>
					 <li style = { navLi }>Woo hoo</li>
					</ul>
				</div>

			);
		}
});




ReactDOM.render(
  <div>
		<Navigation/>

    <HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Nicolas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="Bono"/>
    <HelloWorld greetTarget="Catwoman"/>
		<p> Here is my text </p>
		<HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Nicolas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="Bono"/>
    <HelloWorld greetTarget="Catwoman"/>
		<p> Here is my text </p>
		<HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Nicolas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="Bono"/>
    <HelloWorld greetTarget="Catwoman"/>
		<p> Here is my text </p>
		<HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Nicolas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="Bono"/>
    <HelloWorld greetTarget="Catwoman"/>
		<p> Here is my text </p>
		<HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Nicolas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="Bono"/>
    <HelloWorld greetTarget="Catwoman"/>
		<p> Here is my text </p>
		<HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Nicolas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="Bono"/>
    <HelloWorld greetTarget="Catwoman"/>
		<p> Here is my text </p>
		<HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Nicolas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="Bono"/>
    <HelloWorld greetTarget="Catwoman"/>
		<p> Here is my text </p>


	</div>,
  document.querySelector("#container")
);
