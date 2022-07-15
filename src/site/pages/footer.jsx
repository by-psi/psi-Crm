import React from 'react';

function Footer() {
  var ano = new Date().getFullYear();

    return (
      <section id="contato">
        <div>
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item"><a href="https://www.facebook.com/outdoorvirtual.ezequiasmartins"><i className="fa fa-facebook fa-2x"></i></a></li>
            <li className="list-inline-item"><a href="https://twitter.com/ezequiasmartins"><i className="fa fa-twitter fa-2x"></i></a></li>
            <li className="list-inline-item"><a href="https://www.instagram.com/ezequiasmartins/"><i className="fa fa-instagram fa-2x"></i></a></li>
            <li className="list-inline-item"><a href="mailto:ezequiasmartins@gmail.com"><i className="fa fa-envelope fa-2x"></i></a></li>
          </ul>
        </div>
        <p>
          <strong>PSI-SOFTWARE</strong> CNPJ 18.478.810/0001-13
          <br/><i class="fa fa-map-marker"></i> Rua dos Comanches, 870 Santa Mônica CEP 31530-250<br/>Belo Horizonte MG
          <br/><i class="fa fa-envelope"></i> <a href="mailto:#">ezequiasmartins@gmail.com</a>
          <br/><i class="fa fa-phone"></i> +55 31 98410-7540 <i class="fa fa-whatsapp"></i>
        </p>
        <p>© 1999-{ano} psi-software</p>
        </section>
      );
    }
  
  export default Footer;