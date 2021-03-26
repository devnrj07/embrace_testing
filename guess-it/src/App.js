import logo from './logo.svg';
import './App.css';
import Success from './components/Success';

function App() {
  return (
    <div className="App" data-test="component-app">
      <h1>Guess IT Game!</h1>
      <Success />
    </div>
  );
}

export default App;
