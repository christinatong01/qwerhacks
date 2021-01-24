import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Main />
      </HashRouter>
    </div>
  );
}

export default App;
