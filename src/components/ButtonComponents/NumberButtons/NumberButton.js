import React from "react";

const NumberButton = (props) => {

  return ( props.numbers === '0' ?
    <button className ="darkblue bigbutton">{props.numbers}</button> :
    <button className ="darkblue button">{props.numbers}</button>
  );
};
export default NumberButton;