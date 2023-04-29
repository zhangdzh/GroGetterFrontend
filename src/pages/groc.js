import React, { useEffect, useState } from 'react';
import background from '../imgs/yellow_background.jpg'
import AppContext from '../config';
import { useNavigate } from 'react-router-dom';
import GrocJsonDataDisplay from '../table/GrocTable'

// python anywhere backend link
const backendURL = 'zhangdzh.pythonanywhere.com';

const Groc = () => {
	const [time, setTime] = useState(new Date());
	const [groceryList, setGroceryList] = useState([]);
	const [Sign, setSign] = useState('+');
	const [Sign1, setSign1] = useState('⁠–');
	const navigate = useNavigate();


	function handleClick () {
		setSign('+');
	}

	function handleClick1 () {
		setSign1('-');
	}

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
					<h1> Welcome {AppContext.username}! </h1>
					<h2>Manage your Grocery List here! 
						<button style={{marginLeft:"25rem", paddingLeft:"1.5rem", paddingRight:"1.5rem", fontSize:"2vw", backgroundColor:"#57E552", borderRadius: "10px", borderStyle:"None"}} Click={handleClick} onClick={()=> navigate('/addGroc')}>{Sign}</button>
						<button style={{marginLeft:"1rem", paddingLeft:"1.5rem", paddingRight:"1.5rem", fontSize:"2vw", backgroundColor:"#FF6242", borderRadius: "10px", borderStyle:"None"}} Click={handleClick1} onClick={()=> navigate('/removeGroc')}>{Sign1}</button>
					</h2>

					<GrocJsonDataDisplay/>
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
