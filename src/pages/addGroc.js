import React, {useState} from 'react';
import background from '../imgs/yellow_background.jpg'
import AppContext from '../config';
import { useNavigate } from 'react-router-dom';

const backendURL = 'https://zhangdzh.pythonanywhere.com';

const AddGroc = () => {
	console.log("add " + AppContext.isAuthenticated);
	console.log("add " + AppContext.username);
    const [Sign, setSign] = useState('<');
    const navigate = useNavigate();
    
    const [input, setInput] = useState({
		item: '',
		grocery_type: '',
		quantity: '',
		expiration_date: ''
	});

    function handleClick () {
		setSign('<')
	  }

    const onInputChange = e => {
    	const { name, value } = e.target;
		setInput(prev => ({
			...prev,
			[name]: value
		}));
	}

    // call the users add endpoint using fetch
	const addGroc = async (e) => {
		e.preventDefault();
		try {
			// TODO: make text into field variables
			let res = await fetch(`${backendURL}/groc/add`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				// body of the POST request
				body: JSON.stringify({
                    username: AppContext.username,
                    item: input.item,
					grocery_type: input.grocery_type,
                    quantity: input.quantity,
					expiration_date: input.expiration_date
				})
			});

            // not sure of purpose of this
			let resJson = await res.json();
            console.log("Inside AddGroc:", resJson);

			// reset input form if ok
			if (res.status === 200) {
				input.item = "";
				input.grocery_type = "";
				input.quantity = "";
				input.expiration_date = ""; 
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
			<h1>Add your grocery items here</h1>
            <form>
                    <div style={{paddingBottom: "0.5rem"}}>
                        <input type="text" placeholder="Item Name" name="item" value={input.item} onChange={onInputChange}></input><br></br>
                    </div>
                    {/* <div style={{paddingBottom: "0.5rem"}}>
                        <input type="text" placeholder="Type" name="grocery_type" value={input.grocery_type} onChange={onInputChange}></input><br></br>
                    </div> */}
                    <div style={{paddingBottom: "0.5rem"}}>
                        <select id="types" name="grocery_type" value={input.grocery_type} onChange={onInputChange}>
                            <option value="Baked Goods">Baked Goods</option>
                            <option value="Carbs">Carbs</option>
                            <option value="Fruit">Fruit</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Drinks">Drinks</option>
                            <option value="Meat">Meat</option>
                            <option value="Misc">Misc</option>
                        </select><br></br>
                    </div>
                    <div style={{paddingBottom: "0.5rem"}}>
                        <input type="text" placeholder="Quantity" name="quantity" value={input.quantity} onChange={onInputChange}></input><br></br>
                    </div>
                    <div style={{paddingBottom: "0.5rem"}}>
                        <input type="date" placeholder="Expiration Date" name="expiration_date" value={input.expiration_date} onChange={onInputChange}></input><br></br>
                    </div>
                    <div onClick={addGroc}>
                        <button type = 'submit' style={{height:"2.5vh"}} onClick={()=> navigate('/groc')}>Submit</button>
                    </div>
            </form>
			</div>
		</div>
	);
};

export default AddGroc;