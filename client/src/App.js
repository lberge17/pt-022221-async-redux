import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom'
import Pages from './components/Pages';

function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/people">People</NavLink>
      <br />
      <Pages />
    </div>
  );
}

export default App;
