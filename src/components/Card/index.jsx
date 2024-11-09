//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import { useState } from 'react';
import './style.css';

const Card = () => {

  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3 || name.startsWith(' ')) {
      setErrorMessage('El nombre debe tener al menos 3 caracteres y no comenzar con un espacio.');
      setShowCard(false);
      return;
    }

    if ( name.length <= 6 ) {
      setErrorMessage('Por favor ingresa un color en formato HEX (# seguido de 6 caracteres).');
      setShowCard(false);
      return;
    }

    setErrorMessage('');
    setShowCard(true);

  }

  return (
    <>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="card_content">
            <input className='card_input' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Ingresa tu nombre'/>
            <input className='card_input' type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder='Ingresa un color (Formato HEX)'/>
            <button className='btn' type='submit'>ENVIAR</button>
          </div>
        </form>
      </div>

      {errorMessage && <p className="errorMessage">{errorMessage}</p>}

      {showCard && (
        <div className='showCard'>
          <h3>{name}</h3>
          <p>Color: {color}</p>
        </div>
      )}

    </>
  );
}

export default Card;
