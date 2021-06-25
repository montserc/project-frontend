import logo from './logo.png';
import './App.css';
import CardContent from './components/CardContent/CardContent';

function App() {
  return (    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <CardContent />
      </div>
    </div>
  );
}

export default App;
