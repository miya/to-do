import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TodoForm = React.memo((props) => {

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
          <Button variant="primary" disabled={!todo} onClick={addTodoListHandler}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
});

TodoForm.propTypes = {
  todo: PropTypes.string,
  inputTodoHandler: PropTypes.func,
  addTodoListHandler: PropTypes.func,
};

export default TodoForm;
