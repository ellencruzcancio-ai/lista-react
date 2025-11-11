import "./App.css";
import React, { useState } from "react";


function App() {
  const [texto, setTexto] = useState("");
  const limiteMaximo = 50;


  const handleMudancaTexto = (event) => {
    const textoDigitado = event.target.value;
    if (textoDigitado.length <= limiteMaximo) {
      setTexto(textoDigitado);
    }
  };


  const corContador = texto.length === limiteMaximo ? "red" : "#555";


  return (
    <div>
      <div>
        <h2>Editor de Texto com Limite</h2>
        <textarea
          value={texto}
          onChange={handleMudancaTexto}
          placeholder="Digite seu texto aqui..."
        />
        <div style={{ color: corContador }}>
          {texto.length}/{limiteMaximo}
        </div>
      </div>
    </div>
  );
}


export default App;


