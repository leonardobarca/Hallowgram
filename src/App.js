import './App.css';
import Feed from './componentes/Feed'
import Sugestoes from './componentes/Perfis'
import knight from './imagens/knight.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hallowgram</h1>
      </header>
      <div className="Menu">
        <p>Página inicial</p>
        <p>Reels</p>
        <p>Mensagens</p>
        <p>Pesquisa</p>
        <p>Criar</p>
        <p>Perfil</p>
      </div>
      <div className="Conteudo">
        <Feed />
        <Sugestoes />
      </div>

      <button className="Botao-Mensagens">
        ✉️ Mensagens
        <img src={knight} />
      </button>
    </div>
  );
}
export default App;