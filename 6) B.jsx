import React, { useState } from 'react';

function MostrarEsconder() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Esconder' : 'Mostrar'}
      </button>
      {mostrar && <img src="src/assets/pato.jpg" alt="pato" />}
    </div>
  );
}
export default MostrarEsconder;