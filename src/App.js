import './Reset.css';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import DataPage from './components/DataPage/DataPage';
import HomePage from './components/HomePage/HomePage';

function App() {

  // local storage
  
  return (
    <div className="App">
      <Router>
        <Route path="/" exact >
          <HomePage />
        </Route>
        <Route path="/search/:paramQuery" exact component={DataPage}></Route>
      </Router>
    </div>
  );
}

export default App;
