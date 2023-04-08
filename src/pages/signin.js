// import React, { useState } from 'react';

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
		alignItems: 'Left',
		height: '10vh'
	}}
	>
	<h1>Returning User: Sign In</h1>
	</div>
);
};

export default SignIn;