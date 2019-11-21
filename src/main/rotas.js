
import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from '../views/login'
import CadastroUsuarios from '../views/cadastrousuario'

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuarios} />
            </Switch>
        </HashRouter>
    )
}
export default Rotas