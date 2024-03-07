import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../../auth/context/loginContext';
import './style.css';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsLoggedIn } = useContext(LoginContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-title">BeMaster Games</span>
      </div>
      <button
        className={`navbar-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        X
      </button>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className="navbar-link">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/perfil" className="navbar-link">
            Perfil
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};
