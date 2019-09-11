import React from "react";

const OperatorButton = (props) => {
  return (
    <div className = "operators">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className ="button lightblue">{props.operators.char}</button>
    </div>
  );
};
export default OperatorButton;