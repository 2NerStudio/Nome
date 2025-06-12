import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Jogo de Gramática</h1>
      <p className="mb-4">Teste seus conhecimentos com perguntas do livro do estudante!</p>
      <Link
        to="/quiz"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Começar Jogo
      </Link>
    </div>
  );
}