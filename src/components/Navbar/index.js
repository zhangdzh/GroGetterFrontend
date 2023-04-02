import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import logo from "../../../src/logo192.png";

const Navbar = () => {
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
};

export default Navbar;
