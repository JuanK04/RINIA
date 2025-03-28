import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Usar el hook useNavigate para redirigir
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Lógica de registro (aquí puedes validarlo antes de enviar)
    
    // Redirigir al Home después del registro
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h1>Bienvenido de nuevo!</h1>
      <form className="login-form">
        <input 
          type="text" 
          placeholder="Email" 
          className="input-field" 
          required 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          className="input-field" 
          required 
        />
        <a href="#" className="forgot-password">Olvidaste tu Contraseña?</a>
        <button type="submit" className="login-button">Ingresar</button>
      </form>
      <div className="or-continue">O Ingresa con</div>
      <div className="social-buttons">
        <button className="social-button">G</button>
        <button className="social-button">A</button>
        <button className="social-button">F</button>
      </div>
      <div className="sign-up">
        Crear Cuenta <a href="#" className="signup-link">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;