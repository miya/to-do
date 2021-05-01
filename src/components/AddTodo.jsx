import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const AddText = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Todo Text"
        />
        <InputGroup.Append>
          <Button variant="primary">Add</Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  )
}

export default AddText;

