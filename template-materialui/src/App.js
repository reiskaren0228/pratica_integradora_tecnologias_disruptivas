import React, { useState } from "react";
import "./app.css";
import Header from "./components/header";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const [tarefas, setTarefas] = useState([]);

  const [novaTarefa, setNovaTarefa] = useState("");

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, { id: Date.now(), text: novaTarefa }]);
      setNovaTarefa("");
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== index);
    setTarefas(novasTarefas);
  };

  const limparTarefas = () => {
    setTarefas([]);
  };

  return (
    <div className={`App ${isLightMode ? "light-mode" : ""}`}>
      <Header />
      <button type="button" onClick={toggleTheme} style={{ margin: "20px" }}>
        Alternar para {isLightMode ? "Modo Escuro" : "Modo Claro"}
      </button>

      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
        style={{ padding: "8px", marginTop: "20px" }}
      />
      <button
        type="button"
        onClick={adicionarTarefa}
        style={{ marginLeft: "10px" }}
      >
        Adicionar Tarefa
      </button>
      <button
        type="button"
        onClick={limparTarefas}
        style={{ marginLeft: "10px" }}
      >
        Limpar Tarefas
      </button>

      {/* Lista de Tarefas */}
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="tarefa-item">
            {tarefa.text}
            <button
              type="button"
              onClick={() => removerTarefa(index)}
              style={{ marginLeft: "10px" }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>

      {/* Rodapé */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} - Meu Aplicativo de Tarefas
      </footer>
    </div>
  );
}

export default App;
