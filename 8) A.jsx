import { useState } from 'react';

function AddLista() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setLista([...lista, item]);
      setItem('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Digite um item..."
      />
      <button onClick={addItem}>Adicionar</button>
      <ul>
        {lista.map((itemLista, index) => (
          <li key={index}>{itemLista}</li>
        ))}
      </ul>
    </div>
  );
}
export default AddLista; 