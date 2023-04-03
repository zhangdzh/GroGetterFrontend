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
	</div>
);
};

export default Groc;
