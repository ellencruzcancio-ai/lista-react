import react from 'react'
import './App.css'


function PrevisaoTempo({ temperatura, clima, cidade, unidade }) {
  const getIcone = (clima) => {
    const climas = {
      'ensolarado': '☀️',
      'nublado': '⛅',
      'chuvoso': '🌧️',
      'tempestuoso': '🌩️',
      'nevando': '🌨️',
    }
    return climas[clima.toLowerCase()] || '⛅';
  }


  const getCorTemperatura = (temp) => {
    if (temp < 15) return '#4a90e2';
    if (temp < 25) return '#f5e423ff';
    return 'rgba(255, 27, 27, 1)';
  };


  return (
    <div style={{
      border: '2px solid #ddd',
      borderRadius: '15px',
      padding: '25px',
      textAllign: 'center',
      background: 'linear-gradient(135deg, #a1a1a1ff, #4f4f4fff)',
      color: 'white',
      maxWidth: '200px',
      minWhidht: '200px'
    }}>
      <h2 style={{ margin: '0 0 15px 0' }}>{cidade}</h2>
      <div style={{ fontSize: '60px', margin: '10px 0' }}>{getIcone(clima)}</div>
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: getCorTemperatura(temperatura),
        textShadow: '2px 2px 4px #000000ff'
      }}>
        {temperatura}°C
      </div>
      <p style={{ fontSize: '18px', margin: '10px 0' }}>{clima}</p>
      <p style={{ fontSize: '14px', opacity: 0.9 }}>Unidade:{unidade}</p>
    </div>
  )
}
function App() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    allignItems: 'center',
    gap: '20px',
    marginTop: '50px',
    flexWrap: 'wrap',
    width: '100%',
  };
  return (
    <div style={containerStyle}>
      <PrevisaoTempo temperatura={31} clima="ensolarado" cidade="Rio de Janeiro" unidade={1} />
      <PrevisaoTempo temperatura={12} clima="nevando" cidade="Curitiba" unidade={2} />
      <PrevisaoTempo temperatura={23} clima="chuvoso" cidade="São Paulo" unidade={3} />
    </div>
  )
}


export default App
