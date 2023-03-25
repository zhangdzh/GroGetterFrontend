import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Groc from './pages/groc';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/about' celement={<About />} />
		<Route path='/groc' element={<Groc />} />
		<Route path='/signup' element={<SignUp />} />
	</Routes>
	</Router>
);
}

export default App;
