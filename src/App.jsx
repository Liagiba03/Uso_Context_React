import {ThemeContext} from '../src/hooks/ThemeProvider'
import Title from './components/Title'
import ButtonTheme from './components/ButtonTheme'
import { useContext } from 'react';

function App() {
  const {changeTheme, darkMode} = useContext(ThemeContext);

  return (
    
      <div className={darkMode?"container-dark":"container-normal"}>
        <Title />
        <ButtonTheme />
      </div>
  )
}

export default App
