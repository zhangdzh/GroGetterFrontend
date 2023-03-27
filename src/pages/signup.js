import React from 'react';

// not sure what our MongoDB database link is
const backendURL = 'http://localhost:3000';

const SignUp = () => {

	// call the users add endpoint using fetch
	const addUser = async (username, email, password) => {
		// might need to make the strings into fields
		await fetch(`${backendURL}/users/add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			// this is the body of the POST request
			body: JSON.stringify({
				username: username,
				email: email,
				password: password
			})
		});
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
			<h1>New User: Sign Up</h1>
		</div>
	);
};

export default SignUp;
