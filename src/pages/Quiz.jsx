import { useState } from 'react';
import Pergunta from '../components/Perguntas';
import { perguntas } from '../data/perguntas';

export default function Quiz() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  function handleResposta(acertou) {
    if (acertou) {
      setPontos(pontos + 10); // 10 pontos por acerto
    }

    if (indicePergunta < perguntas.length - 1) {
      setTimeout(() => {
        setIndicePergunta(indicePergunta + 1);
      }, 1000); // Delay para visualizar feedback
    } else {
      setQuizFinalizado(true);
    }
  }

  if (quizFinalizado) {
    return (
      <div className="resultado-container">
        <h2 className="text-2xl font-bold mb-4">Quiz Concluído!</h2>
        <p className="text-xl">
          Você acertou {pontos / 10} de {perguntas.length} perguntas
        </p>
        <p className="text-3xl mt-4 font-bold text-blue-600">
          Pontuação: {pontos}
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Reiniciar Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-page p-4">
      <Pergunta
        dados={perguntas[indicePergunta]}
        aoResponder={handleResposta}
        progresso={{
          total: perguntas.length,
          atual: indicePergunta + 1,
          pontos: pontos
        }}
      />
    </div>
  );
}