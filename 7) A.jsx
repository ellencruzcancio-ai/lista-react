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
      <p>Voce digitou: {texto}</p>
    </div>
  );
}
export default InputTempoReal;