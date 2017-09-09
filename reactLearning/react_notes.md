#JSX - a language for writing both html and javascript in.

React creates a shadow dom - when a change is made in a react app, it refreshes the shadow dom and then
compares the shadow dom to the real dom, and updates only the things that are changed.
It doesn't load the whole page

#Writing JSX

var simpleJSX = <h1>Here is some JSX</h1>

var complexJSX = (
	<h1>Complex JSX</h1>
	<p>Put it in brackets and different lines for readability</p>
)

If you have an image tag or other self closing html tags, you need to close them eg <img src="" />
not <img src="">

You can't use class in jsx as an attribute - it will try and be a javascript class
You have to use className.

To put some javascript inside some JSX use the curly brackets eg

var embeddedJS = <p>Here is some html text evaluating this js {2+4} which wil display as 6.</p>

OK.  apparently if statements don't work in jsx - no injecting if statements!  But can put jsx
inside the if statements

#Rendering JSX

Need a compiler such as babel to conver the jsx to js to convert it all to html.
Also need to include a render function which takes at least two parameters - the first one is the
function that you want to appear on the page, and the second one is the location of where you want it
to appear.

ReactDOM.render(
	textFunction,
	document.getElementById('app')
);


#Event Listeners in JSX
JSX elements can have event listeners, just like HTML elements can.
Programming in React means constantly working with event listeners.
You create an event listener by giving a JSX element a special attribute. Here's an example:

<img onClick={myFunc} />

An event listener attribute's name should be something like onClick or onMouseOver:
the word on, plus the type of event that you're listening for.
You can see a list of valid event names here.

An event listener attribute's value should be a function. The above example would only work if myFunc were a valid function that had been defined elsewhere:

function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />
Note that in HTML, event listener names are written in all lowercase,
such as onclick or onmouseover. In JSX, event listener names are written in camelCase,
such as onClick or onMouseOver.

#Useful javascipt functions used in jx
##The ternary  x ? y : z
Also need to use something called the terneray - it's an if else statement, but in shortened form

x ? y : z

ie if (x) {y} else (z)

eg if(userIsYoungerThan21) {
  serveGrapeJuice();
}
else {
  serveWine();
}

userIsYoungerThan21 ? serveGrapeJuice() : serveWine();

##The conditional &&
&& works best in conditionals that will sometimes do an action, but other times do nothing at all.
Every time that you see && in this example, either some code will run, or else no code will run.
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);

##List arrays
This is fine in JSX, not in an explicit array:

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!

const liArray = [
  <li>item 1</li>,
  <li>item 2<li>,
  <li>item 3</li>
];

<ul>{liArray}</ul>

##Mapping over lists

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  <li>{person}</li>

);

ReactDOM.render(
  <ul>{peopleLis}</ul>,
  document.getElementById("app")
);

##JSX lists have keys
Keys are like ids in html.
A key is a JSX attribute. The attribute's name is key. The attribute's value should be something unique, similar to an id attribute.
keys don't do anything that you can see! React uses them internally to keep track of lists. If you don't use keys when you're supposed to, React might accidentally scramble your list-items into the wrong order.
Not all lists need to have keys. A list needs keys if either of the following are true:

1. The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.
2. A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i ) =>
  <li key={'person_' + i}> {person} </li>

);


#React.createElement
You can write React code without using JSX at all!

The majority of React programmers do use JSX, and we will use it for the remainder of this tutorial, but you should understand that it is possible to write React code without it.

The following JSX expression:

const h1 = <h1>Hello world</h1>;
can be rewritten without JSX, like this:

const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
When a JSX element is compiled, the compiler transforms the JSX element into the method that you see above: React.createElement(). Every JSX element is secretly a call to React.createElement().

We won't go in-depth into how React.createElement() works, but you can start with the documentation if you'd like to learn more!

#Components!
