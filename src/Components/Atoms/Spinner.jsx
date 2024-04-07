
import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <div className="align-items-md-center">
    <Spinner animation="grow" role="status" className="spinner-color">
      <span className="visually-hidden">Cargando...</span>
    </Spinner></div>
  );
};

export default LoadingSpinner;
