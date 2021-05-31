import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import db from '../utils/db';

const TodoItem = (props) => {
  const { todo, index, todoList, setTodoList } = props;

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

  return (
    <ListGroup.Item variant={todo.done && 'success'}>
      <div>

        {/* checkbox */}
        <input id={index} type="checkbox" className="mr-2" checked={todo.done} onChange={() => updateTodoListHandler(todo.id, index)}></input>

        {/* todo */}
        {todo.done && (
          <strike>{todo.text}</strike>
        )}
        {!todo.done && (
          <>{todo.text}</>
        )}

        {/* delete button */}
        <button type="button" className="item-update-btn" onClick={() => deleteTodoListHandler(todo.id, index)}>
          <FontAwesomeIcon icon={faTrash} color="#cccccc" />
        </button>

      </div>
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
