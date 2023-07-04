import React from "react";
import '../Components/Box.css';

const Box = (props) => {
  return (
    <div  onClick={props.onClick}   className="block">
      <h5>{props.value}</h5>
    </div>
  );
};

export default Box;
