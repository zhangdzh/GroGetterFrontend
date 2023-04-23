import React, { useState } from 'react';
import background from '../imgs/yellow_background.jpg'

// python anywhere backend link
const backendURL = 'http://zhangdzh.pythonanywhere.com';

const SignUp = () => {

	const [input, setInput] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	
	const [error, setError] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const onInputChange = e => {
		const { name, value } = e.target;
		setInput(prev => ({
			...prev,
			[name]: value
		}));
		validateInput(e);
	}
   
	const validateInput = e => {
		let { name, value } = e.target;
		setError(prev => {
		  const stateObj = { ...prev, [name]: "" };
	   
		  switch (name) {
			case "username":
			  if (!value) {
				stateObj[name] = "Please enter Username.";
			  }
			  break;

			case "email":
			  if (!value) {
				stateObj[name] = "Please enter Email.";
			  }
			  break; 
	   
			case "password":
			  if (!value) {
				stateObj[name] = "Please enter Password.";
			  } else if (input.confirmPassword && value !== input.confirmPassword) {
				stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
			  } else {
				stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
			  }
			  break;
	   
			case "confirmPassword":
			  if (!value) {
				stateObj[name] = "Please enter Confirm Password.";
			  } else if (input.password && value !== input.password) {
				stateObj[name] = "Password and Confirm Password does not match.";
			  }
			  break;
	   
			default:
			  break;
		  }
	   
		  return stateObj;
		});
	}

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
					username: input.username,
					email: input.email,
					password: input.password
				})
			});
			// not sure of purpose of this
			let resJson = await res.json();

			// reset states if ok
			if (res.status === 200) {
				input.username = "";
				input.email = "";
				input.password = "";
				input.confirmPassword = ""; 
			}
		} catch (err) {
			console.log(err);
		}
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
				{/* <form onSubmit={addUser}> */}
				<form>
					<div style={{paddingBottom: "0.5rem"}}>
					<input
						style={{height:"2.5vh", width:"25vh"}}
						type="text"
						name="username"
						placeholder='Enter Username'
						value={input.username}
						onChange={onInputChange}
						onBlur={validateInput}></input>
					{error.username && <span className='err' style={{ fontSize: '0.85rem', paddingLeft: '0.5vw', color: 'red' }}>{error.username}</span>}

					<br></br>
					</div>
					<div style={{paddingBottom: "0.5rem"}}>
					<input
						style={{height:"2.5vh", width:"25vh"}}
						type='text'
						name='email'
						placeholder='Enter Email'
						value={input.email}
						onChange={onInputChange}
						onBlur={validateInput}></input>
					{error.email && <span className='err' style={{ fontSize: '0.85rem', paddingLeft: '0.5vw', color: 'red' }}>{error.email}</span>}

					<br></br>
					</div>
					<div style={{paddingBottom: "0.75rem"}}>
					<input
						style={{height:"2.5vh", width:"25vh"}}
						type="password"
						name="password"
						placeholder='Enter Password'
						value={input.password}
						onChange={onInputChange}
						onBlur={validateInput}></input>
					{error.password && <span className='err' style={{ fontSize: '0.85rem', paddingLeft: '0.5vw', color: 'red' }}>{error.password}</span>}

					</div>
					<div style={{paddingBottom: "0.75rem"}}>

					<input
						style={{height:"2.5vh", width:"25vh"}} 
						type="password"
						name="confirmPassword"
						placeholder='Enter Confirm Password'
						value={input.confirmPassword}
						onChange={onInputChange}
						onBlur={validateInput}></input>
					{error.confirmPassword && <span className='err' style={{ fontSize: '0.85rem', paddingLeft: '0.5vw', color: 'red' }}>{error.confirmPassword}</span>}

					</div>
					<div style={{paddingBottom: "0.5rem"}}>
					<button type='submit' style={{height:"3.5vh"}} onClick={addUser}>Sign Up</button><br></br>
					</div>
					<a href="./signin" style={{textDecoration:"none"}}>
                    	Already have an account: Sign In
                	</a>

				</form>
			</div>
		</div>
	);
};

export default SignUp;
