import React, { useContext } from 'react'
import ThemeContext from './ModoOscuro'
import PrimerComponente from './PrimerComponente'
import SegundoComponente from './SegundoComponente'

function App() {
  const { theme, handleTheme } = useContext(ThemeContext)

  return (
    <>
      <div className={`App ${theme}`}>
        <h2>Prueba Modo Oscuro con Context</h2>
        <input
          type='radio'
          name='theme'
          id='light-context'
          onClick={handleTheme}
          value='light'
        />
        <label htmlFor='light-context'>Light</label>
        <input
          type='radio'
          name='theme'
          id='dark-context'
          onClick={handleTheme}
          value='dark'
        />
        <label htmlFor='dark-context'>Dark</label>
        <PrimerComponente />
        <SegundoComponente />
      </div>
    </>
  )
}

export default App
