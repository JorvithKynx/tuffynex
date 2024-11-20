import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import '../styles/Register.scss';

const Register = () => {
	
	const appName = import.meta.env.VITE_STR_APPNAME;
	
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [accepted, setAccepted] = useState(false);
	
	const registerHandler = (_username, _password, _accepted) => {
		
		_username = username;
		_password = password;
		_accepted = accepted;
		
		
		console.log('Login Handler:', _username, _password, _accepted);
		
	}
	
	return (<div className="body-wrapper">
		<div className="auth-body">
			<div className="auth-content">
				<div className="auth-box">
					<div className="container">
						<div className="row">
							
							<div className="col-md-6 d-none d-sm-none d-md-block auth-col-left">
								<img src="/assets/img/auth-forms-left.png" alt="Logo" className="img-fluid"/>
							</div>
							
							<div className="col-md-6 col-sm-12 auth-col-right">
								
								<div className="auth-form">
									
									<h6>Start for Free</h6>
									<h4>Sign up to {appName}</h4>
									
									<div className="mb-3">
										<label htmlFor="register-username" className="form-label">Kullanıcı Adı</label>
										<div className="input-group">
											<i className="fa-sharp fa-thin fa-at"></i>
											<input type="text" className="form-control" id="register-username"
												value={username}
												onChange={(e) => setUsername(e.target.value)}
											/>
										</div>
									</div>
									
									<div className="mb-3">
										<label htmlFor="register-password" className="form-label">Şifre</label>
										<div className="input-group">
											<i className="fa-sharp fa-thin fa-lock"></i>
											<input type="password" className="form-control" id="register-password" placeholder="******"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>
									</div>
									
									<div className="d-flex justify-content-between mb-3">
										
										<div className="form-check">
											<input type="checkbox" className="form-check-input" id="register-accepted"
												checked={accepted}
												onChange={(e) => setAccepted(e.target.checked)}
											/>
											<label htmlFor="register-accepted" className="form-check-label">Sözleşmeyi Okudum & Onaylıyorum.</label>
										</div>
									
									</div>
									
									<div className="d-grid mb-3">
										<button type="button" className="btn btn-theme" onClick={registerHandler}>
											<span>Continue</span>
											<i className="fa-sharp fa-thin fa-angle-double-right"></i>
										</button>
									</div>
									
									<div className="mb-3">
										<p className="linkToRegister">
											<span>Zaten Üye Misiniz ? </span>
											<Link to="/auth/login">Şimdi Giriş Yapın</Link>
										</p>
									</div>
								
								</div>
							
							</div>
						
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>);
};

export default Register;
