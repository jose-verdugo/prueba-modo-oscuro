import React, { useContext } from 'react'
import ThemeContext from './ModoOscuro'

function PruimerComponente() {
  const { theme, handleTheme } = useContext(ThemeContext)

  return (
    <>
      <div className={`Componente ${theme}`}>
        <h2>Segundo Componente</h2>
      </div>
    </>
  )
}

export default PruimerComponente
