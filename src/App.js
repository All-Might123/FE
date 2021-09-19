<<<<<<< HEAD
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
=======
import HomePage from './page/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/home.css';
function App() {
  return (
    <div className="App">
      <HomePage/>

>>>>>>> 62bd1b2 (app)
    </div>
  );
}

export default App;
