
import './App.css';
import Home from './pages/home'
import Nav from './components/nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav></Nav>
    </div>
    <div className="App">
      <Home></Home>
    </div>
    </Router>
  );
}

export default App;
