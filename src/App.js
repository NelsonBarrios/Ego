import Navbar from "./components/Navbar/Navbar.jsx";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact>
        <Navbar/>
      </Route>
      <Route path='/:id' exact>
        <div>Ficha de Modelo</div>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
