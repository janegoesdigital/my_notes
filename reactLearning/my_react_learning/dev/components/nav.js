import React from "react";
// import ReactDOM from "react-dom";


export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map((page, index) => {
     return (
					<li key={index}>
				<a  href={'/' + page}>
          {page}
        </a>
				</li>

      )
    });
    return <nav> <ul> {navLinks} </ul></nav>;
  }
}

// export class NavBar extends React.Component {
// 	render(){
// 		const numbers = [1, 2, 3, 4, 5];
// 		const listItems = numbers.map((number, index) =>
//   		<ul> {number}</ul>
// 		);
// 		return <nav> {listItems} </nav>
// 	}
// }
