import "./App.css";
import React, { useState } from "react";


function App() {
  const [valor, setValor] = useState(1);
  const [moedaOrigem, setMoedaOrigem] = useState("BRL");
  const [moedaDestino, setMoedaDestino] = useState("USD");


  const taxas = {
    BRL: 1,
    USD: 5.4,
    EUR: 6.0,
  };


  const handleValorChange = (event) => {
    setValor(event.target.value);
  };


  const handleMoedaOrigemChange = (event) => {
    setMoedaOrigem(event.target.value);
  };


  const handleMoedaDestinoChange = (event) => {
    setMoedaDestino(event.target.value);
  };


  const valorNumerico = Number(valor) || 0;
  const valorEmBRL = valorNumerico * taxas[moedaOrigem];
  const resultado = valorEmBRL / taxas[moedaDestino];


  return (
    <div>
      <div>
        <h2>Conversor de Moedas</h2>
        <div>
          <label>Valor: </label>
          <input type="number" value={valor} onChange={handleValorChange} />
        </div>
        <div>
          <label>De: </label>
          <select value={moedaOrigem} onChange={handleMoedaOrigemChange}>
            <option value="BRL">Real (BRL)</option>
            <option value="USD">Dólar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
          </select>
        </div>
        <div>
          <label>Para: </label>
          <select value={moedaDestino} onChange={handleMoedaDestinoChange}>
            <option value="BRL">Real (BRL)</option>
            <option value="USD">Dólar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
          </select>
        </div>
        <h3>
          Resultado: {resultado.toFixed(2)} {moedaDestino}
        </h3>
      </div>
    </div>
  );
}


export default App;
