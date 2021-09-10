
import './App.css';
import Home from './pages/home'
import Nav from './components/nav'
import Bio from './pages/bio'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
    </div>
    <div className="App">
      <Switch>
          <Route exact path="/">
                <Home />
          </Route>
          <Route exact path="/bio">
                <Bio />
          </Route>
          <Route exact path="/contact">
                <Contact />
          </Route>
          <Route exact path="/projects">
            
          </Route>
          <Route exact path="/services">
                
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
