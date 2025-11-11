import { useState } from 'react';

function InputTempoReal() {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
      <h2>Voce digitou: {texto.toUpperCase()}</h2>
    </div>
  );
}
export default InputTempoReal;