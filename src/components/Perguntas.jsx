import { useState } from "react";
import Progresso from "./Progresso";

export default function Pergunta({ dados, aoResponder, progresso }) {
  const [selecionada, setSelecionada] = useState(null);

  function responder(alternativa) {
    setSelecionada(alternativa);
    aoResponder(alternativa === dados.correta);
  }

  return (
    <div className="quiz-container">
      <Progresso 
        total={progresso.total} 
        atual={progresso.atual} 
        pontos={progresso.pontos}
      />
      
      <div className="p-4 border rounded shadow-md bg-white max-w-xl mx-auto">
        <h2 className="text-lg font-semibold mb-4">{dados.enunciado}</h2>
        <div className="flex flex-col gap-2">
          {dados.alternativas.map((alt, index) => (
            <button
              key={index}
              onClick={() => responder(alt)}
              disabled={!!selecionada}
              className={`p-2 border rounded transition-colors ${
                selecionada === alt
                  ? alt === dados.correta
                    ? "bg-green-300 border-green-500"
                    : "bg-red-300 border-red-500"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {alt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}