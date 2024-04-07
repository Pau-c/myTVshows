
import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <Spinner animation="grow" role="status" className="spinner-color">
      <span className="visually-hidden">Esperar...</span>
    </Spinner>
  );
};

export default LoadingSpinner;
