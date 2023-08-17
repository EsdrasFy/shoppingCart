import React, { useState, useEffect } from 'react';
import './PopopCondition.css'; // Certifique-se de importar o arquivo CSS

export default function PopopCondition({text}) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);

    // Definir um timeout para fechar o popup após 5 segundos
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }, []);

  return (
    <div className={`popop ${showPopup ? 'show' : ''}`}>
      SEM FUNCIONALIDADE NO MOMENTO!
    </div>
  );
}