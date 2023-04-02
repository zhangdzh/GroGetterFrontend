import React, { useState } from 'react';

// python anywhere backend link
const backendURL = 'zhangdzh.pythonanywhere.com';

const SignUp = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	// call the users add endpoint using fetch
	const addUser = async (e) => {
		e.preventDefault();
		try {
			// TODO: make text into field variables
			let res = await fetch(`${backendURL}/users/add`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				// body of the POST request
				body: JSON.stringify({
					username: username,
					email: email,
					password: password
				})
			});
			// not sure of purpose of this
			let resJson = await res.json();

			// reset states if ok
			if (res.status === 200) {
				setUsername("");
				setEmail("");
				setPassword("");
				setMessage("User created successfully");
			} else {
				setMessage("Some error occured");
			}
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
			<h1>New User: Sign Up</h1>
			{/* form that calls addUser once submitted */}
			<form onSubmit={addUser}>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type='submit'>Sign Up</button>

				{/* creates an alert if there is an error */}
				<alert>{message ? <p>{message}</p> : null}</alert>
			</form>
		</div>
	);
};

export default SignUp;
