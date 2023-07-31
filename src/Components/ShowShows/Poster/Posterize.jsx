import React, { useState } from "react";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Posterize(props) {
    // initial state object passed to the useState 
    //hook that initializes the meme state variable with an
    // object containing a single property posterText set to an empty string.
 
    const [meme, setMeme] = useState({
    posterText: "",
  });

  //
  function handleChange(event) {
    //name dynamically sets the key of the updated property in the meme state object.
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
    props.handleChange(value); 
  }
//generates input for writing over the poster 
  return (
    <div>
      

<InputGroup className="mb-3" >
            <Form.Control
           
           style={{
            boxShadow: 'none',
            WebkitBoxShadow: 'none',
          }}
          type="text"
            placeholder="Texto para el poster (Funciona mejor en Firefox)"
            className="form-input"
            name="posterText"
            value={meme.posterText}
            onChange={handleChange}
            maxLength={40}
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </InputGroup>



    </div>
  );
}
