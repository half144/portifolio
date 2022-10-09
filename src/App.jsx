import './App.css'
import Nav from './src/components/Nav'
import { BrowserRouter } from "react-router-dom"
import Router from './src/router/Router'
import Footer from './src/components/Footer'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Router />
        </div>
      </BrowserRouter>


    </div>
  )
}

export default App
