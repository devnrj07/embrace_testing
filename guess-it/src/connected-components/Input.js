import React from "react";
import { connect } from "react-redux";

const Input = () => {
  return <div><button>Submit</button></div>;
};
const mapStateToProps = (state) => {
    return {};
};
export default connect(mapStateToProps)(Input);
