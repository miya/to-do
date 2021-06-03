import { React, useState } from 'react';
import PropTypes from 'prop-types';
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

  const addTodo = async() => {
    const newTodoList = [...todoList];
    const newTodo = {
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
        <Button variant="primary" disabled={!todo} onClick={addTodo}>
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
