import React from 'react';
import {useEffect, useState} from "react";
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import logo from "../../../src/logo192.png";
import AppContext from '../../config';

const Navbar = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
	  const interval = setInterval(() => {
		setTime(new Date());
	  }, 1000);
  
	  return () => clearInterval(interval);
	}, []);

	const reset = () => {
		AppContext.isAuthenticated = false; 
	};

	if(AppContext.isAuthenticated == false) {
		return (
			<>
			<Nav>
				<Bars />
		
				<NavMenu>
				<NavLink to='/'>
					<a href="/"><img style={{ width: "30%", height: "40%" }} src={logo} alt=""/></a>
				</NavLink>
				<NavLink to='/about' activestyle={{ color:'black' }}>
					About
				</NavLink>
				<NavLink to='/groc' activestyle={{ color:'black' }}>
					Grocery List
				</NavLink>
				<NavLink to='/signup' activestyle={{ color:'black' }}>
					Sign Up
				</NavLink>
				{/* Second Nav */}
				{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
				<NavBtnLink to='signin'>Sign In</NavBtnLink>
				</NavBtn>
			</Nav>
			</>
		);
	} else {
		return (
			<>
			<Nav>
				<Bars />
		
				<NavMenu>
				<NavLink to='/'>
					<a href="/"><img style={{ width: "30%", height: "40%" }} src={logo} alt=""/></a>
				</NavLink>
				<NavLink to='/about' activestyle={{ color:'black' }}>
					About
				</NavLink>
				<NavLink to='/groc' activestyle={{ color:'black' }}>
					Grocery List
				</NavLink>
				<NavLink to='/signup' activestyle={{ color:'black' }}>
					Sign Up
				</NavLink>
				{/* Second Nav */}
				{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
				<NavBtnLink to='/signin' onClick={reset}>Sign Out</NavBtnLink>
				</NavBtn>
			</Nav>
			</>
		);
	}
};

export default Navbar;
