import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
// import Content1 from "./Content-copy";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

function App() {
	// api const
	const API_URL = "http://localhost:3500/items";

	// use stat section
	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// use effect section

	// useEffect hook is used to know if the component is rendered (mounted) or (unmounted) and also can be used to detect any change or specific changes (it is like feed back in sequential control)
	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) throw Error("did not recive data");

				const listItems = await response.json();
				setItems(listItems);

				setFetchError(null);
			} catch (error) {
				setFetchError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		setTimeout(() => {
			fetchItems();
		}, 2000);
	}, []);

	// functions and handelers section

	const addItem = async (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, checked: false, item };
		const listItems = [...items, myNewItem];
		setItems(listItems);

		const postOption = {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(myNewItem),
		};

		const result = await apiRequest(API_URL, postOption);

		if (result) setFetchError(result);
	};

	const handleCheck = async (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);

		const updatedItem = listItems.filter((item) => item.id === id);

		const updateOptions = {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ checked: updatedItem[0].checked }),
		};

		const updateApiUrl = `${API_URL}/${id}`;

		const result = await apiRequest(updateApiUrl, updateOptions);

		if (result) setFetchError(result);
	};

	const handleDelete = async (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);

		// const deletedItem = items.filter((item) => item.id === id);

		const deleteOptions = {
			method: "DELETE",
		};

		const deleteApiUrl = `${API_URL}/${id}`

		const result = await apiRequest(deleteApiUrl,deleteOptions)
		console.log(result);
		if (result) setFetchError(result)
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

			<main>
				{isLoading && <p>Loading Items...</p>}
				{fetchError && <p style={{ color: "red" }}>{`error: ${fetchError}`}</p>}

				{!fetchError && !isLoading && (
					<Content
						items={items.filter((item) =>
							item.item.toLowerCase().includes(searchInput.toLowerCase())
						)}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				)}
			</main>

			<Footer length={items.length} />
		</div>
	);
}

export default App;
