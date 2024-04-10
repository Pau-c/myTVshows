import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../App.css";

export default function InputSearch(props) {
  return (
    <>
      <InputGroup className="mb-3 w-50 mx-auto m-5">
        <Button onClick={props.handleSearch} id="button-input-search">
          Buscar
        </Button>
        <Form.Control
          value={props.searchInput}
          onChange={props.searcher}
          type="text"
          placeholder="..."
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
}
