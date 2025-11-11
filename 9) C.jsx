import { useState } from 'react';
import './App.css';


const humores = {
  feliz: {
    cor: 'lightyellow',
    emoji: '😁',
    fala: 'haha'
  },
  triste: {
    cor: 'lightblue',
    emoji: '😢',
    fala: 'snif'
  },
  irritado: {
    cor: 'lightcoral',
    emoji: '😠',
    fala: 'grr'
  },
  calmo: {
    cor: 'lightgrey',
    emoji: '🥱',
    fala: 'ahhh'
  },
}
const humorPadrao = {
  cor: 'white',
  emoji: '😐',
  fala: '...'
}


function SimuladorDeHumor() {
  const [humorAtual, setHumorAtual] =
    useState(humorPadrao)


  const mudarHumor = (tipoHumor) => {
    const novoHumor = humores[tipoHumor];
    setHumorAtual(novoHumor);
    document.body.style.backgroundColor = novoHumor.cor;
    alert(novoHumor.fala);
  }




  return (
    <>
      <div className="App">
        <h2>Simulador de Humor</h2>
        <div className="emoji-display">
          {humorAtual.emoji}
        </div>


        <div className="button-container">
          <button onClick={() => mudarHumor("feliz")}>Feliz</button>
          <button onClick={() => mudarHumor("triste")}>triste</button>
          <button onClick={() => mudarHumor("irritado")}>irritado</button>
          <button onClick={() => mudarHumor("calmo")}>calmo</button>
        </div>
      </div>
    </>
  )
}


export default SimuladorDeHumor;
