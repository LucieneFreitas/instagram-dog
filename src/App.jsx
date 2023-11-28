/* eslint-disable no-unused-vars */
import React from 'react';


// eslint-disable-next-line react/prop-types
const Titulo = ({cor, texto}) => {
  return <h1 style={{color: cor}}>{texto}</h1>;
};

const App = () => {
  return (
    <div>
   <Titulo cor = 'red' texto='Meu titulo1' />
   <Titulo cor = 'blue' texto='Meu titulo2' />
  </div>
  ); 
};

export default App;
  

