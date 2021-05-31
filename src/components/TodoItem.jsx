import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import db from '../utils/db';

const TodoItem = (props) => {
  const { todo, index, todoList, setTodoList } = props;

  const [editText, setEditText] = useState(todo.text);
  const [edit, setEdit] = useState(false);

  const deleteTodoListHandler = (id, index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    db.todoList.delete(id);
  };

  const updateTodoListHandler = (id, index) => {
    const newTodoList = [...todoList];
    const text = newTodoList[index].text;
    const done = !newTodoList[index].done;
    newTodoList.splice(index, 1, { id, text, done });
    setTodoList(newTodoList);
    db.todoList.update(id, { done });
  };

  const inputEditTextHandler = (event) => {
    setEditText(event.target.value);
  };

  const onEditButtonPushed = (id) => {
    if (edit) {
      setEdit(false);
      db.todoList.update(id, { text: editText });
    }
    else {
      setEdit(true);
    }
  };

  return (
    <ListGroup.Item variant={todo.done && 'success'}>
      <InputGroup className="align-items-center">
        <input id={index} type="checkbox" className="mr-2" checked={todo.done} onChange={() => updateTodoListHandler(todo.id, index)}></input>

        {edit && (
          <FormControl className="mr-2" defaultValue={todo.text} onChange={(e) => { inputEditTextHandler(e) }} />
        )}

        {(todo.done && !edit) && (
          <strike>{todo.text}</strike>
        )}
        {(!todo.done && !edit) && (
          <>{todo.text}</>
        )}

        <div className="ml-auto">
          <button type="button" className="item-update-btn" onClick={() => onEditButtonPushed(todo.id)}>
            <FontAwesomeIcon icon={faEdit} color="#cccccc" />
          </button>

          <button type="button" className="item-update-btn" onClick={() => deleteTodoListHandler(todo.id, index)}>
            <FontAwesomeIcon icon={faTrash} color="#cccccc" />
          </button>
        </div>
      </InputGroup>
    </ListGroup.Item>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  todoList: PropTypes.array,
  setTodoList: PropTypes.func,
};

export default TodoItem;
