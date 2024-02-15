import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { ReactComponent as Bayroq } from 'assets/svgs/flagUz.svg';






const Header = () => {
  return (
    <div className="main-header">
      <header className="container">
        <div className="h-left">
          <Link to={'/'}>Frosh</Link>
          <Link>1 USD | 12343,48 UZS</Link>
        </div>
        <div className="h-right">
          <Bayroq />
          <select>
            <option>uz</option>
          </select>
          <select>
            <option>UZS</option>
          </select>
          <Link to={'/announcement/create'}>E’lon joylash +</Link>
          <Link to={'/register'}>Register</Link>

        </div>

      </header>
    </div>
  );
};

export default Header;
