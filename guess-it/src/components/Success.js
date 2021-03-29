import React from "react";
import PropTypes from "prop-types";

const Success = ({ success = true }) => {
  if (success) {
    return (
      <div className="alert alert-success" data-test="component-success">
        Congrats! You won!
      </div>
    );
  }
  if (!success) {
    return <div data-test="component-success"></div>;
  }
};

Success.propTypes = {
  success: PropTypes.bool.isRequired,
};
export default Success;
