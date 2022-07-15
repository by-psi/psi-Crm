import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MenuApp from '../menuapp';
import './editar.css';
import firebase from '../../config/firebase';
import 'firebase/firestore';

function Editar(props) {

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

  useEffect(() => {
    firebase.firestore().collection('clientes').doc(props.match.params.id).get().then(result => {
      setNome(result.data().nome);
      setEmail(result.data().email);
      setTelefone(result.data().telefone);
      setCpf(result.data().cpf);
      setCnpj(result.data().cnpj);
      setEndereco(result.data().endereco);
      setCidade(result.data().cidade);
      setUf(result.data().UF);
      setCep(result.data().CEP)
    })
  }, [props.match.params.id])

  function AlterarDados() {

    if (nome.length === 0) {
      setMsg('Favor preencher o campo Nome do Cliente.');
    } else if (email.length === 0) {
      setMsg('Favor preencher o campo E-mail.');
    } else {
        db.collection('clientes').doc(props.match.params.id).update({
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
        }).catch((erro) =>{
          setMsg(erro);
          setSuccess('N');
        })
      }
    }

  return (
    <div>
      <MenuApp/>
      <div className="container-fluid titulo">

<div className="offset-lg-3 col-lg-6">
  <h1>EDITAR CLIENTE</h1> 
  <form>         
      
    <div className="mb-3">
      <label htmlFor="nome" className="form-label">Nome do Cliente</label>
      <input onChange={e => setNome(e.target.value)} value={nome} type="text" className="form-control" id="nome" />
    </div>
        
    <div className="mb-3">
      <label htmlFor="email" className="form-label">E-mail</label>
      <input onChange={e => setEmail(e.target.value)} value={email} type="email" className="form-control" id="email" />
    </div>
            
    <div className="row">
      <div className="col">
        <label htmlFor="telefone" className="form-label">Telefone</label>
        <input onChange={e => setTelefone(e.target.value)} value={telefone} type="text" className="form-control" id="telefone" />
      </div>
      <div className="col">
        <label htmlFor="cpf" className="form-label">CPF</label>
        <input onChange={e => setCpf(e.target.value)} value={cpf} type="text" className="form-control" id="cpf" />
      </div>
      <div className="col">
        <label htmlFor="cnpj" className="form-label">CNPJ</label>
        <input onChange={e => setCnpj(e.target.value)} value={cnpj} type="text" className="form-control" id="cnpj" />
      </div>
    </div>
 
    <div className="mb-3">
      <label htmlFor="endereco" className="form-label">Endereço Completo</label>
      <input onChange={e => setEndereco(e.target.value)} value={endereco} type="text" className="form-control" id="endereco" />
    </div>
            
    <div className="row">     
      <div className="col-sm-5">
        <label htmlFor="cidade" className="form-label">Cidade</label>
        <input onChange={e => setCidade(e.target.value)} value={cidade} type="text" className="form-control" id="cidade" />
      </div>
      <div className="col-sm-4">
        <label htmlFor="UF" className="form-label">UF</label>
        <input onChange={e => setUf(e.target.value)} value={UF} type="text" className="form-control" id="UF" />
      </div>
      <div className="col-sm-3">
        <label htmlFor="CEP" className="form-label">CEP</label>
        <input onChange={e => setCep(e.target.value)} value={CEP} type="text" className="form-control" id="CEP" />
      </div>
    </div>

    <div className="mb-3">
      <Link to="/app/menu/clientes/home" className="btn btn-outline-primary btn-action">CANCELAR</Link>
      <button onClick={AlterarDados} type="button" className="btn btn-primary btn-action">SALVAR</button>
    </div>

    {msg.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{msg}</div> : null}
    {success === 'S' ? <Redirect to='/app/menu/clientes/home'/> : null}

  </form>        
</div>

      </div>
    </div>
  );
}

export default Editar;