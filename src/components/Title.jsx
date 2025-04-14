import React, { useContext } from 'react'
import { ThemeContext } from '../hooks/ThemeProvider'

function Title() {

  return (
    <h1 className={darkMode?"h1-dark":"h1-normal"}>Title</h1>
  )
}

export default Title