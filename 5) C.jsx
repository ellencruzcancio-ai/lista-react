import React, { useState } from 'react';

function getCorTemperatura(temperatura) {
  if (temperatura < 15) return '#4a90e2';
  if (temperatura < 25) return '#f5e423ff';
  return 'rgba(255, 27, 27, 1)';
}

function Temperatura() {
  const [temperatura, setTemperatura] = useState(20);

  return (
    <div>
      <h2 style={{ color: getCorTemperatura(temperatura) }}>
        Temperatura: {temperatura}°C
      </h2>
      <button onClick={() => setTemperatura(temperatura + 2)}>+2°C</button>
      <button onClick={() => setTemperatura(temperatura - 2)}>-2°C</button>
    </div>
  );
}
export default Temperatura;