import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = (props) => {
  const { todo, index, deleteTodoListHandler, updateTodoListHandler } = props;

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
        <button type="button" className="delete-btn" onClick={() => deleteTodoListHandler(todo.id, index)}>
          <FontAwesomeIcon icon={faTrash} color="#cccccc" />
        </button>

      </div>
    </ListGroup.Item>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  deleteTodoListHandler: PropTypes.func,
  updateTodoListHandler: PropTypes.func,
};

export default TodoItem;
