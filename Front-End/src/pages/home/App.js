import { Component } from 'react';
import './App.css';

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDesejo: [],
      idUser: '',
      descricao: '',
      idDesejoAlt: 0
    }
  }

  atualizarDescricao = async(event) => {
    await this.setState({descricao: event.target.value})

    console.log(this.state.descricao)
  }

  atualizarIdUser = async(event) => {
    await this.setState({idUser: event.target.value})

    console.log(this.state.idUser)
  }

  buscarListDesejo = async () => {
    console.log("Buscando lista de desejos")

    fetch('http://localhost:5000/api/Wish')

      .then(resposta => resposta.json())

      .then(dados => this.setState({ listDesejo: dados }))

      .catch(erro => console.log(erro))

      await console.log("Deu tudo certo")
  }

  componentDidMount() {
    this.buscarListDesejo();
  }

  cadastrarDesejo = (desejo) => {
    desejo.preventDefault();

    fetch('http://localhost:5000/api/Wish', {
      method: 'POST',
      body: JSON.stringify({ idUsuario: this.state.idUser, Descricao: this.state.descricao }),
      headers: { "Content-Type": "application/json" }
    })

      .then(console.log("Desejo cadastrado"))

      .catch(erro => console.log(erro))

      .then(this.buscarListDesejo)
  }

  render() {
    return (
      <div className = "container">
        <main className = "grid">
          <section>
            <div className = "container_titulo">
              <hr className = "linha"/>
              <h1 className = "titulo">Wishlist</h1>
              <hr className = "linha"/>
            </div>
            <div className = "container_texto">
              <p>Sonhe, deseje, interaja, compartilhe</p>
            </div>
          </section>
          <div className = "container_exibir">
            <section className = "container_cadastrar">
              <h2 className = "subtitulo">Cadastro De Desejo</h2>
              <form onSubmit={this.cadastrarDesejo}>
                <div className = "container_form">
                  <label htmlFor = "idUser" >Usuário</label>
                  <input
                    type="number"
                    value={this.state.idUser}
                    placeholder="Id Usuario"
                    onChange = {this.atualizarIdUser}
                    id = "idUser"
                  />
                  <label htmlFor = "desejo">Desejo</label>
                  <input
                    type="text"
                    value={this.state.descricao}
                    placeholder="Descrição do Desejo"
                    onChange = {this.atualizarDescricao}
                    id = "desejo"
                  />
                  <button type = "submit" onClick = {this.cadastrarDesejo}>Cadastrar</button>
                </div>
              </form>
            </section>
            <section className = "container_lista">
              <h2 className = "subtitulo">Lista De Desejos</h2>
              <table className = "tabela">
                <thead className = "tabela_th">
                  <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Desejo</th>
                  </tr>
                </thead>
                <tbody className = "tabela_tb">
                  {
                    this.state.listDesejo.map((desejos) => {
                      console.log(desejos)
                      return (
                        <tr key={desejos.idDesejo}>
                          <td>{desejos.idDesejo}</td>
                          <td>{desejos.idUsuarioNavigation.nome}</td>
                          <td>{desejos.descricao}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>
    )
  }
}

export default Wishlist;
