import { useState } from "react";

export default function Pergunta({ dados, aoResponder }) {
  const [selecionada, setSelecionada] = useState(null);

  function responder(alternativa) {
    setSelecionada(alternativa);
    aoResponder(alternativa === dados.correta);
  }

  return (
    <div className="p-4 border rounded shadow-md bg-white max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">{dados.enunciado}</h2>
      <div className="flex flex-col gap-2">
        {dados.alternativas.map((alt, index) => (
          <button
            key={index}
            onClick={() => responder(alt)}
            disabled={!!selecionada}
            className={`p-2 border rounded ${
              selecionada === alt
                ? alt === dados.correta
                  ? "bg-green-300"
                  : "bg-red-300"
                : "bg-gray-100"
            }`}
          >
            {alt}
          </button>
        ))}
      </div>
    </div>
  );
}
