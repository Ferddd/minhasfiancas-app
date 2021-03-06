import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'

class Login extends React.Component {
    state = {
        email: "",
        senha: ""
    }

    entrar = () => {
        console.log("email :", this.state.email)
        console.log("senha: ", this.state.senha)
    }

    render() {
        return (

            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup htmlFor="exampleImputEmail" label="Email: *">
                                                <input value={this.state.email} onChange={e => this.setState({ email: e.target.value })}
                                                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email" />
                                            </FormGroup>
                                            <FormGroup htmlFor="exampleImputPassword1" label="Senha: *">
                                                <input value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </FormGroup>
                                            <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                            <button className="btn btn-danger">Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        )
    }


}

export default Login