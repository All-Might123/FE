import Index from './index/index';
import HomePage from './page/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './component/login';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/company" exact>
            <Index />
          </Route>
          <Route path="/home" exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
