import React, { useState } from 'react';

function ListaEstado() {

  const [inputValue, setInputValue] = useState('');
  
  const [values, setValues] = useState([]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const addValueToList = () => {
    if (inputValue.trim() !== '') {
      setValues([...values, inputValue]); 
      setInputValue(''); 
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Ingresa un valor" 
      />
      <button onClick={addValueToList}>Agregar a la lista</button>

      <ul>
        {values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaEstado;
