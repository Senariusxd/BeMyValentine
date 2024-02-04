import { useState } from 'react'
import './App.css'

const frase = {
  frases: ['No', 'Are you Sure?', 'Really Sure?', 'Pookie Please', "Don't do this to me",
  'Im gonna cry..', 'You are braking my heart',]
}

function App() {
  const [count, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const yesButtonSize = count * 20 + 16

  function handleNoClick() {
    setNoCount(count + 1)
  }
  
  function getNoButtonText() {
    return frase.frases[Math.min(count, frase.frases.length - 1)];
  }
  
  return (
    <div className='valentine-container'>
      {yesPressed ?(
        <>
          <img
            alt='bear kissing'
            src='https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif'
          />
          <div className='text'>Yay!!!</div>
      </>
    ) : (
      <>
        <img
        className='bears'
          alt='bear with hearts'
          src='https://gifdb.com/images/high/cute-lover-bear-roses-ou7zho5oosxnpo6k.gif'
        />

        <h3>Will you be my valentine?</h3>
        <div>
          <button
            className='yesButton'
            style={{fontSize: yesButtonSize}}
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button>
          <button onClick={handleNoClick} className='noButton'>
            {getNoButtonText()}
          </button>
        </div>
      </>
    )}
  </div>
  )
}

export default App
