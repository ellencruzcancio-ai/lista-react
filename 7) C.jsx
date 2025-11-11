import React, { useState } from 'react';

function Verificacao({ texto }) {
  if (texto.length < 3) {
    return <p>Digite pelo menos 3 caracteres</p>;
  }
  return <p>Texto válido!</p>;
}

function corCaracter(texto) {
  if (texto.length < 3) {
    return "#FF0000";
  } else {
    return "#eeffeeff";
  }
}

function InputTempoReal() {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <h2 style={{ color: corCaracter(texto) }}>Título: Verificacao</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
      <Verificacao texto={texto} />
    </div>
  );
}
export default InputTempoReal;