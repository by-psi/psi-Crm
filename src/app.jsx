import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from './app/context/auth.jsx';

/* Páginas */
import Site from './site/site.jsx';
import Login from './app/login/login.jsx';
import NewAccount from './app/login/novo.jsx';
import ResetPassword from './app/login/reset.jsx';

import Clientes from './app/menu/clientes/home.jsx';
import NovoCliente from './app/menu/clientes/novo.jsx';
import EditarCliente from './app/menu/clientes/editar.jsx';

import Fornecedores from './app/menu/fornecedores/home.jsx';
import NovoFornecedor from './app/menu/fornecedores/novo.jsx';
import EditarFornecedor from './app/menu/fornecedores/editar.jsx';

import Produtos from './app/menu/produtos/home.jsx';
import NovoProduto from './app/menu/produtos/novo.jsx';
import EditarProduto from './app/menu/produtos/editar.jsx';
import UploadImagem from './app/menu/produtos/upload.jsx';

/* Adicionar em breve:
import Compras from './app/menu/compras/home.jsx';
import Vendas from './app/menu/vendas/home.jsx';
import Estoque from './app/menu/estoque/home.jsx';
import Financeiro from './app/menu/financeiro/home.jsx';
*/
function App() {
  const {logged} = useContext(AuthContext);

  function SecureRoute({...params}) {
    if (!logged) {
      return <Redirect to="/#" />
    } else {
    return <Route {...params} />
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Site} />
        <Route exact path='/app' component={Login} />
        <Route exact path='/app/login/novo' component={NewAccount} />
        <Route exact path='/app/login/reset' component={ResetPassword} />
        {/* ---------------------------------------------------------------------------- */}
        <SecureRoute exact path='/app/menu/clientes/home' component={Clientes} />
        <SecureRoute exact path='/app/menu/clientes/novo' component={NovoCliente} />
        <SecureRoute exact path='/app/menu/clientes/editar/:id' component={EditarCliente}/>

        <SecureRoute exact path='/app/menu/fornecedores/home' component={Fornecedores} />
        <SecureRoute exact path='/app/menu/fornecedores/novo' component={NovoFornecedor} />
        <SecureRoute exact path='/app/menu/fornecedores/editar/:id' component={EditarFornecedor}/>
        
        <SecureRoute exact path='/app/menu/produtos/home' component={Produtos} />
        <SecureRoute exact path='/app/menu/produtos/novo' component={NovoProduto} />
        <SecureRoute exact path='/app/menu/produtos/editar/:id' component={EditarProduto}/>
        <SecureRoute exact path='/app/menu/produtos/upload' component={UploadImagem}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
