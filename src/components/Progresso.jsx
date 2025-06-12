const Progresso = ({ total, atual }) => {
  return (
    <div className="progresso-container">
      <div className="progresso-bar" style={{ width: `${(atual/total)*100}%` }}></div>
      <span>{atual}/{total} questões</span>
    </div>
  );
};