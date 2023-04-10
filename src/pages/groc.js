import React, { useState } from 'react';

// python anywhere backend link
const backendURL = 'zhangdzh.pythonanywhere.com';

const Groc = () => {

	const [groceryList, setGroceryList] = useState([]);

	const getGroc = async (e) => {
		e.preventDefault();
		try {
			let res = await fetch(`${backendURL}/groc/items`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			let resJson = await res.json();
			setGroceryList(resJson);
		} catch (err) {
			console.log(err);
		}
	};

	// test function for the grocDict endpoint
	// which uses the get_grocery_list function
	const [groceryDict, setGrocDict] = useState({});
	const grocDict = async (e) => {
		e.preventDefault();
		try {
			let res = await fetch(`${backendURL}/groc/dict`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			let resJson = await res.json();
			setGrocDict(resJson);
		} catch (err) {
			// console.log(err);
		}
	};


	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'Left',
				alignItems: 'Left',
				height: '10vh'
			}}
		>
			<h1>Manage your Grocery List here!</h1>

			{/* button that calls grocDict function */}
			<button onClick={grocDict}>Get Grocery Dictionary</button>
			<ul>
				{Object.entries(groceryDict).map(([key, value]) => (
					<li key={key}>
						<strong>{key}: </strong>
						{JSON.stringify(value)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Groc;
