import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
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
			<button type="submit" onClick={inputRef.current.focus()}>
				<FaPlus />
			</button>
		</form>
	);
};

export default AddItem;