import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Asegúrate de importar los estilos
import Home from '../../pages/home/home';

const SignIn = () => {
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
    <div className="container">
      <h1>Crear cuenta</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
        <input
          type="password"
          placeholder="Confirma contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required />
        <button type="submit">Crear cuenta</button>
      </form>
      <p>Al hacer clic en el botón Registrarse, acepta la oferta pública.</p>
      <div className="social-buttons">
        <button>Google</button>
        <button>Apple</button>
        <button>Facebook</button>
      </div>
      <p>Ya tengo una cuenta <button onClick={() => navigate('/home')}>Ingresar</button></p>

      {/* Mover BrowserRouter fuera de Login si es posible */}
      {/* Si quieres que todo el enrutamiento esté dentro de App o un archivo superior */}
    </div>
  );
};

export default SignIn;