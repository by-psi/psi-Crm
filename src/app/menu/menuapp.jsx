import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './menuapp.css';
import { AuthContext } from '../context/auth';

function MenuApp() {  
  const {setLogged} = useContext(AuthContext);

  function LougOut() {
    setLogged(false);
    localStorage.removeItem("logged");
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <a href="http://vps70854.cloudpublic.com.br:3000" onClick={LougOut} className="navbar-brand">
          <img src="/imagens/psi-software.png" alt="" height="32" className="d-inline-block align-text-top"/>
          <span className="logotipo">&nbsp;&nbsp;PSI-CRM</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/app/menu/clientes/home" className="nav-link" aria-current="page">Clientes</Link>
            </li>
            <li className="nav-item">
              <Link to="/app/menu/fornecedores/home" className="nav-link" aria-current="page">Fornecedores</Link>
            </li>
            <li className="nav-item">
              <Link to="/app/menu/produtos/home" className="nav-link" aria-current="page">Produtos</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" aria-current="page">Compras</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" aria-current="page">Vendas</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" aria-current="page">Financeiro</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" aria-current="page">Relatórios</Link>
            </li>
            <li className="nav-item">
              <a href="http://vps70854.cloudpublic.com.br:3000" onClick={LougOut} className="nav-link logout" aria-current="page">Sair</a>
            </li>
          </ul>
        </div>
      </div>       
    </nav>
  );
}

export default MenuApp;
