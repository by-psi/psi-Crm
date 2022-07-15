import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MenuApp from '../menuapp';
import './novo.css';
import firebase from '../../config/firebase';
import 'firebase/firestore';
// import Swal from 'sweetalert2';

function Novo() {

  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [cod_referencia, setCodReferencia] = useState('');
  const [cod_fornecedor, setCodFornecedor] = useState('');
  const [unidade, setUnidade] = useState('');
  const [valor_custo, setValorCusto] = useState('');
  const [valor_unitario, setValorUnitario] = useState('');
  const [estoque_minimo, setEstoqueMinimo] = useState('');
  const [estoque_atual, setEstoqueAtual] = useState('');
  const [imagem, setImagem] = useState('');

  const [file, setFile] = useState(null);

  const [msg, setMsg] = useState('');
  const [success, setSuccess] = useState('N');
  const db = firebase.firestore();

  function ChangeImg(e) {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }

  function UploadImg() {
    // Create the file metadata
    var metadata = {
      contentType: 'image/jpeg'
    };
    // Upload file and metadata to the object 'images/mountains.jpg'
    var storage = firebase.storage();
    var uploadTask = storage.ref(`images/${file.name}`).put(file, metadata);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
            // ...
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
          setImagem(downloadURL);
        });
      }
    );
  }

  function Cadastrar() {
    if (nome.length === 0) {
      setMsg('Favor preencher o campo Nome do Produto.');
    } else if (categoria.length === 0) {
      setMsg('Favor preencher o campo Categoria');
    } else {
        db.collection('produtos').add({
          nome: nome,
          categoria: categoria,
          cod_referencia: cod_referencia,
          cod_fornecedor: cod_fornecedor,
          unidade: unidade,
          valor_custo: valor_custo,
          valor_unitario: valor_unitario,
          estoque_minimo: estoque_minimo,
          estoque_atual: estoque_atual,
          imagem: imagem
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
          <h1>NOVO PRODUTO</h1>
          <form> 

            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome do Produto</label>
              <input onChange={e => setNome(e.target.value)} type="text" className="form-control" id="nome" />
            </div>
          
            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">Categoria</label>
              <input onChange={e => setCategoria(e.target.value)} type="categoria" className="form-control" id="categoria" />
            </div>
                    
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="telefone" className="form-label">Código Fornecedor</label>
                <input onChange={e => setCodFornecedor(e.target.value)} type="text" className="form-control" id="cod_fornecedor" />
              </div>
              <div className="col-sm-6">
                <label htmlFor="cpf" className="form-label">Código Referência</label>
                <input onChange={e => setCodReferencia(e.target.value)} type="text" className="form-control" id="cod_referencia" />
              </div>
            </div>
                  
            <div className="row">     
              <div className="col-sm-4">
                <label htmlFor="unidade" className="form-label">Unidade</label>
                <input onChange={e => setUnidade(e.target.value)} type="text" className="form-control" id="unidade" />
              </div>
              <div className="col-sm-4">
                <label htmlFor="cidade" className="form-label">Valor Custo</label>
                <input onChange={e => setValorCusto(e.target.value)} type="text" className="form-control" id="valor_custo" />
              </div>
              <div className="col-sm-4">
                <label htmlFor="UF" className="form-label">Valor Unitário</label>
                <input onChange={e => setValorUnitario(e.target.value)} type="text" className="form-control" id="valor_unitario" />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="estoque_minimo" className="form-label">Estoque Mínimo</label>
                <input onChange={e => setEstoqueMinimo(e.target.value)} type="text" className="form-control" id="estoque_minino" />
              </div>
              <div className="col-sm-6">
                <label htmlFor="estoque_atual" className="form-label">Estoque Atual</label>
                <input onChange={e => setEstoqueAtual(e.target.value)} type="text" className="form-control" id="estoque_atual" />
              </div>
            </div>

            {/* <div className="mb-3">
              <label htmlFor="imagem" className="form-label">Arquivo de imagem</label>
              <input onChange={e => setImagem(e.target.value)} type="text" className="form-control" id="imagem" />
            </div> */}

            <p></p>
            
            <div className="row">
              <div className="col-sm-6">
                <p>Selecione o arquivo de imagem para enviar, e clique em Upload</p>     
                {/* <input type="file" onChange={ChangeImg} />  */}
                <input type="file" onChange={ChangeImg}/> 
              </div>
              <div className='col-sm-6'>
                <img
                  src={imagem || "https://via.placeholder.com/100"}
                  alt="Uploaded Image"
                  width="100"
                />
              </div>
            </div>

            <div className="mb-3">
              <Link to="/app/menu/produtos/home" className="btn btn-outline-primary btn-action">CANCELAR</Link>
              <button onClick={Cadastrar} type="button" className="btn btn-primary btn-action">SALVAR</button>
              <button onClick={UploadImg} type="button" className="btn btn-primary btn-action"><i className="fas fa-address-book"></i> UPLOAD IMAGEM</button>
            </div>

            {msg.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{msg}</div> : null}
            {success === 'S' ? <Redirect to='/app/menu/produtos/home'/> : null}

          </form>        
        </div>

      </div>
    </div>
  );
}

export default Novo;
