import { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Success from "./components/Success";
import GuessWord from "./components/GuessWord";
import Input from "./connected-components/Input";
import { getSecretWord } from "./actions";
class UnConnectedApp extends Component {

  componentDidMount(){
    this.props.getSecretWord()
  }
  render() {
    return (
      <div className="container" data-test="component-app">
        <h1>Guess IT Game!</h1>
        <Success success={this.props.success} />
        <Input />
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
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnConnectedApp);
