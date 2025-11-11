import './App.css';

function MenuRestaurante() {
  const pratos = [
    { nome: "Strogonoff", preco: 25.30, descricao: "Um delicioso strogonoff de frango." },
    { nome: "Empadão", preco: 30.00, descricao: "Empadão de camarão cremoso." },
    { nome: "Nhoque", preco: 35.50, descricao: "Nhoque de batata com carne seca" },
    { nome: "Risotto", preco: 40.30, descricao: "Risotto de queijo com abobrinha" }
  ];

  return (
    <div>
      <h2>Menu</h2>
      <div className="menu-grid">
        {pratos.map((prato, index) => (
          <div key={index} className="prato-card">
            <h3>{prato.nome}</h3>
            <p className="preco">R$ {prato.preco.toFixed(2)}</p>
            <p className="descricao">{prato.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MenuRestaurante;