import React from "react";
import PropTypes from "prop-types";

const Success = ({ success=false }) => {
  if (success) {
    return <div data-test="component-success">Congrats! You won!</div>;
  } else {
    return <div data-test="component-success"></div>;
  }
};

Success.propTypes = {
  success: PropTypes.bool.isRequired,
};
export default Success;
