import React from 'react';

const Titulo = ({ text, size }) => {
  const textSize = size || 'text-5xl'; // Tamaño por defecto

  return <h1 className={`${textSize} mt-20 mb-10`}>{text}</h1>;
};

export default Titulo;
