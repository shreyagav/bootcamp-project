import './App.css';
import Navigation from "./Navigation"
import OURPAGES from "./pages/OURPAGES"
import Home from "./pages/Home"
import TEAMROLES from './pages/TEAMROLES';



function App() {
  let component
  switch(window.location.pathname){ 
    case "/":
      component = <Home />
      break
    case "/movies":
      component = <OURPAGES />
      break
    case "/anime":
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