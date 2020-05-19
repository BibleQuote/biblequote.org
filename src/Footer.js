import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="pull-left">
          <ul>
            <li>
              <a href='/'>Главная</a>
            </li>
            <li>
              <a href='/#features'>Возможности</a>
            </li>
            <li>
              <a href='/#download'>Загрузка</a>
            </li>
            <li>
              <NavLink to='/repository'>Репозиторий</NavLink>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          &copy; 2017-{new Date().getFullYear()} <a href="http://www.biblequote.org">BibleQuote.org</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
