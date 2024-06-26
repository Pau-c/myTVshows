import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//Pass props to a generic button
const AtomButton = (props) => {
  return (
    <Link to={props.linkTo}>
      <Button className={`m-1 button ${props.className}`} onClick={props.onClick} type={props.type}>
        {props.buttonText}
      </Button>
    </Link>
  );
};

export default AtomButton;
