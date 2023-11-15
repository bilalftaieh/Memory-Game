import './Styles/App.css'
import Header from './Components/Header'
import GameContainer from './Components/GameContainer'
import { AppDataProvider } from './Components/AppDataContext'
import Footer from './Components/Footer'


function App() {

  return (
    <AppDataProvider>
        <div className='app-container'>
        <Header/>
        <GameContainer/>
        <Footer/>
      </div>
    </AppDataProvider>
      
  )
}

export default App
