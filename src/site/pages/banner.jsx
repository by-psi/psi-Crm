import React from 'react';

function Banner() {
    return (
      <section id="banner">       
        <div className="container">
          <div className="row">

            <div className="col-lg-6">
              <img src="imagens/screenshot-crm.jpg" width="800px" alt="PSI-CRM"/>
            </div>
            <div className="col-lg-6">
              <div className="bloco">
                <h1>Simples de configurar<br/> e fácil de usar.</h1>
                <h4>Gerencie seus Clientes, Fornecedores, Produtos, Compras, Vendas, Controle de Estoque, Financeiro, etc. Tudo isso em um único lugar!</h4>
                <a href="/app/login/novo" type="button" className="btn btn-dark btn-lg btn-app">Criar uma conta</a>
                <a href="/app" type="button" className="btn btn-outline-light btn-lg btn-app">Fazer Login</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }

export default Banner;
