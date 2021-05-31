import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import db from '../utils/db';

const TodoForm = (props) => {

  const { todoList, setTodoList } = props;

  const [todo, setTodo] = useState('');

  const inputTodoHandler = (event) => {
    setTodo(event.target.value);
  };

  const addTodoListHandler = async() => {
    const newTodoList = [...todoList];
    const newTodo = {
      id: uuidv4(),
      text: todo,
      done: false,
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    setTodo('');
    await db.todoList.add(newTodo);
  };

  return (
    <InputGroup>
      <FormControl
        type="text"
        placeholder="What needs to be done?"
        value={todo}
        onChange={e => inputTodoHandler(e)}
      />
      <InputGroup.Append>
        <Button variant="primary" disabled={!todo} onClick={addTodoListHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

TodoForm.propTypes = {
  todoList: PropTypes.array,
  setTodoList: PropTypes.func,
};

export default TodoForm;
