import React from 'react';

import {Switch, Route} from 'react-router-dom';
import './src/style/main.css';

import App from './src/app.js';

import Inicio from './content/inicio.js';
import Sobre from './content/sobre.js';
import Clientes from './content/clientes';
import Produtos from './content/produtos';
import Cadastro from './content/cadastro';



export const Routes = () =>

    <Switch> 
        <App>
            <Route  path="/" component={Inicio} exact />
            <Route  path="/sobre" component={Sobre} exact />
            <Route  path="/clientes" component={Clientes} exact /> 
            <Route  path="/produtos" component={Produtos} exact /> 
            <Route  path="/cadastro" component={Cadastro} exact />     
        </App>
    </Switch>
