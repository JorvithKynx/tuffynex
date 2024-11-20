import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
	return (
		<Router> <Routes> <Route path="/" element={
			<Home/>}/> <Route path="/auth/login" element={
			<Login/>}/> <Route path="/auth/register" element={
			<Register/>}/> <Route path="/auth/forgot-password" element={
			<ForgotPassword/>}/> </Routes> </Router>
	);
};

export default App;