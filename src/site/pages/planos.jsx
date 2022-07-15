import React from 'react';

function Planos() {
    return (
      <section id="planos-e-precos">
        <div className="container">

          <div className="row text-center">
            <div className="titulo">
              <h1>Planos e Preços</h1>
              <p>Comece sua avaliação gratuita. Não é necessário cartão de crédito.</p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h1>Free</h1>
                </div>
                <div className="card-body">
                  <h2>R$ 0,00</h2>  
                  <p>Até 10 clientes</p>
                  <p>Sem suporte</p>
                  <button className="btn btn-lg btn-outline-primary">Assinar Agora</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h1>Pro</h1>
                </div>
                <div className="card-body">
                  <h2>R$ 49,90</h2>  
                  <p>Até 100 clientes</p>
                  <p>Suporte por e-mail</p>
                  <button className="btn btn-lg btn-outline-primary">Assinar Agora</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h1>Premium</h1>
                </div>
                <div className="card-body">
                  <h2>R$ 99,90</h2>  
                  <p>Clientes ilimitados</p>
                  <p>Suporte online e acesso remoto</p>
                  <button className="btn btn-lg btn-outline-primary">Assinar Agora</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }

export default Planos;
