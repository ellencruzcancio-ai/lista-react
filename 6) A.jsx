import React, { useState } from 'react';

function MostrarEsconder() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Esconder' : 'Mostrar'}
      </button>
      {mostrar && <p>Esse texto pode ser mostrado ou escondido!</p>}
    </div>
  );
}
export default MostrarEsconder;