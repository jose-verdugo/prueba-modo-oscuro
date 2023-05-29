import React, { useContext } from 'react'
import { ThemeProvider } from './ModoOscuro'
import App from './App'

function MyPage() {
  return (
    <>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </>
  )
}

export default MyPage
