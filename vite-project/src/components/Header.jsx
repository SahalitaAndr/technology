import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-[#550b14] py-3 px-8 shadow-md">
      <nav>
        <ul className="flex gap-10 justify-center">
          <li>
            <Link
              to="/"
              className="text-[#f8fbf7] no-underline font-medium text-lg tracking-wide px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#7c6961] hover:text-[#f8fbf7] hover:-translate-y-0.5"
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-[#f8fbf7] no-underline font-medium text-lg tracking-wide px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#7c6961] hover:text-[#f8fbf7] hover:-translate-y-0.5"
            >
              Обо мне
            </Link>
          </li>
          <li>
            <Link
              to="/auth"
              className="text-[#f8fbf7] no-underline font-medium text-lg tracking-wide px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#7c6961] hover:text-[#f8fbf7] hover:-translate-y-0.5"
            >
              Вход
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;