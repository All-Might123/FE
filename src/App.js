import logo from './logo.svg';
import './App.css';
import Index from './index/index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './component/login';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
