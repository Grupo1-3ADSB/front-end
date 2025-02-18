import React, { useState } from 'react'
import './Login.css';
import {FaUser, FaEye, FaEyeSlash} from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='login-container'>
      <form className='login-form' action="submit">
        <h1 className='login-title'>Acesse o sistema</h1>
        <div className='input-container'>
          <input type="email" placeholder='Digite seu email' className='login-input' />
          <FaUser className='input-icon' />
        </div>
        <div className='input-container'> 
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder='Digite sua senha' 
            className='login-input'
          />
          <span 
            onClick={() => setShowPassword(!showPassword)} 
            style={{cursor: 'pointer'}}
            className='input-icon'
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type='submit' className='login-button'>Entrar</button>

        <div className="recall-forget">
          <label className='remember-label'>
            <input type="checkbox" className='remember-checkbox' />
            Lembrar-me
          </label>
          <a href="/recuperar-senha" className='forgot-password'>Esqueceu sua senha?</a>
        </div>
        
        <p className='signup-text'>
          Não tem uma conta? <a href="/cadastro" className='signup-link'>Cadastre-se</a>
        </p>
      </form>
    </div>
  )
}

export default Login

