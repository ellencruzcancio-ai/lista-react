import React, { useState } from 'react';

function MostrarEsconder() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Cofre Aberto' : 'Cofre Fechado'}
      </button>
      {mostrar && <div>Joias</div>}
    </div>
  );
}
export default MostrarEsconder;