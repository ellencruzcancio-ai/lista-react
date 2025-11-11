import { useState } from 'react';
import './App.css';




function BotaoCurtir() {
  const [like, setLike] = useState(0);
  const [curtido, setCurtido] = useState(false);


  const toggleLike = () => {
    if (curtido) {
      setLike(like - 1);
      setCurtido(false);
    }
    else {
      setLike(like + 1);
      setCurtido(true);
    }
  };


  return (
    <div>
      <button
        onClick={toggleLike}
        style={{
          backgroundColor: curtido ? 'blue' : 'white',
          color: curtido ? 'white' : 'black',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}> 👍 {curtido ? 'Curtido' : 'Curtir'} ({like})
      </button>
    </div>
  )
}
export default BotaoCurtir;
