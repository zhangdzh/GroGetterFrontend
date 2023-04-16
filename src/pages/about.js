import React from 'react';
import groupImg from '../imgs/group_photo.png'
import linkedIn from '../imgs/linkedin.png'
import background from '../imgs/yellow_background.jpg'

const About = () => {
return (
	<div
	style={{
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover', 
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		height: '52rem',
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
			width: '80%',
			paddingLeft: '10rem',
		}}
		>
		<h1>About</h1>

		<h2>GroGetter allows users to create grocery lists and allows users to add/remove items for their grocery list.</h2>

		<h2>This project was created by Dorothy, Yeseon, Jeffery, and Jun as their Senior Design Project, a class at NYU Tandon School of Engineering.</h2>

		<img style={{ alignItem: 'center', width: '50%', height: '70vh',paddingTop: '5vh', paddingBottom: '5vh', paddingLeft: '20%' }} src={groupImg} />

		<div
		style={{
			display: 'flex',
			justifyContent: 'Left',
			alignItems: 'Left',
			paddingBottom: '7vh',
			paddingLeft: '16%'
		}}
		>
			<h2>Yeseon: </h2>
			<a href="https://www.linkedin.com/in/yeseon-kim" target="_blank"><img style={{ paddingTop: '2vh', paddingLeft: '1vw', maxWidth: '3vw', maxHeight: '3vw'}} src={linkedIn} /></a>

			<h2 style={{ paddingLeft: '2vw' }}>Dorothy: </h2>
			<a href="https://www.linkedin.com/in/dzzhang/" target="_blank"><img style={{ paddingTop: '2vh', paddingLeft: '1vw', maxWidth: '3vw', maxHeight: '3vw'}} src={linkedIn} /></a>

			<h2 style={{ paddingLeft: '2vw' }}>Jeffery: </h2>
			<a href="https://www.linkedin.com/in/jeffery-tse/" target="_blank"><img style={{ paddingTop: '2vh', paddingLeft: '1vw', maxWidth: '3vw', maxHeight: '3vw'}} src={linkedIn} /></a>

			<h2 style={{ paddingLeft: '2vw' }}>Jun: </h2>
			<a href="https://www.linkedin.com/in/junhyung-kim/" target="_blank"><img style={{ paddingTop: '2vh', paddingLeft: '1vw', maxWidth: '3vw', maxHeight: '3vw'}} src={linkedIn} /></a>
		</div>

		</div>
	</div>
);
};

export default About;