import React, { useState } from 'react';
import background from '../imgs/yellow_background.jpg'
import AppContext from '../config';

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

	if(AppContext.isAuthenticated) {
		return (
			<div
			style = {{
				backgroundImage: `url(${background})`,
				backgroundSize: 'cover', 
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				height: '89vh',
				backgroundAttachment: 'fixed',
				overflow: 'hidden'
			}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'Left',
						flexDirection: 'Column',
						alignItems: 'Left',
						height: '10vh',
						paddingLeft: '15rem'
					}}
				>
					<h1>Manage your Grocery List here!</h1>
	
				</div>
			</div>
		);
	} else {
		return (
			<div
			style = {{
				backgroundImage: `url(${background})`,
				backgroundSize: 'cover', 
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				height: '89vh',
				backgroundAttachment: 'fixed',
				overflow: 'hidden'
			}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'Left',
						flexDirection: 'Column',
						alignItems: 'Left',
						height: '10vh',
						paddingLeft: '17rem'
					}}
				>
					<a href="./signin" style={{ paddingTop: "5vh", fontSize: "4vw", textDecoration:"none"}}>
                    	Please Sign In Before Proceeding!
                	</a>
				</div>
			</div>
		);
	}
};

export default Groc;
