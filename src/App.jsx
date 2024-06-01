import './App.css'
import { StarshipContextProvider } from './context/StarshipContext'
import AppRouting from './routing/AppRouting'

function App() {

  return (
    <>
      <StarshipContextProvider>
        <AppRouting />
      </StarshipContextProvider>
    </>
  )
}

export default App
