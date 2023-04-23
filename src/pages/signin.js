import React, { useEffect, useState } from 'react';
import background from '../imgs/yellow_background.jpg'
// import { Dropdown, Option } from "../components/Dropdown/dropdown";

const SignIn = () => {

    // python anywhere backend link
    const backendURL = 'zhangdzh.pythonanywhere.com';
    const [users, setUsers] = useState([]);

    useEffect( () => {
        async function fetchData() {
            try {
                const batchTrack = document.getElementById("batchSelect");
                const fetchResponse = await fetch(`https://${backendURL}/users/list`);
                const users = await fetchResponse.json();
                // const users = Object.keys(data['Data'])
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
                <div className="username">
                    <label>Username     </label>
                    <select id="batchSelect" style={{height:"3.5vh", width:"20vh"}}> {users} </select>
                </div>
                <form>
                    <div className="password" style={{paddingTop:"0.5rem", paddingBottom:"0.5rem"}}>
                        <label>Password     </label>
                        <input placeholder='Password' type="password" name="pass" style={{height:"2.5vh", width:"20vh"}} required />
                    </div>
                    <div className="button">
                        <input type="submit" style={{height:"3.5vh"}}/>
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