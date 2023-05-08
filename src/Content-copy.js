import React from "react";
// import logo from "./logo.svg";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
	const [count, setCount] = useState(0);

	return (
		<main>
			<p>{count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Increse
			</button>
			<button onClick={() => {setCount(count - 1 )}}>Decrese</button>
			<button onClick={() => {setCount(0)}}>Set to zero</button>
		</main>
	);
};

export default Content;
