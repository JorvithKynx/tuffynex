// src/pages/Register.jsx
import React from 'react';

const Register = () => {
	return (
		<div>
			<h1>Kayıt Sayfası</h1>
			<form>
				<label>Ad:</label>
				<input type="text" placeholder="Adınız" />
				<br />
				<label>Email:</label>
				<input type="email" placeholder="Email" />
				<br />
				<label>Şifre:</label>
				<input type="password" placeholder="Şifre" />
				<br />
				<button type="submit">Kayıt Ol</button>
			</form>
		</div>
	);
};

export default Register;
