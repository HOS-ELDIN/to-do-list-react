import React from "react";
import logo from "./logo.svg";
import { useState } from "react";

const Content = () => {
	//this is use state the first value is the state var and the other is the method to change it
	//the value world is the default value for the var name
	const [name, setNewName] = useState("world");

	const handleNamehange = () => {
		const names = ["hossam", "hos", "hoshos"];
		const ranNo = Math.floor(Math.random() * 3);
		//here we used the method to change the var name to another value
		setNewName(names[ranNo]);
	};

	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<main>
			<img src={logo} className="App-logo" alt="na" />

			<p onDoubleClick={handleClick}>hello {name}!</p>

			<button onClick={handleNamehange}>Change Name</button>

		</main>
	);
};

export default Content;
