import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import Login from './views/login'
import './custom.css'
import CadastroUsuarios from './views/cadastrousuario';

class App extends React.Component {



  render() {
  return (
    <div>
      <CadastroUsuarios/>
    </div>

  );
}
}

export default App;
