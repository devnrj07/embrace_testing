import React, { Component } from "react";
import { connect } from "redux";
class Input extends Component {
  render() {
    const formPage = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          type="text"
          id="word-guess"
          className="mb-2 mx-sm-3"
          placeholder="Enter Guess"
        />
        <button
          data-test="submit-btn"
          className="btn btn-primary mb-2"
          type="submit"
        >
          submit
        </button>
      </form>
    );

    return (
      <div data-test="component-input">
        {formPage}
      </div>
    );
  }
}
const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
