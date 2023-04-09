import React, { useEffect, useState } from 'react';
// import { Dropdown, Option } from "../components/Dropdown/dropdown";

const SignIn = () => {

    // python anywhere backend link
    const backendURL = 'zhangdzh.pythonanywhere.com';
    const [users, setUsers] = useState([]);

    useEffect( () => {
        async function fetchData() {
            try {
                const batchTrack = document.getElementById("batchSelect");
                const fetchResponse = await fetch(`https://${backendURL}/users/dict`);
                const data = await fetchResponse.json();
                const users = Object.keys(data['Data'])
                setUsers(users); 

                for (let i = 0; i < users.length; i++) {
                    const newOption = document.createElement("option");
                    newOption.value = users[i];
                    newOption.text = users[i];
                    batchTrack.appendChild(newOption);
                }

            } catch (err) {
                console.log(err); 
            }
        }
        fetchData();
    }, []);


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
            <select id="batchSelect"> {users} </select>
        </div>
    );
};

export default SignIn;