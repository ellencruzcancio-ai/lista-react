import { useState } from 'react';
import './App.css';




function FormularioTempoReal() {
  const [dados, setDados] = useState({
    cidade: "",
    estado: "",
    CEP: "",
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({
      ...dados,
      [name]: value,
    });
  };




  return (
    <div>
      <h2>Formulário</h2>
      <form>
        <div>
          <label>Cidade: </label>
          <input
            type="text"
            name="cidade"
            value={dados.cidade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Estado: </label>
          <input
            type="text"
            name="estado"
            value={dados.estado}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>CEP: </label>
          <input
            type="number"
            name="CEP"
            value={dados.cep}
            onChange={handleChange}
          />
        </div>
      </form>




      <h2>Sua cidade é: {dados.cidade}</h2>
      <h2>Seu estado é: {dados.estado}</h2>
      <h2>Seu CEP é: {dados.cep}</h2>
    </div>
  );
}




export default FormularioTempoReal;
