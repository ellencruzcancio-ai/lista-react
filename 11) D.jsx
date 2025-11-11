import "./App.css";
import React, { useState } from "react";


function App() {
  const [cabelo, setCabelo] = useState("Preto");
  const [olhos, setOlhos] = useState("Castanho");
  const [acessorios, setAcessorios] = useState({
    oculos: false,
    chapeu: false,
    barba: false,
  });


  const cabeloMudar = (event) => {
    setCabelo(event.target.value);
  };


  const olhosMudar = (event) => {
    setOlhos(event.target.value);
  };


  const acessoriosMudar = (event) => {
    const { name, checked } = event.target;
    setAcessorios((prevAcessorios) => ({
      ...prevAcessorios,
      [name]: checked,
    }));
  };


  const acessoriosSelecionados = Object.keys(acessorios)
    .filter((key) => acessorios[key])
    .join(", ");


  return (
    <div>
      <div>
        <h2>Criador de Avatar</h2>


        <div>
          <label>Cor do Cabelo: </label>
          <select value={cabelo} onChange={cabeloMudar}>
            <option value="Preto">Preto</option>
            <option value="Loiro">Loiro</option>
            <option value="Castanho">Castanho</option>
            <option value="Ruivo">Ruivo</option>
          </select>
        </div>


        <div>
          <fieldset>
            <legend>Cor dos Olhos:</legend>
            <div>
              <input
                type="radio"
                value="Castanho"
                name="olhos"
                checked={olhos === "Castanho"}
                onChange={olhosMudar}
              />{" "}
              Castanho
            </div>
            <div>
              <input
                type="radio"
                value="Azul"
                name="olhos"
                checked={olhos === "Azul"}
                onChange={olhosMudar}
              />{" "}
              Azul
            </div>
            <div>
              <input
                type="radio"
                value="Verde"
                name="olhos"
                checked={olhos === "Verde"}
                onChange={olhosMudar}
              />{" "}
              Verde
            </div>
          </fieldset>
        </div>


        <div>
          <fieldset>
            <legend>Acessórios:</legend>
            <div>
              <input
                type="checkbox"
                name="oculos"
                checked={acessorios.oculos}
                onChange={acessoriosMudar}
              />{" "}
              Óculos
            </div>
            <div>
              <input
                type="checkbox"
                name="chapeu"
                checked={acessorios.chapeu}
                onChange={acessoriosMudar}
              />{" "}
              Chapéu
            </div>
            <div>
              <input
                type="checkbox"
                name="barba"
                checked={acessorios.barba}
                onChange={acessoriosMudar}
              />{" "}
              Barba
            </div>
          </fieldset>
        </div>


        <h3>Seu Avatar:</h3>
        <p>
          👤 Cabelo: {cabelo} | Olhos: {olhos} | Acessórios:{" "}
          {acessoriosSelecionados || "Nenhum"}
        </p>
      </div>
    </div>
  );
}


export default App;


