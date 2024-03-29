// import logo from "./logo.svg";
// import { useState } from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
	return (
		<>
			{items.length ? (
				<ItemList
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				<p>Your list is empty</p>
			)}
		</>
	);
};

export default Content;
