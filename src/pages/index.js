import React from 'react';
import homeImg from '../imgs/homeImg.png'

// launch page for GroGetter
const Home = () => {
return (
	<div
		style={{
			display: 'flex',
			justifyContent: 'Left',
			alignItems: 'Left',
			flexDirection: 'Column',
			fontSize: '6vw',
			paddingTop: '0',
			paddingLeft: '10rem', 
			height: '89vh',
			color: 'White',
			textShadow: '1px 1px 50px black',
			overflow: 'hidden',
			backgroundImage: `url(${homeImg})`,
			backgroundSize: 'cover'
		}}
	>
		<h1>Welcome to GroGetter!</h1>

	</div>
);
};

export default Home;
