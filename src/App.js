import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Commits from './Component/Card'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
