// import React, { useState } from 'react';
import { Dropdown, Option } from "../components/Dropdown/dropdown";

const SignIn = () => {

// python anywhere backend link
const backendURL = 'zhangdzh.pythonanywhere.com';

const getUserList = async () => {
	const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const fetchResponse = await fetch(`https://${backendURL}/users/dict/`, settings);
        const data = await fetchResponse.json();
		console.log(data); 
        return data;
    } catch (e) {
        return e;
    }    
};

getUserList(); 

return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Left',
		flexDirection: 'Column',
		alignItems: 'Left',
		height: '10vh',
		paddingLeft: '10rem'
	}}
	>
	<h1>Returning User: Sign In</h1>
	<Dropdown>
        <Option selected value="Usernames" />
        <Option value="Option 1" />
        <Option value="Option 2" />
        <Option value="Option 3" />
      </Dropdown>
	</div>
);
};

export default SignIn;