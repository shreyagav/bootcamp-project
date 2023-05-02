import './App.css';
import Navigation from "./Navigation"
import OURPAGES from "./pages/OURPAGES"
import Home from "./pages/Home"
import TEAMROLES from './pages/TEAMROLES';
import { Route, Routes } from "react-router-dom"

function App() {  
  let component
  switch(window.location.pathname){ 
    case "/":
      component = <Home /> 
      break
    case "/OURPAGES": 
      component = <OURPAGES />
      break
    case "/TEAMROLES":
      component = <TEAMROLES />
      break
  }
 return (
  <>
    <Navigation/>
      <div className="container">
      {component}
      </div>
  </>
  )
}

export default App;