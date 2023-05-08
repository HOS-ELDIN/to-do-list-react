import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
// import Content1 from "./Content-copy";
import { useState } from "react";

function App() {
	const [items, setNewItems] = useState([
		{
			id: 1,
			checked: false,
			item: "item 1",
		},
		{
			id: 2,
			checked: false,
			item: "item 2",
		},
		{
			id: 3,
			checked: true,
			item: "item 3",
		},
	]);

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setNewItems(listItems);
		localStorage.setItem("list", JSON.stringify(listItems));
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		console.log(listItems);
		setNewItems(listItems);
		localStorage.setItem("list", JSON.stringify(listItems));
	};
	return (
		<div className="App">
			<Header title="hossam's list" />
			<Content 
				items = {items}
				handleCheck = {handleCheck}
				handleDelete = {handleDelete}
				/>
			{/* <Content1 /> */}
			<Footer length={items.length}/>
		</div>
	);
}

export default App;
