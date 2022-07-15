import React from 'react';
import { Link } from 'react-router-dom';
import './listagem.css';

function Listagem(props) {

  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr className="table-secondary">
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
          <th scope="col">E-mail</th>
          <th scope="col" className="col-action"></th>
        </tr>
      </thead>
      <tbody>
        {
          props.arrayFornecedores.map(fornecedor => 
            <tr key={fornecedor.id}>
              <th scope="row">{fornecedor.nome}</th>
              <td>{fornecedor.telefone}</td>
              <td>{fornecedor.email}</td>
              <td>
                <Link to={'/app/menu/fornecedores/editar/' + fornecedor.id}><i className="fas fa-user-edit icon-action"></i></Link>
                <Link to="#" onClick={() => props.clickDelete(fornecedor.id)} title="EXCLUIR FORNECEDOR"><i className="fas fa-trash-alt icon-action red"></i></Link>
              </td>
            </tr>           
          )
        }       
      </tbody>
    </table>
  );
}

export default Listagem;