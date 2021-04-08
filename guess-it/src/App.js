import logo from "./logo.svg";
import "./App.css";
import Success from "./components/Success";
import { useState } from "react";
import GuessWord from "./components/GuessWord";
import Input from "./connected-components/Input";

function App() {
  const [success, setSuccess] = useState(false);
  return (
    <div className="container" data-test="component-app">
      <h1>Guess IT Game!</h1>
      <Success success={success} />
      {/* <Input success={success} /> */}
      <GuessWord
        guessedWords={[
          { guessedWord: "train", letterMatchCount: 2 },
          { guessedWord: "agile", letterMatchCount: 3 },
          { guessedWord: "party", letterMatchCount: 4 },
        ]}
      />
    </div>
  );
}

export default App;
