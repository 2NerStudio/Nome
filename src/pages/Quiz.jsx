import { useState } from "react";
import { perguntas } from "../data/perguntas";
import Pergunta from "../components/Perguntas";

export default function Quiz() {
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);

  function proximaPergunta(correta) {
    if (correta) setAcertos(acertos + 1);
    setTimeout(() => {
      setIndice(indice + 1);
    }, 1500);
  }

  if (indice >= perguntas.length) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Fim do jogo!</h2>
        <p>
          Você acertou {acertos} de {perguntas.length} perguntas.
        </p>
      </div>
    );
  }

  return <Pergunta dados={perguntas[indice]} aoResponder={proximaPergunta} />;
}
