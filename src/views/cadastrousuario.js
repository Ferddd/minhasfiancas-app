import React from 'react';
import Card from '../components/card'
import FormGroup from '../components/form-group'

class CadastroUsuarios extends React.Component {
    state = {
        nome: "",
        email: "",
        senha: "",
        senhaRepeticao: ""
    }

    cadastrar = () => {
        console.log(this.state)
    }
    render() {
        return (

            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputNome" label="Nome: *">
                                <input value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })}
                                    type="text" className="form-control" id="inputNome" placeholder="Digite o nome" />
                            </FormGroup>

                            <FormGroup htmlFor="ImputEmail" label="Email: *">
                                <input value={this.state.email} onChange={e => this.setState({ email: e.target.value })}
                                    type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email" />
                            </FormGroup>

                            <FormGroup htmlFor="exampleImputPassword1" label="Senha: *">
                                <input value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </FormGroup>

                            <FormGroup htmlFor="exampleImputPassword2" label="Repita a Senha: *">
                                <input value={this.state.senhaRepeticao} onChange={e => this.setState({ senhaRepeticao: e.target.value })} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </FormGroup>
                            <button onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                            <button className="btn btn-danger">Cancelar</button>

                        </div>
                    </div>
                </div>
            </Card>


        )
    }
}

export default CadastroUsuarios