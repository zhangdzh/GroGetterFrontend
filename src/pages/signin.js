// import React, { useState } from 'react';
// import { Dropdown, Option } from "../components/Dropdown/dropdown";

const SignIn = () => {

    // python anywhere backend link
    const backendURL = 'zhangdzh.pythonanywhere.com';
	const batchTrack = document.getElementById("batchSelect");

    const getUserList = async () => {
        try {
            const fetchResponse = await fetch(`https://${backendURL}/users/dict`);
            const data = await fetchResponse.json();
            const users = Object.keys(data['Data'])
            // console.log(Object.keys(data['Data']));
            // console.log(data['Data']['user2'].email);
            // return data["Data"];
			for (let i = 0; i < users.length; i++) {
				console.log("users", users)
                const newOption = document.createElement("option");
                newOption.value = users[i];
                newOption.text = users[i];
                batchTrack.appendChild(newOption);
            }
            //return users;
        } catch (e) {
            return e;
        }
    };

	getUserList()
    // let userJSON = getUserList();

    // start test
    //const batchTrack = document.getElementById("batchSelect");

    const displayOption = async () => {
        const options = getUserList();
        options.then(function (result) {
            console.log("hi");
            console.log('result:', result);
            for (let i = 0; i < result.length; i++) {
                const newOption = document.createElement("option");
                newOption.value = result[i];
                newOption.text = result[i];
                batchTrack.appendChild(newOption);
            }
            // for (var option of result) {
            //     // console.log(option);
            //     const newOption = document.createElement("option");
            //     // newOption.value = option;
            //     newOption.text = option;
            //     batchTrack.appendChild(newOption);
            //     console.log(batchTrack);
            // }

        });

    };

    //displayOption();
    // end test

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Left',
                flexDirection: 'Column',
                alignItems: 'Left',
                height: '10vh',
                width: '50%',
                paddingLeft: '10rem'
            }}
        >
            <h1>Returning User: Sign In</h1>
            <select id="batchSelect"></select>
        </div>
    );
};

export default SignIn;