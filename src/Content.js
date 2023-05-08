import React from "react";
import logo from "./logo.svg";
import { useState } from "react";

const Content = () => {
	const [name, setNewName] = useState("world");
	

	const handleNamehange = () => {
		const names = ["hossam", "hos", "hoshos"];
		const ranNo = Math.floor(Math.random() * 3);
		setNewName(names[ranNo]);
	};

	const handleClick = () => {
		console.log("clicked");
	};

	// const handleClick2 = (name) => {
	// 	console.log(`${name} was clicked`);
	// };

	// const handleClick3 = (e) => {
	// 	console.log(e.target.innerText);
	// };
	return (
		<main>
			<img src={logo} className="App-logo" alt="na" />

			<p onDoubleClick={handleClick}>hello {name}!</p>

			<button onClick={handleNamehange}>Change Name</button>

			{/* <button onClick={() => handleClick2("h")}>Click me2</button> */}

			{/* <button onClick={(e) => handleClick3(e)}>Click me3</button> */}
		</main>
	);
};

export default Content;
