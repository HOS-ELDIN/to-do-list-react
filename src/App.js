import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
// import Content1 from "./Content-copy";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
	const [items, setNewItems] = useState(
		JSON.parse(localStorage.getItem("list"))
	);
	const [newItem, setNewItem] = useState("");
	const [searchInput, setSearchInput] = useState("");

	const setAndSaveItems = (listItems) => {
		setNewItems(listItems);
		localStorage.setItem("list", JSON.stringify(listItems));
	};

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, checked: false, item };
		const listItems = [...items, myNewItem];
		setAndSaveItems(listItems);
		console.log(listItems);
	};

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setAndSaveItems(listItems);
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setAndSaveItems(listItems);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// add new item
		addItem(newItem);
		setNewItem("");
	};

	return (
		<div className="App">
			<Header title="hossam's list" />

			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>

			<SearchItem searchInput={searchInput} setSearchInput={setSearchInput} />

			<Content
				items={items.filter((item) =>
					item.item.toLowerCase().includes(searchInput.toLowerCase())
				)}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			{/* <Content1 /> */}
			<Footer length={items.length} />
		</div>
	);
}

export default App;
