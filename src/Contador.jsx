import { useState } from 'react';

export const Contador = () => {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <p>Você clicou {numero} vezes</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
        <button onClick={() => setNumero(numero - 1)}>Decrementar</button>
      </div>
    </div>
  );
};
