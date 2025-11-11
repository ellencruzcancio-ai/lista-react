import { useState } from 'react';

function AddLista() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setLista([...lista, item]);
      setItem("");
    }
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Digite um item..."
      />
      <button onClick={addItem}>Nova Tarefa</button>
      <ul>
        {lista.map((itemLista, index) => (
          <li key={index}>{itemLista}</li>
        ))}
      </ul>
    </div>
  );
}
export default AddLista;