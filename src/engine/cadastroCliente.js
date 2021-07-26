function receberCadastro() {
    var recebeNome = document.getElementById('nome');
    var recebeEmail = document.getElementById('e-mail');
    var recebeCPF = document.getElementById('nome');
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
        'Telefone'   : recebeTelefone.value
    };

    dadosStorage.push(receber)
    localStorage.setItem('listaDeEmails',JSON.stringify(dadosStorage));

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
}

