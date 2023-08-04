import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
	// useRef hook is used to define a refrence to be put inan element and then use that refence.current property to control it from any place
	const inputRef = useRef();
	return (
		<form className="addForm" onSubmit={handleSubmit}>
			<label htmlFor="addItem">Add item</label>
			<input
				type="text"
				id="addItem"
				autoFocus
				ref={inputRef}
				placeholder="Add Item"
				required
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			{/* we can but ? after a element to prevent the methods and the properties of it from running when null */}
			<button type="submit" onClick={inputRef.current?.focus()}>
				<FaPlus />
			</button>
		</form>
	);
};

export default AddItem;
