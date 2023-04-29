import React, {useState} from 'react';
import background from '../imgs/yellow_background.jpg'
import AppContext from '../config';
import { useNavigate } from 'react-router-dom';

const AddGroc = () => {
	console.log("add " + AppContext.isAuthenticated);
	console.log("add " + AppContext.username);
    const [Sign, setSign] = useState('<');
    const navigate = useNavigate();
    
    function handleClick () {
		setSign('+')
	  }

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
            <button style={{fontSize:"1.5vw", paddingLeft: '15rem', height:"5vh", width:"5vw", backgroundColor: "#fffccf", borderRadius: "10px", borderStyle:"None"}} Click={handleClick} onClick={()=> navigate('/groc')}>{Sign}Back</button>
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
                        <input type="text" placeholder="Item Name"></input><br></br>
                    </div>
                    <div style={{paddingBottom: "0.5rem"}}>
                        <input type="text" placeholder="Type"></input><br></br>
                    </div>
                    <div style={{paddingBottom: "0.5rem"}}>
                        <input type="text" placeholder="Quantity"></input><br></br>
                    </div>
                    <div style={{paddingBottom: "0.5rem"}}>
                        <input type="text" placeholder="Expiration Date"></input><br></br>
                    </div>
                    <button type = 'submit' style={{height:"2.5vh"}}>Submit</button>
            </form>
			</div>
		</div>
	);
};

export default AddGroc;