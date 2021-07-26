
import React from 'react';
import {Link} from 'react-router-dom';

import './src/style/main.css';
import logoGato from './src/assets/img/black-cat.png'

export default props =>
    <div className="main-div">
      <header>
        <nav>
          <a className="logo" href="/"> 
            <img className="logo-img" src={logoGato} alt="black-cat" />  
            <p>Cat's store</p></a>
          <ul className="nav-list">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Clientes</Link></li>
            <li><Link to="/clientes">Cadastro Clientes</Link></li>
            <li><Link to="/cadastro">Produtos</Link></li>
            <li><Link to="/produtos">Cadastro Produtos</Link></li>
          </ul>
        </nav>
      </header>

      <div className="wrapper">
        <aside className="asideL">
        </aside>
        <div className='mainContent'>
        {props.children}        
        </div>
        <aside className="asideR">
        </aside>
      </div>
    </div>
