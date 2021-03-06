import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import DB from '../utils/db';

const TodoForm = (props) => {

  const { todoList, setTodoList } = props;

  const [todoText, setTodoText] = useState('');

  const inputTodoTextHandler = (event) => {
    setTodoText(event.target.value);
  };

  const addTodo = async() => {
    const newTodoList = [...todoList];
    const newTodo = {
      text: todoText,
      done: false,
      created_at: new Date(),
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    setTodoText('');
    const db = new DB('todoList');
    await db.add(newTodo);
  };

  const enterButtonPressedHandler = (event) => {
    if (event.key === 'Enter' && todoText.length > 0) {
      addTodo();
    }
  };

  return (
    <InputGroup onKeyPress={(e) => { enterButtonPressedHandler(e) }}>
      <FormControl
        type="text"
        placeholder="What needs to be done?"
        value={todoText}
        onChange={e => inputTodoTextHandler(e)}
      />
      <InputGroup.Append>
        <Button variant="primary" disabled={todoText.length === 0} onClick={addTodo}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

TodoForm.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default TodoForm;
