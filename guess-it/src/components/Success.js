import React from "react";

const Success = ({ success }) => {
  if (success) {
    return <div data-test="component-success">Congrats! You won!</div>;
  } else {
    return <div data-test="component-success"></div>;
  }
};

export default Success;
