import React, { useContext } from 'react'
import { ThemeContext } from '../hooks/ThemeProvider'

function Title() {

  const {changeTheme, darkMode} = useContext(ThemeContext);
  return (
    <h1 className={darkMode?"h1-dark":"h1-normal"}>Title</h1>
  )
}

export default Title