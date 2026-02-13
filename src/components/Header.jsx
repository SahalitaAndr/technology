import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">Обо мне</Link></li>
          <li><Link to="/auth">Вход</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;