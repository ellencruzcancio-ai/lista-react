import './App.css';

function CartaoLivro({ titulo, autor, ano, genero }) {
  return (
    <div className="cartao-livro">
      <h2>{titulo}</h2>
      <p><strong>autor:</strong> {autor}</p>
      <p><strong>ano:</strong> {ano}</p>
      <p><strong>genero:</strong> {genero}</p>
    </div>
  );
}

function App() {
  return (
    <CartaoLivro
      titulo="Uma mulher no escuro"
      autor="Raphael Montes"
      ano={2019}
      genero="terror"
    />
  );
}
export default App;