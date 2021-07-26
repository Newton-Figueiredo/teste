
import React from 'react';

import fotoCadastro from './src/assets/img/day13-it-girl_adobespark.png';




export default (props) =>{

const receberCadastro = () => {
    var recebeNome = document.getElementById('nome');
    var recebeEmail = document.getElementById('e-mail');
    var recebeCPF = document.getElementById('cpf');
    var recebeRua = document.getElementById('rua');
    var recebeCidade = document.getElementById('cidade');
    var recebeEstado = document.getElementById('estado');
    var recebeCEP = document.getElementById('cep');
    var recebePais = document.getElementById('pais');
    var recebeTelefone = document.getElementById('telefone');
  

    var dadosStorage = JSON.parse(localStorage.getItem('listaDeClientes'));

    if (dadosStorage == null){
        localStorage.setItem('listaDeClientes','[]');
        dadosStorage = [];
    }

    var receber = {
        'Cliente'    : recebeNome.value,
        'Email'      : recebeEmail.value,
        'CPF'        : recebeCPF.value,
        'Logradouro' : recebeRua.value,
        'Cidade'     : recebeCidade.value,
        'Estado'     : recebeEstado.value,
        'CEP'        : recebeCEP.value,
        'País'       : recebePais.value,
        'Telefone'   : recebeTelefone.value,
    };

    dadosStorage.push(receber)
    localStorage.setItem('listaDeClientes',JSON.stringify(dadosStorage));

    alert('Cadastro feito com Sucesso !')

    recebeNome.value      ='';
    recebeEmail.value     ='';
    recebeCPF.value       ='';
    recebeRua.value       ='';
    recebeCidade.value    ='';
    recebeEstado.value    ='';
    recebeCEP.value       ='';
    recebePais.value      ='';
    recebeTelefone.value  ='';
};


    return(
    <div className="main-clientes">
          
        <img className="fotoMain" src={fotoCadastro} alt="black-cat" />
        <h1>Cadastro de Clientes</h1>
        <form action>
          <input type="text" id="nome" placeholder="Digite seu nome" />
          <input type="number" id="cpf" placeholder="Digite seu cpf" />
          <input type="email" id="e-mail" placeholder="Digite seu e-mail" />
          <input type="email" id="rua" placeholder="Rua" />
          <div className="cidade-estado">
          <input type="text" id="cidade" placeholder="Cidade" />
          <input type="text" id="estado" placeholder="Estado" />
          </div>
          <div className="cep-pais">
          <input type="text" id="cep" placeholder="Cep" />
          <input type="text" id="pais" placeholder="País" />
          </div>
          <input type="number" id="telefone" placeholder="Número de Telefone" />
          

          <button type="button" onClick = {receberCadastro} >Enviar</button>
        </form>
      
    </div>
    )};
