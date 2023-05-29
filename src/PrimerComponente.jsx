import React, { useContext } from 'react'
import ThemeContext from './ModoOscuro'

function PrimerComponente() {
  const { theme, handleTheme } = useContext(ThemeContext)

  return (
    <>
      <div className={`Componente ${theme}`}>
        <h2>Primer Componente</h2>
      </div>
    </>
  )
}

export default PrimerComponente
