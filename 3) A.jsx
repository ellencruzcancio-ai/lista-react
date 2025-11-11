function listaHobbies() {
  const hobbies = ["jogos", "leitura", "pintura"];
  return (
    <div>
      <h2>Meus hobbies favoritos</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
export default listaHobbies;