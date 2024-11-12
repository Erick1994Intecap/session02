import React, { useState } from 'react';

function ContadorEstado() {
  
  const [count, setCount] = useState(0);

  const aumentar = e=> {
    setCount(count + 1)
  };

  const disminuir = e=> {
    setCount(count - 1)
  };

  return (
    <div>
        <h1>Contador:</h1>
        <p>Valor: {count}</p>
        <button onClick={disminuir}>disminuir</button>
        <button onClick={aumentar}>aumentar</button>
    </div>
  );
}

export default ContadorEstado;
