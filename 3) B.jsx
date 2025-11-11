function listaComidas() {
  const comidas = ["Stroganoff", "Empadão", "Nhoque", "Risotto"];
  return (
    <div>
      <h2>Minhas comidas favoritas</h2>
      <ol>
        {comidas.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ol>
    </div>
  );
}

export default listaComidas;