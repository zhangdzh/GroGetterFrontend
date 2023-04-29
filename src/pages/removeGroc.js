import React, {useState} from 'react';
import background from '../imgs/yellow_background.jpg'
import AppContext from '../config';
import { useNavigate } from 'react-router-dom';

const backendURL = 'https://zhangdzh.pythonanywhere.com';

const RemoveGroc = () => {
    const [Sign, setSign] = useState('<');
    const navigate = useNavigate();
    
    const [input, setInput] = useState({
		item: '',
	});

    function handleClick () {
		setSign('<');
	}

    const onInputChange = e => {
    	const { name, value } = e.target;
		setInput(prev => ({
			...prev,
			[name]: value
		}));
	}

    // call the users add endpoint using fetch
	const removeGroc = async (e) => {
		e.preventDefault();
		try {
			// TODO: make text into field variables
			let res = await fetch(`${backendURL}/groc/remove`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				// body of the POST request
				body: JSON.stringify({
                    item: input.item,
                    username: AppContext.username
				})
			});

            // not sure of purpose of this
			let resJson = await res.json();

			// reset input form if ok
			if (res.status === 200) {
				input.item = "";
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div
		style={{
			backgroundImage: `url(${background})`,
			backgroundSize: 'cover', 
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			height: '50rem',
			backgroundAttachment: 'fixed'
		}}
		>
            <button style={{fontSize:"2vw", paddingLeft: '15rem', paddingTop: "1rem", height:"5vh", width:"5vw", backgroundColor: "#fffccf", borderRadius: "10px", borderStyle:"None"}} Click={handleClick} onClick={()=> navigate('/groc')}>{Sign}Back</button>
			<div
			style={{
				display: 'flex',
				justifyContent: 'Left',
				flexDirection: 'Column',
				alignItems: 'Left',
				height: '30vh',
				width: '65%',
				paddingLeft: '15rem',
			}}
			>
			<h1>Remove your grocery items here</h1>
            <form>
                    <div style={{paddingBottom: "0.5rem"}}>
                        <input type="text" placeholder="Item Name" name="item" value={input.item} onChange={onInputChange}></input><br></br>
                    </div>
                    
                    <div onClick={removeGroc}>
                        <button type = 'submit' style={{height:"2.5vh"}} onClick={()=> navigate('/groc')}>Submit</button>
                    </div>
            </form>
			</div>
		</div>
	);
};

export default RemoveGroc;