import React from 'react';
import background from '../imgs/yellow_background.jpg'
import AppContext from '../config';

const AddGroc = () => {
	console.log("add " + AppContext.isAuthenticated);
	console.log("add " + AppContext.username);

	return (
		<div
		style={{
			backgroundImage: `url(${background})`,
			backgroundSize: 'cover', 
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			height: '50rem',
			backgroundAttachment: 'fixed'
		}}
		>
			<div
			style={{
				display: 'flex',
				justifyContent: 'Left',
				flexDirection: 'Column',
				alignItems: 'Left',
				height: '10vh',
				width: '65%',
				paddingLeft: '15rem',
			}}
			>
			<h1>Add your grocery items here</h1>

			</div>
		</div>
	);
};

export default AddGroc;