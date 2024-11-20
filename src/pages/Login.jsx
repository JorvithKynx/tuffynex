import React, {
	useState
} from 'react';

import {
	Link
} from 'react-router-dom';

import '../styles/Login.scss';

const Login = () => {
	
	const appName = import.meta.env.VITE_STR_APPNAME;
	
	const [username, setUsername] = useState(localStorage.getItem('username') || '');
	const [password, setPassword] = useState(localStorage.getItem('password') || '');
	const [remember, setRemember] = useState(localStorage.getItem('remember') === 'true');
	
	const loginHandler = (_username, _password, _remember) => {
		
		_username = username;
		_password = password;
		_remember = remember;
		
		
		console.log('Login Handler:', _username, _password, _remember);
		
	}
	
	return (
		<div className="body-wrapper">
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
										<h4>Sign in to {appName}</h4>
										
										<div className="mb-3">
											<label htmlFor="login-username" className="form-label">Kullanıcı Adı</label>
											<div className="input-group">
												<i className="fa-sharp fa-thin fa-at"></i>
												<input type="text" className="form-control" id="login-username"
													value={username}
													onChange={(e) => setUsername(e.target.value)}
												/>
											</div>
										</div>
										
										<div className="mb-3">
											<label htmlFor="login-password" className="form-label">Şifre</label>
											<div className="input-group">
												<i className="fa-sharp fa-thin fa-lock"></i>
												<input type="password" className="form-control" id="login-password" placeholder="******"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
												/>
											</div>
										</div>
										
										<div className="d-flex justify-content-between mb-3">
											
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="login-remember"
													checked={remember}
													onChange={(e) => setRemember(e.target.checked)}
												/>
												<label htmlFor="login-remember" className="form-check-label">Beni Hatırla</label>
											</div>
											
											<div className="">
												<Link to="/auth/forgot-password">Şifremi Unuttum</Link>
											</div>
										
										
										</div>
										
										<div className="d-grid mb-3">
											<button type="button" className="btn btn-theme" onClick={loginHandler}>
												<span>Continue</span>
												<i className="fa-sharp fa-thin fa-angle-double-right"></i>
											</button>
										</div>
									
									</div>
								
								</div>
							
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
