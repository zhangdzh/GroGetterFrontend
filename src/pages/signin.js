import React, { useEffect, useState } from 'react';
import background from '../imgs/yellow_background.jpg'
import AppContext from '../config';
import { useNavigate } from 'react-router-dom';
// import { Dropdown, Option } from "../components/Dropdown/dropdown";

const SignIn = () => {
    const navigate = useNavigate();
    // python anywhere backend link
    const backendURL = 'zhangdzh.pythonanywhere.com';
    // const [users, setUsers] = useState([]);

    const [input, setInput] = useState({
		username: '',
		password: ''
	});

    const onInputChange = e => {
		const { name, value } = e.target;
		setInput(prev => ({
			...prev,
			[name]: value
		}));
	}

    // call the users add endpoint using fetch
	const login = async (e) => {
		e.preventDefault();
		try {
			// TODO: make text into field variables
			let res = await fetch(`https://${backendURL}/users/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				// body of the POST request
				body: JSON.stringify({
					username: input.username,
					password: input.password
				})
			});
			// not sure of purpose of this
			let resJson = await res.json();

            AppContext.isAuthenticated = resJson;

            if(AppContext.isAuthenticated) {
                AppContext.username = input.username; 
            }

            console.log(AppContext.isAuthenticated);
            console.log(AppContext.username);
            
			// reset states if ok
			if (res.status === 200) {
				input.username = "";
				input.password = "";
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
                <h1>Returning User: Sign In</h1>
                {/* <div className="username">
                    <label>Username     </label>
                    <select id="batchSelect" style={{height:"3.5vh", width:"20vh"}}> {users} </select>
                </div> */}
                <form>
                    <div className="username" style={{paddingTop:"0.5rem", paddingBottom:"0.5rem"}}>
                        <label>Username     </label>
                        <input placeholder='Username' type="username" name="username" style={{height:"2.5vh", width:"19.3vh"}} value={input.username} onChange={onInputChange} required />
                    </div>
                    <div className="password" style={{paddingTop:"0.5rem", paddingBottom:"0.5rem"}}>
                        <label>Password     </label>
                        <input placeholder='Password' type="password" name="password" style={{height:"2.5vh", width:"20vh"}} value={input.password} onChange={onInputChange} required />
                    </div>
                    <div className="button" onClick={login}>
                        <input type="submit" style={{height:"3.5vh"}} onClick={()=> navigate('/groc')}/>
                    </div>
                </form>
                <a href="./signup" style={{textDecoration:"none", paddingTop:"1rem"}}>
                    Don't have an account: Sign Up
                </a>
            </div>
        </div>
    );
};

export default SignIn;