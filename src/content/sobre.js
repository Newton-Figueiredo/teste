
import React from 'react';
import { useEffect, useState } from 'react';


export default (props) => {

    const [repositorios ,setRepositorios] = useState([]);

    useEffect( () => {
        let clientesLocalStorage = localStorage.getItem('listaDeClientes');
        clientesLocalStorage = JSON.parse(clientesLocalStorage);
        setRepositorios(clientesLocalStorage);
        } , []);
    
    
    
        
    return(
    <div className="main-sobre">
        <h1> Clientes Cadastrados: </h1>
      
          
        {repositorios.map(value => {
        return(
            
            <div className="cliente-h">
                
                <strong>{value.Cliente    }</strong>
                <p>E-mail:{value.Email      }</p>
                <p>CPF:{value.CPF        }</p>
                <p>Logradouro:{value.Logradouro }</p>

                <div className="cidade-estado-h">
                    <p>Cidade:{value.Cidade     }</p>
                    <p>Estado:{value.Estado     }</p>
                </div>

                <div className="cep-pais-h">
                    <p>CEP:{value.CEP        }</p>
                    <p>País:{value.País       }</p>
                </div>

                <p>Telefone:{value.Telefone   }</p>
            </div> 
        )}
        )}

        
      
    </div>
    )};
    
