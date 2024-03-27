
import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <>
    <Navigation />
    <main>
          <Outlet />
    </main>
    <Footer />
    </>

  )
}

export default App
