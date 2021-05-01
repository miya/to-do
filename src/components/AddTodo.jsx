import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const AddTodo = (props) => {

  const { todo, inputTodoHandler, addTodoListHandler } = props;

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
          <Button variant="primary" onClick={addTodoListHandler}>Add</Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  )
}

AddTodo.propTypes = {
  todo: PropTypes.string,
  inputTodoHandler: PropTypes.func,
}

export default AddTodo;

