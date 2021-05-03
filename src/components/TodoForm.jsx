import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const TodoForm = (props) => {

  const { todo, inputTodoHandler, addTodoListHandler } = props;

  return (
    <>
      <InputGroup>
        <FormControl
          type="text"
          placeholder="add Todo"
          value={todo}
          onChange={e => inputTodoHandler(e)}
        />
        <InputGroup.Append>
          <Button variant="primary" disabled={!todo} onClick={addTodoListHandler}>Add</Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

TodoForm.propTypes = {
  todo: PropTypes.string,
  inputTodoHandler: PropTypes.func,
  addTodoListHandler: PropTypes.func,
};

export default TodoForm;
