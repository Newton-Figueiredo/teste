
import React from 'react';

import fotoCadastro from './src/assets/img/day14-forklift_adobespark.png'


export default props =>
<div className="main-clientes">
          
<img className="fotoMain" src={fotoCadastro} alt="black-cat" />
<h1>Cadastro de Produtos</h1>
<form action>
  <input type="text" id="descricao" placeholder="Descrição" />
  <div className="cidade-estado">
  <input type="text" id="seq.prod" placeholder="Seq.Produto" />
  <input type="text" id="estado" placeholder="EAN/GTIN" />
  </div>
  <input type="text" id="categoria" placeholder="Categoria" />
  <input type="text" id="fornecedor" placeholder="Fornecedor" />
  <input type="text" id="endereco" placeholder="Imagem do Produto (URL)" />

  <div className="cep-pais">
  <input type="text" id="cep" placeholder="Preço Praticado" />
  <input type="text" id="pais" placeholder="Preço de Custo" />
  </div>
  <div className="cep-pais">
  <input type="text" id="cep" placeholder="Estoque Atual" />
  <input type="text" id="pais" placeholder="Estoque minimo" />
  </div>
  

  <button type="button" onClick = '' >Enviar</button>
</form>

</div>
