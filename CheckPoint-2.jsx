import "./App.css";
import React, { useState } from "react";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#222222",
  },
  tituloPrincipal: {
    textAlign: "center",
    color: "#eeeeee",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  modulo: {
    backgroundColor: "#ffffff",
    border: "1px solid #cccccc",
    borderRadius: "8px",
    padding: "15px",
    width: "320px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  h2: {
    borderBottom: "1px solid #eeeeee",
    paddingBottom: "5px",
    color: "#555",
  },
  barraProgresso: {
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    height: "25px",
    overflow: "hidden",
  },
  lista: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  itemLista: {
    padding: "8px 0",
    borderBottom: "1px solid #f0f0f0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#8a2be2",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
  },
  buttonSecundario: {
    backgroundColor: "#999999",
  },
  input: {
    width: "calc(100% - 20px)",
    padding: "8px",
    margin: "5px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
};

function App() {
  const [nomePersonagem, setNomePersonagem] = useState("Herói");
  const [raca, setRaca] = useState("Humano");
  const [classe, setClasse] = useState("Guerreiro");
  const [statusVisivel, setStatusVisivel] = useState(false);

  const [pontosDisponiveis, setPontosDisponiveis] = useState(10);
  const [atributos, setAtributos] = useState({
    forca: 1,
    resistencia: 1,
    inteligencia: 1,
    sorte: 1,
  });

  const forca = atributos.forca;
  const resistencia = atributos.resistencia;
  const inteligencia = atributos.inteligencia;
  const sorte = atributos.sorte;

  const maxHp = 100;
  const [hp, setHp] = useState(maxHp);

  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const XP_PARA_LEVEL = 300;

  const [inventarioAberto, setInventarioAberto] = useState(false);
  const [itens, setItens] = useState([
    "Espada Curta",
    "Poção de Cura",
    "Mapa Antigo",
  ]);

  const [ouro, setOuro] = useState(50);
  const [lojaVisivel, setLojaVisivel] = useState(false);
  const LOJA_ITENS = [
    { nome: "Poção de Cura", preco: 15 },
    { nome: "Espada Longa", preco: 50 },
    { nome: "Elixir de Mana", preco: 20 },
  ];

  const [missoes, setMissoes] = useState([
    {
      id: 1,
      texto: "Seguir o mapa até a montanha",
      categoria: "Principal",
      completa: false,
    },
  ]);
  const [novaMissaoInput, setNovaMissaoInput] = useState("");
  const [novaMissaoCategoria, setNovaMissaoCategoria] = useState("Secundária");

  const [palavraBase, setPalavraBase] = useState("");
  const [encantamentoGerado, setEncantamentoGerado] = useState("");

  const [party, setParty] = useState([
    { id: 1, nome: "Ellen", classe: "Guerreira", nivel: 1 },
    { id: 2, nome: "Júlia", classe: "Maga", nivel: 2 },
    { id: 3, nome: "Morenna", classe: "Arqueira", nivel: 3 },
  ]);

  const Curar = () => {
    const pocaoIndex = itens.indexOf("Poção de Cura");
    if (pocaoIndex > -1) {
      setHp((h) => Math.min(h + 10, maxHp));
      const novosItens = [...itens];
      novosItens.splice(pocaoIndex, 1);
      setItens(novosItens);
    } else {
      alert("Você não tem 'Poção de Cura'!");
    }
  };

  const Dano = () => {
    setHp((h) => Math.max(h - 15, 0));
  };

  const getCorVida = (hpAtual, hpMax) => {
    const perc = (hpAtual / hpMax) * 100;
    if (perc < 30) return "#f44336";
    if (perc <= 70) return "#ffeb3b";
    return "#4caf50";
  };

  const ganharXp = (quantidade) => {
    const novoXpTotal = xp + quantidade;
    if (novoXpTotal >= XP_PARA_LEVEL) {
      setLevel(level + 1);
      setXp(0);
      alert("VOCÊ SUBIU DE NÍVEL!");
    } else {
      setXp(novoXpTotal);
    }
  };

  const AddMissao = () => {
    if (novaMissaoInput.trim() === "") return;
    const novaMissao = {
      id: Date.now(),
      texto: novaMissaoInput,
      categoria: novaMissaoCategoria,
      completa: false,
    };
    setMissoes([...missoes, novaMissao]);
    setNovaMissaoInput("");
  };

  const ToggleMissao = (id) => {
    let missaoCompleta = false;
    const novasMissoes = missoes.map((m) => {
      if (m.id === id) {
        if (!m.completa) {
          missaoCompleta = true;
        }
        return { ...m, completa: !m.completa };
      }
      return m;
    });
    setMissoes(novasMissoes);

    if (missaoCompleta) {
      ganharXp(100);
      setOuro((o) => o + 25);
    }
  };

  const GerarEncantamento = () => {
    if (!palavraBase) return;
    const invertida = palavraBase.split("").reverse().join("");
    setEncantamentoGerado(`LUMINOS ${invertida.toUpperCase()}!`);
  };

  const UpdateNivelParty = (id, novoNivel) => {
    const n = parseInt(novoNivel) || 1;
    setParty(party.map((m) => (m.id === id ? { ...m, nivel: n } : m)));
  };
  const partyOrdenada = [...party].sort((a, b) => b.nivel - a.nivel);

  const AumentarAtributo = (attr) => {
    if (pontosDisponiveis > 0) {
      setAtributos((a) => ({ ...a, [attr]: a[attr] + 1 }));
      setPontosDisponiveis((p) => p - 1);
    }
  };

  const DiminuirAtributo = (attr) => {
    if (atributos[attr] > 1) {
      setAtributos((a) => ({ ...a, [attr]: a[attr] - 1 }));
      setPontosDisponiveis((p) => p + 1);
    }
  };

  const ComprarItem = (item) => {
    if (ouro >= item.preco) {
      setOuro((o) => o - item.preco);
      setItens((i) => [...i, item.nome]);
    } else {
      alert("Ouro insuficiente!");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.tituloPrincipal}>
        PAINEL DO AVENTUREIRO: {nomePersonagem}
      </h1>

      <div style={styles.grid}>
        <div style={styles.modulo}>
          <h2 style={styles.h2}>Personagem</h2>
          <label>Nome:</label>
          <input
            type="text"
            value={nomePersonagem}
            onChange={(e) => setNomePersonagem(e.target.value)}
            style={styles.input}
          />
          <label>Raça:</label>
          <select
            style={styles.input}
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
          >
            <option>Humano</option>
            <option>Elfo</option>
            <option>Anão</option>
            <option>Orc</option>
          </select>
          <label>Classe:</label>
          <select
            style={styles.input}
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
          >
            <option>Guerreiro</option>
            <option>Mago</option>
            <option>Arqueiro</option>
            <option>Ladino</option>
          </select>
          <button
            style={styles.button}
            onClick={() => setStatusVisivel(!statusVisivel)}
          >
            {statusVisivel ? "Esconder" : "Mostrar"} Efeitos de Status
          </button>
          {statusVisivel && (
            <ul style={styles.lista}>
              <li style={styles.itemLista}>
                {hp < maxHp * 0.3 ? "Vida Baixa (Crítico)" : "Saudável"}
              </li>
              <li style={styles.itemLista}>
                {classe === "Mago" ? "Afinidade Arcana" : "Vigor Físico"}
              </li>
            </ul>
          )}
        </div>
        <div style={styles.modulo}>
          <h2 style={styles.h2}>Combate</h2>
          <h3>
            Vida (HP): {hp} / {maxHp}
          </h3>
          <div style={styles.barraProgresso}>
            <div
              style={{
                width: `${(hp / maxHp) * 100}%`,
                height: "100%",
                backgroundColor: getCorVida(hp, maxHp),
              }}
            ></div>
          </div>
          <button
            style={styles.button}
            onClick={Curar}
            disabled={itens.indexOf("Poção de Cura") === -1}
          >
            Usar Poção (+10 HP)
          </button>
          <button
            style={{ ...styles.button, ...styles.buttonSecundario }}
            onClick={Dano}
            disabled={hp === 0}
          >
            Sofrer Dano (-15 HP)
          </button>
          {hp === 0 && <h3 style={{ color: "red" }}>VOCÊ MORREU!</h3>}
        </div>

        <div style={styles.modulo}>
          <h2 style={styles.h2}>Experiência</h2>
          <h3>Nível: {level}</h3>
          <p>
            XP: {xp} / {XP_PARA_LEVEL}
          </p>
          <div style={styles.barraProgresso}>
            <div
              style={{
                width: `${(xp / XP_PARA_LEVEL) * 100}%`,
                height: "100%",
                backgroundColor: "#03a9f4",
              }}
            ></div>
          </div>
          <button style={styles.button} onClick={() => ganharXp(50)}>
            Derrotar Inimigo (+50 XP)
          </button>
        </div>

        <div style={styles.modulo}>
          <h2 style={styles.h2}>Atributos</h2>
          <h3>Pontos para Distribuir: {pontosDisponiveis}</h3>
          <ul style={styles.lista}>
            {Object.keys(atributos).map((attr) => (
              <li key={attr} style={styles.itemLista}>
                <span>
                  {attr.charAt(0).toUpperCase() + attr.slice(1)}:{" "}
                  <strong>{atributos[attr]}</strong>
                </span>
                <div>
                  <button
                    style={{ ...styles.button, padding: "5px 10px" }}
                    onClick={() => AumentarAtributo(attr)}
                    disabled={pontosDisponiveis === 0}
                  >
                    +
                  </button>
                  <button
                    style={{
                      ...styles.button,
                      ...styles.buttonSecundario,
                      padding: "5px 10px",
                    }}
                    onClick={() => DiminuirAtributo(attr)}
                    disabled={atributos[attr] === 1}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <ul>
            <li>Dano: {forca + 9}</li>
            <li>Dano reduzido: {resistencia + 9}</li>
            <li>Mana: {inteligencia + 9}</li>
            <li>
              Chance de crítico: {Math.min((sorte / 300) * 100, 100).toFixed(0)}
              %
            </li>
          </ul>
        </div>

        <div style={styles.modulo}>
          <h2 style={styles.h2}>Inventário</h2>
          <button
            style={styles.button}
            onClick={() => setInventarioAberto(!inventarioAberto)}
          >
            {inventarioAberto ? "Fechar Mochila 📜" : "Abrir Mochila 🎒"}
          </button>
          {inventarioAberto && (
            <ul style={styles.lista}>
              {itens.length > 0 ? (
                itens.map((item, index) => (
                  <li key={index} style={styles.itemLista}>
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <li style={styles.itemLista}>Mochila vazia</li>
              )}
            </ul>
          )}
        </div>

        <div style={styles.modulo}>
          <h2 style={styles.h2}>Economia</h2>
          <h3>Ouro: {ouro} 🪙</h3>
          <button style={styles.button} onClick={() => setOuro((o) => o + 25)}>
            Ganhar Ouro (+25)
          </button>
          <button
            style={{ ...styles.button, ...styles.buttonSecundario }}
            onClick={() => setLojaVisivel(!lojaVisivel)}
          >
            {lojaVisivel ? "Fechar Loja" : "Abrir Loja"}
          </button>
          {lojaVisivel && (
            <>
              <h3 style={styles.h2}>Itens à Venda</h3>
              <ul style={styles.lista}>
                {LOJA_ITENS.map((item, index) => (
                  <li key={index} style={styles.itemLista}>
                    <span>
                      {item.nome} ({item.preco} 🪙)
                    </span>
                    <button
                      style={{ ...styles.button, padding: "5px 10px" }}
                      onClick={() => ComprarItem(item)}
                      disabled={ouro < item.preco}
                    >
                      Comprar
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div style={styles.modulo}>
          <h2 style={styles.h2}>Diário de Missões</h2>
          <p>Missões Completas: {missoes.filter((m) => m.completa).length}</p>
          <div>
            <input
              type="text"
              placeholder="Nova missão..."
              value={novaMissaoInput}
              onChange={(e) => setNovaMissaoInput(e.target.value)}
              style={styles.input}
            />
            <select
              style={styles.input}
              value={novaMissaoCategoria}
              onChange={(e) => setNovaMissaoCategoria(e.target.value)}
            >
              <option>Principal</option>
              <option>Secundária</option>
              <option>Urgente</option>
            </select>
            <button style={styles.button} onClick={AddMissao}>
              Adicionar Missão
            </button>
          </div>
          <h3 style={styles.h2}>
            Missões Ativas ({missoes.filter((m) => !m.completa).length})
          </h3>
          <ul style={styles.lista}>
            {missoes
              .filter((m) => !m.completa)
              .map((m) => (
                <li
                  key={m.id}
                  style={{
                    ...styles.itemLista,
                    borderColor: m.categoria === "Urgente" ? "red" : "inherit",
                  }}
                >
                  <span>
                    ({m.categoria}) {m.texto}
                  </span>
                  <button
                    style={{ ...styles.button, padding: "5px 10px" }}
                    onClick={() => ToggleMissao(m.id)}
                  >
                    Completar
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <div style={styles.modulo}>
          <h2 style={styles.h2}>Party (Ranking)</h2>
          <ol style={styles.lista}>
            {partyOrdenada.map((m, index) => (
              <li key={m.id} style={styles.itemLista}>
                <span>
                  <strong>
                    {index + 1}. {m.nome}
                  </strong>{" "}
                  ({m.classe})
                </span>
                {m.id === 1 ? (
                  <span>Nível: {level} (Você)</span>
                ) : (
                  <input
                    type="number"
                    value={m.nivel}
                    onChange={(e) => UpdateNivelParty(m.id, e.target.value)}
                    style={{ ...styles.input, width: "50px" }}
                  />
                )}
              </li>
            ))}
          </ol>
        </div>

        <div style={styles.modulo}>
          <h2 style={styles.h2}>Encantamentos</h2>
          <input
            type="text"
            placeholder="Palavra mágica base..."
            value={palavraBase}
            onChange={(e) => setPalavraBase(e.target.value)}
            style={styles.input}
          />
          <button style={styles.button} onClick={GerarEncantamento}>
            Gerar Encantamento
          </button>
          {encantamentoGerado && (
            <h3 style={styles.h2}>{encantamentoGerado}</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

