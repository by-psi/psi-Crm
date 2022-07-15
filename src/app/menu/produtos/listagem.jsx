import React from 'react';
import { Link } from 'react-router-dom';
import './listagem.css';

function Listagem(props) {

  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr className="table-secondary">
          <th scope="col">Produto</th>
          <th scope="col">Categoria</th>
          <th scope="col">Unidade</th>
          <th scope="col">Estoque Mínimo</th>
          <th scope="col">Estoque Atual</th>
          <th scope="col" className="col-action"></th>
        </tr>
      </thead>
      <tbody>
        {
          props.arrayProdutos.map(produto => 
            <tr key={produto.id}>
              <th scope="row">{produto.nome}</th>
              <td>{produto.categoria}</td>
              <td>{produto.unidade}</td>
              <td>{produto.estoque_minimo}</td>
              <td>{produto.estoque_atual}</td>
              <td>
                <Link to={'/app/menu/produtos/editar/' + produto.id}><i className="fas fa-user-edit icon-action"></i></Link>
                <Link to="#" onClick={() => props.clickDelete(produto.id)} title="EXCLUIR PRODUTO"><i className="fas fa-trash-alt icon-action red"></i></Link>
              </td>
            </tr>           
          )
        }       
      </tbody>
    </table>
  );
}

export default Listagem;