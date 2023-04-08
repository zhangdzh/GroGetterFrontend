import React from 'react';
import homeImg from '../imgs/homeImg.png'

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
			height: '90vh',
			backgroundImage: `url(${homeImg})`,
			backgroundSize: 'cover'
		}}
	>
		<h1>Welcome to GroGetter!</h1>

	</div>
);
};

export default Home;
