import './App.css';

function CartaoPessoal({ nome, idade, profissao }) {
  return (
    <div className="cartao-pessoal">
      <h2>{nome}</h2>
      <p><strong>Idade:</strong> {idade}</p>
      <p><strong>Profissao:</strong> {profissao}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <CartaoPessoal nome="Ellen" idade={18} profissao="estudante" />
    </div>
  );
}
export default App;