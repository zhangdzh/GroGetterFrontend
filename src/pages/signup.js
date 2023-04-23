import React, { useState } from 'react';
import background from '../imgs/yellow_background.jpg'

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
		console.log(message)
	};

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
				<h1>New User: Sign Up</h1>
				{/* form that calls addUser once submitted */}
				<form onSubmit={addUser}>
					<div style={{paddingBottom: "0.5rem"}}>
					<input
						type='text'
						placeholder='Username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						style={{height:"2.5vh", width:"20vh"}}
					/><br></br>
					</div>
					<div style={{paddingBottom: "0.5rem"}}>
					<input
						type='text'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						style={{height:"2.5vh", width:"20vh"}}
					/><br></br>
					</div>
					<div style={{paddingBottom: "0.75rem"}}>
					<input
						placeholder='Password'
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						style={{height:"2.5vh", width:"20vh"}}
						required
					/>
					</div>
					<div style={{paddingBottom: "0.5rem"}}>
					<button type='submit' style={{height:"3.5vh"}}>Sign Up</button><br></br>
					</div>
					<a href="./signin" style={{textDecoration:"none"}}>
                    	Already have an account: Sign In
                	</a>

					{/* creates an alert if there is an error */}
					{message ? <div>{message}</div> : null}

				</form>
			</div>
		</div>
	);
};

export default SignUp;
