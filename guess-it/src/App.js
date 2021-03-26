import logo from "./logo.svg";
import "./App.css";
import Success from "./components/Success";
import { useState } from "react";

function App() {
  const [success, setSuccess] = useState(false);
  return (
    <div className="App" data-test="component-app">
      <h1>Guess IT Game!</h1>
      <Success success={success} />
    </div>
  );
}

export default App;
