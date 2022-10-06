import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Practice/UserProfile/src/navigation'

function App() {
  // console.log("App rendering")
  return (
    <>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
    </>
  )
}

export default App
