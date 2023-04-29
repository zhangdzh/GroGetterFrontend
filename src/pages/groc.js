import React, { useEffect, useState } from 'react';
import background from '../imgs/yellow_background.jpg'
import AppContext from '../config';
import { useNavigate } from 'react-router-dom';

// python anywhere backend link
const backendURL = 'zhangdzh.pythonanywhere.com';

const Groc = () => {
	const [time, setTime] = useState(new Date());
	const [groceryList, setGroceryList] = useState([]);
	const [Sign, setSign] = useState('+');
	const navigate = useNavigate();


	function handleClick () {
		setSign('+')
	  }

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

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1);

		return () => clearInterval(interval);
	}, []);

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
						height: '30vh',
						paddingLeft: '15rem'
					}}
				>
					<h1>Manage your Grocery List here! 
						<button style={{marginLeft:"20rem", paddingLeft:"1.5rem", paddingRight:"1.5rem", fontSize:"2vw", backgroundColor:"#57E552", borderRadius: "10px", borderStyle:"None"}} Click={handleClick} onClick={()=> navigate('/addGroc')}>{Sign}</button>
					</h1>
					
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
