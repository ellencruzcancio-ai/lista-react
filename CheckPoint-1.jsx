import React from 'react';

const EstilosGlobais = () => (
  <style>{`
    html, body, #root {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      background-color: #000;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    *, *::before, *::after {
      box-sizing: border-box;
    }
    #root {
      display: flex;
      flex-direction: column;
    }
  `}</style>
);

function App() {
  const dadosMissao = {
    comandante: "Ellen",
    progresso: 85, 
    planetaDestino: {
      nome: "Marte",
      temperatura: -63,
      gravidade: "0.38g (3.72 m/s²)",
      descricao: "O quarto planeta a partir do Sol, conhecido como o Planeta Vermelho.",
    },
    previsaoEspacial: {
      clima: "Vento Solar Moderado",
      radiacaoCosmica: "Elevada",
    },
    relatorioBordo: [
      "Decolagem da Estação Espacial Internacional.",
      "Rota para Marte definida.",
      "Verificação dos sistemas de suporte à vida: OK.",
      "Aproximando-se do cinturão de asteroides.",
    ],
  };

  const getIconeClima = (temperatura) => {
    if (temperatura < -100) return '🥶';
    if (temperatura < 0) return '❄️';
    return '☀️';
  };

  const getIconePrevisao = (clima) => {
    const icones = {
      'Calmaria Solar': '☀️',
      'Vento Solar Moderado': '💨',
      'Cinturão de Asteroides': '☄️',
    };
    return icones[clima] || '🛰️';
  };

  const getCorProgresso = (progresso) => {
    if (progresso < 30) {
      return '#ff4d4d'; // Vermelho
    }
    if (progresso < 70) {
      return '#ffa500'; // Laranja
    }
    return '#4caf50'; // Verde
  };
  
  const dataAtual = new Date();

  const styles = {
    dashboard: {
      background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
      color: '#e0e0e0',
      padding: '20px',
      fontFamily: 'monospace',
      width: '100%',
      height: '100%',
      margin: 0,
      flex: 1,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
    },
    infoBox: {
      backgroundColor: 'rgba(26, 26, 58, 0.7)',
      border: '1px solid #7700ffff',
      borderRadius: '10px',
      padding: '15px',
      backdropFilter: 'blur(5px)',
    },
  };

  return (
    <>
      <EstilosGlobais />
      <div style={styles.dashboard}>
        <h1 style={{ color: '#7700ffff', textAlign: 'center' }}>
          Bem-vindo(a), Comandante {dadosMissao.comandante}!
        </h1>
        
        <div style={styles.grid}>
          <div style={styles.infoBox}>
            <p>Data Estelar: {dataAtual.getFullYear()}.{dataAtual.getMonth() + 1}.{dataAtual.getDate()}</p>
            <p>Horário de {dadosMissao.planetaDestino.nome}: {dataAtual.getHours()}:{dataAtual.getMinutes()}:{dataAtual.getSeconds()}</p>
          </div>

          <div style={styles.infoBox}>
            <h2>Status da Missão</h2>
            <p>Progresso até Marte: {dadosMissao.progresso}%</p>
            <div style={{ width: '100%', backgroundColor: '#333', borderRadius: '5px' }}>
              <div style={{ 
                width: `${dadosMissao.progresso}%`, 
                backgroundColor: getCorProgresso(dadosMissao.progresso), 
                height: '20px', 
                borderRadius: '5px' 
              }}></div>
            </div>
          </div>

          <div style={styles.infoBox}>
            <h2>Planeta de Destino</h2>
            <p>Nome: {dadosMissao.planetaDestino.nome} {getIconeClima(dadosMissao.planetaDestino.temperatura)}</p>
            <p>Temperatura Média: {dadosMissao.planetaDestino.temperatura}°C</p>
            <p>Gravidade: {dadosMissao.planetaDestino.gravidade}</p>
            <p>Descrição: {dadosMissao.planetaDestino.descricao}</p>
          </div>

          <div style={styles.infoBox}>
            <h2>Previsão do Tempo Espacial</h2>
            <p>{getIconePrevisao(dadosMissao.previsaoEspacial.clima)} Clima: {dadosMissao.previsaoEspacial.clima}</p>
            <p>☢️ Radiação Cósmica: {dadosMissao.previsaoEspacial.radiacaoCosmica}</p>
          </div>
          
          <div style={styles.infoBox}>
            <h2>Relatório de Bordo</h2>
            <ol>
              {dadosMissao.relatorioBordo.map((evento, index) => (
                <li key={index}>{evento}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;