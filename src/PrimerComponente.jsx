import React, { useContext } from 'react'
import ThemeContext from './ModoOscuro'

function PrimerComponente() {
  const { theme, handleTheme } = useContext(ThemeContext)

  const handleColor = () => {
    if (theme === 'light') {
      return 'lorem-light'
    } else {
      return 'lorem-dark'
    }
  }

  return (
    <>
      <div className={`Componente ${theme}`}>
        <h2>Primer Componente</h2>

        <p className={handleColor()}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ea
          vel doloremque libero ad quasi deserunt, veniam nisi rerum possimus
          expedita vero aperiam excepturi sunt. Neque facilis ipsa minus illum.
        </p>
      </div>
    </>
  )
}

export default PrimerComponente
