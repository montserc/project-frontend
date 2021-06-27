import logo from './logo.png';
import './App.css';
import CardContent from './components/CardContent/CardContent';

function App() {
  return (    
    <div className="App">
      <header className="App-header">
        <a href="https://opentdb.com" target="_blank"><img src={logo} className="App-logo" alt="logo" /></a>
      </header>
      <div className="App-content">
        <CardContent />
      </div>
    </div>
  );
}

export default App;
