import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const AddTodo = (props) => {

  const { todo, inputTodoHandler } = props;

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          placeholder="add Todo"
          value={todo}
          onChange={e => inputTodoHandler(e)}
        />
        <InputGroup.Append>
          <Button variant="primary">Add</Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  )
}

export default AddTodo;

