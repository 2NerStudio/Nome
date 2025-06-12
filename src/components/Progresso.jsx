import React from 'react';
import '../styles/components.css';

const Progresso = ({ total, atual, pontos = 0 }) => {
  const porcentagem = Math.min(100, Math.max(0, (atual / total) * 100));

  return (
    <div className="progresso-container">
      <div className="progresso-info">
        <span className="progresso-texto">
          Questão {atual} de {total}
        </span>
        <span className="progresso-pontos">{pontos} pontos</span>
      </div>
      
      <div className="progresso-barra">
        <div 
          className="progresso-barra-interna" 
          style={{ width: `${porcentagem}%` }}
        ></div>
      </div>
      
      <div className="progresso-marcadores">
        {Array.from({ length: total }).map((_, i) => (
          <div 
            key={i} 
            className={`marcador ${i < atual ? 'respondido' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Progresso;