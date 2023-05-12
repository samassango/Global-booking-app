import React from 'react';
import './style.css';
const LoginScreen: React.FC = () => {
  return (
    <div className="login-screen">
      <div className="login-form">
        <h2>Login</h2>
        <form className="input-form">
          <input type="text" className="input" placeholder="Username" />
          <input type="password" className="input"  placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="links">
        <a href="#">Register</a>
        <a href="#">Forgot Password</a>
      </div>
    </div>
  );
};

export default LoginScreen;
