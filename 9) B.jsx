import { useState } from 'react';

function AlterarTamanhoFonte() {
  const [tamanho, setTamanho] = useState('small');

  const mudarTamanho = (novoTamanho) => {
    setTamanho(novoTamanho);
    document.body.style.fontSize = novoTamanho;
  };

  return (
    <div>
      <h2>Alterar Tamanho da fonte</h2>
      <button onClick={() => mudarTamanho("small")}>pequeno</button>
      <button onClick={() => mudarTamanho("medium")}>medio</button>
      <button onClick={() => mudarTamanho("large")}>grande</button>
    </div>
  );
}
export default AlterarTamanhoFonte;