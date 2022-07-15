import React from 'react';

function Destaques() {
    return (
      <section id="vantagens">       
        <div className="container">
          <div className="row">
          	<center>
          		<h1>Aplicação Web (100% online)</h1>
          		<h3>React + Bootstrap + Firebase</h3>
           	</center>
          
            <div className="col-lg-4 box">
              <i className="icon fas fa-heart fa-3x red"></i>
              <h3>Fácil de usar</h3>
              <p>O sistema possui uma interface muito simples, intuitiva e fácil de usar.</p>
            </div>
            <div className="col-lg-4 box">
            <i className="icon fas fa-globe-americas fa-3x"></i>
              <h3>Em qualquer lugar</h3>
              <p>Gerencie seus produtos e/ou serviços de forma eficiente, onde quer que você esteja.</p>
            </div>
            <div className="col-lg-4 box">
              <i className="icon fas fa-columns fa-3x"></i>
              <h3>Organização é tudo</h3>
              <p>Tenha seus todos seus cadastros e controles sempre bem organizados e atualizados.</p>
            </div>

          </div>
        </div>
      </section>
    );
  }

export default Destaques;
