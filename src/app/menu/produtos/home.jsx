import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuApp from '../menuapp.jsx';
import Listagem from './listagem.jsx';
import './home.css';
import firebase from '../../config/firebase';
import 'firebase/firestore';
import SweetAlert from 'react-bootstrap-sweetalert';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Impressao } from './impressao';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function Home() {

    const [produtos, setProdutos] = useState([]);
    const [busca, setBusca] = useState('');
    const [excluido, setExcluido] = useState('');
    const [confirma, setConfirma] = useState(false);
    const [confirmaId, setConfirmaId] = useState('');
    const [selecionado, setSelecionado] = useState('');

    function deleteByID(id) {
      firebase.firestore().collection('produtos').doc(id).delete().then(async result => {
      setExcluido(id);
      setConfirma(false);
      })
    }

    function confirmaExclusao(id) {
      let produto = produtos.find(item => item.id === id);
      setSelecionado(produto.nome);
      setConfirmaId(id);
      setConfirma(true);
    }

    useEffect(() => {
      let listagem = [];
      firebase.firestore().collection('produtos').get().then(async result => {
        result.docs.forEach(doc => {
          if ((doc.data().nome.indexOf(busca) >= 0) || (doc.data().cod_referencia.indexOf(busca) >= 0)) {
            listagem.push({
              id: doc.id,
              nome: doc.data().nome,
              categoria: doc.data().categoria,
              cod_referencia: doc.data().cod_referencia,
              cod_fornecedor: doc.data().cod_fornecedor,
              unidade: doc.data().unidade,
              valor_unitario: doc.data().valor_unitario,
              estoque_minimo: doc.data().estoque_minimo,
              estoque_atual: doc.data().estoque_atual
            });
          }
        })

        setProdutos(listagem);

      })
    }, [busca, excluido]);

    const VisualizarPDF = async () => {
      console.log('report', produtos);
      const classeImpressao = new Impressao(produtos);
      const documento = await classeImpressao.PreparaDocumento();
      pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
    }

    return (
      <div>
        <MenuApp/>
        <div className="container-fluid titulo">
          <h1>Cadastro de Produtos</h1>

          <div className="row">

          <div className="col-6">
              <div className="mt-2">
                <Link to="/app/menu/produtos/novo" className="btn btn-primary" type="button"><i className="fas fa-address-book"></i> NOVO</Link>
                <button onClick={VisualizarPDF} className="btn btn-warning"><i class="fas fa-file-pdf"></i> PDF</button>
              </div>
            </div>
            <div className="col-6">
              <div className="input-group mt-2">
                <input onChange={e => setBusca(e.target.value)} type="text" className="form-control" placeholder="Produto" aria-describedby="bt_pesquisar"/>
              </div>
            </div>
          </div>

          <Listagem arrayProdutos={produtos} clickDelete={confirmaExclusao} />

          {
            confirma ? <SweetAlert
              warning
              showCancel
              showCloseButtom
              confirmBtnText="Sim"
              confirmBtnBsStyle="primary"
              cancelBtnText="Não"
              cancelBtnBsStyle="danger"
              title="Exclusão"
              onConfirm={() => deleteByID(confirmaId)}
              onCancel={() => setConfirma(false)}
              reverseButtons={true}
              >
              Deseja excluir o produto <strong>{selecionado}</strong>?
            </SweetAlert> : null
          }

        </div>
      </div>
    );
  }

export default Home;