import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MenuApp from '../menuapp';
import './novo.css';
import firebase from '../../config/firebase';

function Novo() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [UF, setUf] = useState('');
  const [CEP, setCep] = useState('');

  const [msg, setMsg] = useState('');
  const [success, setSuccess] = useState('N');
  const db = firebase.firestore();

  function Cadastrar() {
    if (nome.length === 0) {
      setMsg('Por favor informe o Nome do Fornecedor.');
    } else
    if (email.length === 0) {
      setMsg('Por favor informe o E-mail.');
    } else {
      db.collection('fornecedores').add({
        nome: nome,
        email: email,
        telefone: telefone,
        cpf: cpf,
        cnpj: cnpj,
        endereco: endereco,
        cidade: cidade,
        UF: UF,
        CEP: CEP
      }).then(() => {
        setMsg('');
        setSuccess('S');
      }).catch((erro) => {
        setMsg(erro);
        setSuccess("N");
      })  
    }
  }

  return (
    <div>
      <MenuApp/>
      <div className="container-fluid titulo">

<div className="offset-lg-3 col-lg-6">
  <h1>Novo Fornecedor</h1>
  <form>

    <div className="mb-3">
      <label htmlFor="nome" className="form-label">Nome do Fornecedor</label>
      <input onChange={e => setNome(e.target.value)} type="text" className="form-control" id="nome" />
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">E-mail</label>
      <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" />
    </div>

    <div className="row">
      <div className="col">
        <label htmlFor="telefone" className="form-label">Telefone</label>
        <input onChange={e => setTelefone(e.target.value)} type="text" className="form-control" id="telefone" />
      </div>
      <div className="col">
        <label htmlFor="cpf" className="form-label">CPF</label>
        <input onChange={e => setCpf(e.target.value)} type="text" className="form-control" id="cpf" />
      </div>
      <div className="col">
        <label htmlFor="cnpj" className="form-label">CNPJ</label>
        <input onChange={e => setCnpj(e.target.value)} type="text" className="form-control" id="cnpj" />
      </div>
    </div>

    <div className="mb-3">
      <label htmlFor="endereco" className="form-label">Endereço Completo</label>
      <input onChange={e => setEndereco(e.target.value)} type="text" className="form-control" id="endereco" />
    </div>
    
    <div className="row">     
      <div className="col-sm-5">
        <label htmlFor="cidade" className="form-label">Cidade</label>
        <input onChange={e => setCidade(e.target.value)} value={cidade} type="text" className="form-control" id="cidade" />
      </div>

      <div className="col-sm-4">
        <label htmlFor="UF" className="form-label">UF</label>
        <select class="form-control" id="UF">
          <option value="AC">ACRE</option>
          <option value="AL">ALAGOAS</option>
          <option value="AP">AMAPA</option>
          <option value="AM">AMAZONAS</option>
          <option value="BA">BAHIA</option>
          <option value="CE">CEARA</option>
          <option value="DF">DISTRITO FEDERAL</option>
          <option value="ES">ESP.SANTO</option>
          <option value="GO">GOIAS</option>
          <option value="MA">MARANHAO</option>
          <option value="MT">MATO GROSSO</option>
          <option value="MS">MATO GROSSO SUL</option>
          <option value="MG" selected="selected">MINAS GERAIS</option>
          <option value="PA">PARA</option>
          <option value="PB">PARAIBA</option>
          <option value="PR">PARANA</option>
          <option value="PE">PERNAMBUCO</option>
          <option value="PI">PIAUI</option>
          <option value="RJ">RIO DE JANEIRO</option>
          <option value="RN">RIO GRANDE DO NORTE</option>
          <option value="RS">RIO GRANDE DO SUL</option>
          <option value="RO">RONDONIA</option>
          <option value="RR">RORAIMA</option>
          <option value="SC">SANTA CATARINA</option>
          <option value="SP">SAO PAULO</option>
          <option value="SE">SERGIPE</option>
          <option value="TO">TOCANTINS</option>
        </select>
        <input onChange={e => setUf(e.target.value)} value={UF} type="hidden" id="UF" />
      </div>

      <div className="col-sm-3">
        <label htmlFor="CEP" className="form-label">CEP</label>
        <input onChange={e => setCep(e.target.value)} value={CEP} type="text" className="form-control" id="CEP" />
      </div>
    </div>

    <div className="mb-3">
      <Link to="/app/menu/fornecedores/home" className="btn btn-outline-primary btn-action">CANCELAR</Link>
      <button onClick={Cadastrar} type="button" className="btn btn-primary btn-action">SALVAR</button>
    </div>

    {msg.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{msg}</div> : null}
    {success === 'S' ? <Redirect to='/app/menu/fornecedores/home'/> : null}

  </form>        
</div>

      </div>
    </div>
  );
}

export default Novo;
