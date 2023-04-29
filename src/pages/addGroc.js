import React from 'react';
import background from '../imgs/yellow_background.jpg'

const AddGroc = () => {
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