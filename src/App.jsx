import React, { useEffect, useState } from 'react';
import './comp/App.css'

function App() {
  useEffect(() => {
    const handleMouseOver = () => {
      const button = document.querySelector('.btn');
      const windowWidth = window.innerWidth - button.offsetWidth;
      const windowHeight = window.innerHeight - button.offsetHeight;

      const newPositionX = Math.random() * windowWidth;
      const newPositionY = Math.random() * windowHeight;

      button.style.left = `${newPositionX}px`;
      button.style.top = `${newPositionY}px`;
    };

    const btn = document.querySelector('.btn');
    btn.addEventListener('mouseover', handleMouseOver);

    return () => {
      btn.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const [yesbutton, setyesbutton]= useState(false)


  return (
    <div className='cont'>

      {yesbutton ?(
        <>
          <img
            alt='bear kissing'
            src='https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif'
          />
          <div className='text'>Uwu ya somos novios!!!</div>
      </>
    ) : (
      <>
        <img
        className='bears'
          alt='bear with hearts'
          src='https://gifdb.com/images/high/cute-lover-bear-roses-ou7zho5oosxnpo6k.gif'
        />
        <h1>¿Quieres ser mi novia?</h1>
        <button className="btns" onClick={() => setyesbutton(true)}>Si</button>
        <button className="btn">No</button>
      </>
    )}




      
    </div>
  );
}

export default App;